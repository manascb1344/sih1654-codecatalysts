import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const panelists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    qualification: "Ph.D. in Computer Science, 15 years industry experience",
    image: "https://i.pravatar.cc/150?img=1",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    qualification: "M.S. in Electrical Engineering, Senior Software Architect",
    image: "https://i.pravatar.cc/150?img=3",
    initials: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    qualification: "MBA, Director of Human Resources",
    image: "https://i.pravatar.cc/150?img=5",
    initials: "ER"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    qualification: "Ph.D. in Data Science, AI Research Lead",
    image: "https://i.pravatar.cc/150?img=7",
    initials: "JW"
  }
];

const InterviewPanelPage = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Interview Panel</h1>
        <p className="text-xl text-muted-foreground mt-2">Meet our esteemed committee members</p>
      </header>

      <Separator />

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Interview Committee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {panelists.map((panelist) => (
                <Card key={panelist.id}>
                  <CardContent className="flex items-center space-x-4 p-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={panelist.image} alt={panelist.name} />
                      <AvatarFallback>{panelist.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{panelist.name}</h3>
                      <p className="text-sm text-muted-foreground">{panelist.qualification}</p>
                      <Badge variant="secondary" className="mt-2">Panelist</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Interview Process</h2>
        <p className="text-muted-foreground">
          Our interview process consists of multiple rounds designed to assess your technical skills,
          problem-solving abilities, and cultural fit. The panelists above will guide you through
          various stages, ensuring a comprehensive evaluation of your candidacy.
        </p>
      </section>

      <footer className="text-center text-sm text-muted-foreground">
        <p>© 2023 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InterviewPanelPage;