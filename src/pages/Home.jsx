
function HomePage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: "'Public Sans', 'Noto Sans', sans-serif" }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 rounded-2xl"
                  style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://upload.wikimedia.org/wikipedia/commons/9/9b/Drdo-delhi-1-1-1675666412.webp')" }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Revolutionizing Interview Board Selection for DRDO
                    </h1>
                    <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      AI-driven expert matching system for interview boards
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1466b8] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Get started</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-md border border-[#dce0e5] bg</svg>-white p-4 flex-col">
                  <div className="text-[#111418]" data-icon="UserGear" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,1,0,12.24,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.26-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm188.25,43.07-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,0,0-8-13.86l-4.67,2.7a23.92,23.92,0,0,0-7.58-4.39V108a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,8,13.86l4.67-2.7a23.92,23.92,0,0,0,7.58,4.39V164a8,8,0,0,0,16,0v-5.38a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM208,136a8,8,0,1,1,8,8A8,8,0,0,1,208,136Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Profile Management</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">Create and manage your profile</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-md border border-[#dce0e5] bg-white p-4 flex-col">
                  <div className="text-[#111418]" data-icon="ListChecks" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32ZM82.34,98.34,56,124.69,45.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32ZM74.34,170.34,56,188.69,45.66,178.34a8,8,0,1,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Application Status</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">Check your application status</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-md border border-[#dce0e5] bg-white p-4 flex-col">
                  <div className="text-[#111418]" data-icon="CalendarCheck" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,32H200V24a8,8,0,0,0-16,0v8H72V24a8,8,0,0,0-16,0v8H40A24.07,24.07,0,0,0,16,56V216a24.07,24.07,0,0,0,24,24H216a24.07,24.07,0,0,0,24-24V56A24.07,24.07,0,0,0,216,32ZM40,48H56v8a8,8,0,0,0,16,0V48H184v8a8,8,0,0,0,16,0V48h16a8,8,0,0,1,8,8v48H32V56A8,8,0,0,1,40,48ZM216,224H40a8,8,0,0,1-8-8V120H224V216A8,8,0,0,1,216,224Zm-35.72-67.72L152,184.49l-12.28-12.28a8,8,0,0,0-11.31,11.32l18,18a8,8,0,0,0,11.31,0l32-32a8,8,0,0,0-11.32-11.31Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Interview Schedule</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">View your interview dates</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-md border border-[#dce0e5] bg-white p-4 flex-col">
                  <div className="text-[#111418]" data-icon="Comments" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,32H40A24.07,24.07,0,0,0,16,56V176a24.07,24.07,0,0,0,24,24H88v24a8,8,0,0,0,13.66,5.66L136,200h80a24.07,24.07,0,0,0,24-24V56A24.07,24.07,0,0,0,216,32ZM224,176a8,8,0,0,1-8,8H136a8,8,0,0,0-5.66,2.34L96,220.69V192a8,8,0,0,0-8-8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Support</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">Get help and support</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 @[840px]:grid-cols-[repeat(2,1fr)]">
                <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                  <h2 className="text-[#111418] text-lg font-bold leading-tight">How the AI System Works</h2>
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    Our AI-driven system automatically matches interview board members with the relevant expertise for each candidate, ensuring the most suitable interviewers are selected based on candidate profiles and interview subjects.
                  </p>
                </div>
                <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                  <h2 className="text-[#111418] text-lg font-bold leading-tight">Steps to Apply</h2>
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    Create a profile, check application status, view interview schedule, and get support all in one place.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 @[840px]:grid-cols-[repeat(2,1fr)]">
                <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                  <h2 className="text-[#111418] text-lg font-bold leading-tight">Profile Management</h2>
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    Keep your profile updated with the latest information to ensure accurate matching with interview boards.
                  </p>
                </div>
                <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                  <h2 className="text-[#111418] text-lg font-bold leading-tight">Interview Schedule</h2>
                  <p className="text-[#637588] text-sm font-normal leading-normal">
                    Stay on top of your interview dates with our easy-to-use scheduling feature.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-10 px-4 @container">
              <div className="text-center">
                <h2 className="text-[#111418] text-2xl font-bold leading-tight @[480px]:text-3xl">Sign Up for Early Access</h2>
                <p className="text-[#637588] text-sm font-normal leading-normal @[480px]:text-base">
                  Get started today and be among the first to experience our AI-powered interview board selection system.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1466b8] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Get started</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Learn more</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-t-[40px] px-4 bg-[#f0f2f4] @container mt-14">
              <div className="mx-auto max-w-[1024px] py-10 @[840px]:py-[60px] flex flex-col gap-5 @[840px]:gap-6">
                <div className="grid grid-cols-1 gap-4 @[840px]:grid-cols-[repeat(2,1fr)]">
                  <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                    <h2 className="text-[#111418] text-lg font-bold leading-tight">How We Ensure Data Security</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">
                      We employ the latest security measures to ensure your personal data remains protected and confidential.
                    </p>
                  </div>
                  <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                    <h2 className="text-[#111418] text-lg font-bold leading-tight">About Our Technology</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">
                      Our cutting-edge AI technology ensures the most accurate matching of interview board members with candidate expertise.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 @[840px]:grid-cols-[repeat(2,1fr)]">
                  <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                    <h2 className="text-[#111418] text-lg font-bold leading-tight">Support and Resources</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">
                      Access our comprehensive support and resource center for any questions or assistance.
                    </p>
                  </div>
                  <div className="rounded-md border border-[#dce0e5] bg-white p-4">
                    <h2 className="text-[#111418] text-lg font-bold leading-tight">Stay Updated</h2>
                    <p className="text-[#637588] text-sm font-normal leading-normal">
                      Sign up for our newsletter to receive the latest updates and news about our AI-driven interview board selection system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;