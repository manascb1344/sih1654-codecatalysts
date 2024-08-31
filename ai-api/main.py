import warnings
import os
from crewai import Agent, Task, Crew
from langchain_community.tools import DuckDuckGoSearchRun
from crewai_tools import (
    FileReadTool,
    ScrapeWebsiteTool,
    MDXSearchTool,
    SerperDevTool,
    WebsiteSearchTool,
)
from crewai_tools import tool
import requests
import tempfile
from flask import Flask, request, jsonify

warnings.filterwarnings("ignore")

os.environ["OPENAI_API_KEY"] = (
    "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"
)
os.environ["OPENAI_MODEL_NAME"] = "llama-3.1-8b-Instant"
os.environ["OPENAI_API_BASE"] = "https://api.groq.com/openai/v1"
os.environ["SERPER_API_KEY"] = "ed4d278c5de832745081465dac9fea2bae1db8ff"

search_tool = SerperDevTool()
scrape_tool = ScrapeWebsiteTool()
web_rag_tool = WebsiteSearchTool(
    website="https://www.cse.iitd.ac.in/index.php/2011-12-29-23-14-30/faculty",
    config=dict(
        llm=dict(
            provider="groq",
            config=dict(
                model="llama-3.1-8b-Instant",
            ),
        ),
        embedder=dict(
            provider="huggingface",
            config=dict(
                model="BAAI/bge-small-en-v1.5",
            ),
        ),
    ),
)
web_rag_tool_s = WebsiteSearchTool(
    website="https://www.iith.ac.in/people/faculty/",
    config=dict(
        llm=dict(
            provider="groq",
            config=dict(
                model="llama-3.1-8b-Instant",
            ),
        ),
        embedder=dict(
            provider="huggingface",
            config=dict(
                model="BAAI/bge-small-en-v1.5",
            ),
        ),
    ),
)


@tool("DuckDuckGoSearch")
def search(search_query: str):
    """Search the web for information on a given topic."""
    return DuckDuckGoSearchRun().run(search_query)


drdo_resume_analyzer = Agent(
    role="DRDO-focused Resume Analyzer",
    goal="Analyze resumes for DRDO relevance, identify key defense research skills, and provide insights for DRDO career advancement",
    tools=[],  # Tools will be set dynamically based on the resume URL
    verbose=True,
    backstory=(
        "You are a specialized Resume Analyzer with deep knowledge of DRDO's research areas, "
        "projects, and technological needs. Your expertise lies in identifying candidates with "
        "potential for defense research and development. You understand the unique requirements "
        "of DRDO positions, from entry-level scientists to senior research leads. Your analysis "
        "considers both technical skills and the innovative thinking necessary for advancing "
        "India's defense capabilities."
    ),
)

panel_finder_agent = Agent(
    role="Interview Panel Finder",
    goal="Identify and select a panel of 3-5 experts from IIT Hyderabad and IIT Delhi institution to evaluate a specific candidate based on the resume analysis summary.",
    tools=[web_rag_tool, web_rag_tool_s],
    verbose=True,
    backstory=(
        "You are an expert in sourcing and selecting highly qualified individuals for academic and research panels. "
        "Your task involves finding suitable experts from prestigious institutions like IIT-H to form an interview panel. "
        "The panel is intended to evaluate a specific candidate based on the summary provided by the DRDO-focused Resume Analyzer Agent. "
        "Ensure that the experts' expertise aligns with the research needs of DRDO and the candidate's profile."
    ),
)

drdo_resume_analysis_task = Task(
    description=(
        "Conduct a comprehensive analysis of the provided resume with a focus on DRDO relevance. Specifically:"
        "\n1. Identify skills and experiences aligned with DRDO's key research areas which are {areas} "
        "\n2. Evaluate the candidate's potential contribution to ongoing or future DRDO projects."
        "\n3. Assess the candidate's research and innovation capabilities relevant to defense technology."
        "\n4. Analyze academic background and its relevance to DRDO's scientific domains."
        "\n5. Identify any security clearance levels or experience with classified projects."
        "\n6. Evaluate publications, patents, or other scientific contributions relevant to defense research."
        "\n7. Provide recommendations for positioning the candidate for DRDO roles or career advancement within the organization."
    ),
    expected_output=(
        "A detailed analytical report including:\n"
        "1. Executive Summary: Overall assessment of the candidate's fit for DRDO (2-3 sentences)\n"
        "2. DRDO Skill Alignment: Key skills matching DRDO's research areas and technological needs\n"
        "3. Project Potential: Possible DRDO projects or departments where the candidate could contribute effectively\n"
        "4. Research and Innovation Assessment: Evaluation of the candidate's potential for defense-related innovation\n"
        "5. Academic Relevance: Analysis of how the candidate's academic background supports DRDO's mission\n"
        "6. Security and Clearance: Any relevant experience with classified projects or existing clearances\n"
        "7. Scientific Contributions: Notable publications, patents, or research relevant to defense technology\n"
        "8. DRDO Career Recommendations:\n"
        "   a. Suggested DRDO roles or departments best suited for the candidate\n"
        "   b. Skill development priorities for DRDO career advancement\n"
        "   c. Potential specialized training or certifications beneficial for DRDO work\n"
        "9. Unique Insights: Any non-obvious observations about the candidate's potential in defense research\n"
        "\nThe analysis should provide actionable insights for both the candidate seeking a career in DRDO "
        "and for DRDO recruiters or managers evaluating the candidate."
    ),
    agent=drdo_resume_analyzer,
    output_file="interview_materials.md",
)

panel_finder_task = Task(
    description=(
        "Based on the resume analysis summary of the specific candidate provided by the DRDO-focused Resume Analyzer Agent, perform the following:"
        "\n1. Search for experts in relevant fields from IIT-H and IIT-D institution who can evaluate the candidate."
        "\n2. Filter potential panelists based on their expertise related to DRDO's key research areas."
        "\n3. Evaluate the panelists' previous involvement in defense research or similar high-tech projects."
        "\n4. Provide a detailed list of potential panelists including their names, affiliations, and relevant profiles."
        "\n5. Select a final panel of 3-5 experts who are most suitable for evaluating the specific candidate's qualifications and potential."
    ),
    expected_output=(
        "Final answer should have a detailed report including:\n"
        "1. Panelist List: Clearly state the Names, affiliations, and brief profiles of the selected 3-5 panelists\n"
        "2. Expert Matching: Justification for the selection based on the candidate's resume analysis summary and DRDO's research needs\n"
        "3. Recommendations: Any additional recommendations for the interview process or panel composition\n"
        "\nInclude the report in detail without fail else consequences will be harsh. The report should provide actionable insights for assembling a high-quality interview panel to evaluate the specific candidate for DRDO recruitment."
    ),
    agent=panel_finder_agent,
    output_file="interview_panel.md",
    context=[drdo_resume_analysis_task],
)

job_application_crew = Crew(
    agents=[drdo_resume_analyzer, panel_finder_agent],
    tasks=[drdo_resume_analysis_task, panel_finder_task],
    verbose=True,
)

app = Flask(__name__)


@app.route("/analyze_resume", methods=["POST"])
def analyze_resume():
    resume_url = request.json.get("resume_url")
    if not resume_url:
        return jsonify({"error": "No resume URL provided"}), 400

    # Download the resume content
    response = requests.get(resume_url)
    if response.status_code != 200:
        return jsonify({"error": "Failed to download resume"}), 400

    # Create a temporary file for the resume
    with tempfile.NamedTemporaryFile(
        mode="w+", suffix=".md", delete=False
    ) as temp_resume:
        temp_resume.write(response.text)
        temp_resume_path = temp_resume.name

    # Update tools to use the temporary resume file
    read_resume = FileReadTool(file_path=temp_resume_path)
    semantic_search_resume = MDXSearchTool(
        mdx=temp_resume_path,
        config=dict(
            llm=dict(
                provider="groq",
                config=dict(
                    model="llama-3.1-8b-Instant",
                ),
            ),
            embedder=dict(
                provider="huggingface",
                config=dict(
                    model="BAAI/bge-small-en-v1.5",
                ),
            ),
        ),
    )

    # Update the drdo_resume_analyzer agent with new tools
    drdo_resume_analyzer.tools = [read_resume, semantic_search_resume]

    inputs = {
        "areas": """Advanced Materials: Development of lightweight, high-strength materials for defense applications, including composites, ceramics, and special alloys.

Artificial Intelligence and Robotics: Research in AI, machine learning, and autonomous systems for military applications, including unmanned vehicles and decision-support systems.

Cybersecurity: Development of secure communication systems, encryption technologies, and protection against cyber threats.

Electronic Warfare: Designing systems for electronic intelligence, jamming, and protection against electronic attacks.

Naval Systems: Research and development of technologies for submarines, warships, sonar systems, and underwater weapons.

Radar and Communication Systems: Development of advanced radar, communication, and surveillance systems.

Life Sciences: Research in biomedical engineering, human physiology, and protective gear for soldiers operating in extreme environments.

Nuclear, Biological, and Chemical Defence: Developing protective measures and detection systems for nuclear, biological, and chemical threats.

Missiles and Weapons Systems: While well-known for missile development, DRDO also works on other weapons systems, including advanced munitions and directed energy weapons.

Combat Vehicles and Armaments: Designing and developing tanks, armored vehicles, and other ground-based weaponry."""
    }

    result = job_application_crew.kickoff(inputs=inputs)

    # Read the interview_panel.md file
    try:
        with open("interview_panel.md", "r") as f:
            interview_panel_content = f.read()
    except FileNotFoundError:
        return jsonify({"error": "Interview panel file not generated"}), 500

    # Read the interview_materials.md file
    try:
        with open("interview_materials.md", "r") as f:
            interview_materials_content = f.read()
    except FileNotFoundError:
        return jsonify({"error": "Interview materials file not generated"}), 500

    # Clean up the temporary file
    os.unlink(temp_resume_path)

    return jsonify({
        "interview_panel": interview_panel_content,
        "interview_materials": interview_materials_content
    })


if __name__ == "__main__":
    port = 5000
    print(f"API running on port {port}")
    app.run(debug=True, port=port)