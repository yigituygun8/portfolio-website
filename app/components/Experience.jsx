import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Akbank, Hybrid",
      role: "React Native Intern",
      date: "Sep 2026",
      current: false,
      bullets: [
        <>
          Joined the <strong>Payment Systems Technologies team</strong> within Akbank Mobile,
          working alongside a React Native mentor to gain exposure to the team&apos;s{" "}
          <strong>mobile development workflow</strong>.
        </>,
        <>
          Participated in <strong>sprint planning sessions, daily stand-ups, and team meetings</strong>,
          gaining insight into how the team plans and prioritizes work using{" "}
          <strong>Azure DevOps</strong>.
        </>,
        <>
          Reviewed code alongside mentor to understand <strong>code review standards and practices</strong>,
          and strengthened <strong>TypeScript</strong> foundations through independent{" "}
          <strong>React Native demo projects</strong>.
        </>,
      ],
    },
    {
      company: "Commencis, Hybrid",
      role: "QA Engineering Intern",
      date: "Jul 2026 – Aug 2026",
      current: false,
      bullets: [
        <>
          Supported QA efforts on a{" "}
          <strong>European digital banking project (OTP Bank, Hungary)</strong>, gaining hands-on
          exposure to <strong>API testing (Postman)</strong> and{" "}
          <strong>network traffic inspection (Charles Proxy)</strong>, alongside
          defect tracking via <strong>JIRA/XRAY</strong>.
        </>,
        <>
          Completed structured onboarding training across QA domains including{" "}
          <strong>accessibility & exploratory dark mode testing</strong>, building experience with{" "}
          <strong>non-functional testing standards</strong>.
        </>,
      ],
    },
    {
      company: "Commencis, Remote",
      role: "Software Testing Trainee",
      date: "Mar 2026 – Apr 2026",
      current: false,
      bullets: [
        <>
          Selected for a <strong>6-week Software Testing Camp</strong> covering{" "}
          <strong>SDLC test processes</strong>,{" "}
          <strong>black-box/white-box techniques</strong>, continuous reporting,
          and <strong>non-functional testing</strong> (performance, security).
        </>,
        <>
          Gained hands-on exposure to{" "}
          <strong>test automation frameworks</strong> and{" "}
          <strong>CI/CD integration</strong> in collaborative sessions.
        </>,
      ],
    },
    {
      company: "Google AI & Technology Academy, Remote",
      role: "AI Trainee",
      date: "Dec 2025 – Jun 2026",
      current: false,
      bullets: [
        <>
          Scholar in an <strong>8-month AI Track</strong> covering{" "}
          <strong>LLMs, FastAPI, VCS</strong> and{" "}
          <strong>Software Project Management</strong> (P2P sessions, bootcamps,
          hackathons).
        </>,
      ],
    },
    {
      company: "İhsan Doğramacı Bilkent University, Ankara",
      role: "Undergraduate Teaching Assistant",
      date: "Oct 2025 – May 2026",
      current: false,
      bullets: [
        <>
          Assisted and mentored <strong>30+ students</strong> in labs for{" "}
          <strong>Introduction to Programming with C (CTIS 151)</strong>.
        </>,
        <>
          Tutored and supported <strong>20+ students</strong> for{" "}
          <strong>Data Structures & Algorithms (CTIS 152)</strong>.
        </>,
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full px-5 sm:px-[8%] md:px-[12%] py-10 scroll-mt-28 font-jetbrains"
    >
      <h4 className="text-center mb-2 text-lg text-gray-600">
        What I&apos;ve Done
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-12">./Experience</h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4.75 md:left-[30%] top-8 bottom-8 w-0.5 bg-gray-300 rounded"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row mb-12 last:mb-0 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[11px] md:left-[calc(30%-8px)] top-8 w-[18px] h-[18px] rounded-full border-2 border-white z-10 flex items-center justify-center bg-gray-300 group-hover:bg-blue-600 transition-colors duration-300">
              {exp.current ? (
                <>
                  <span className="absolute -inset-1.5 rounded-full bg-green-500 animate-pulse opacity-60"></span>
                  <span className="relative w-full h-full rounded-full bg-green-500"></span>
                </>
              ) : (
                <span className="w-full h-full rounded-full"></span>
              )}
            </div>

            {/* Date Badge (Left Side on Desktop) */}
            <div className="pl-12 md:pl-0 md:w-[30%] md:pr-12 flex items-start mt-6 md:mt-7 md:justify-end">
              <span className="inline-block px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gray-100 text-gray-700 rounded border border-gray-200 shadow-sm whitespace-nowrap">
                {exp.date}
              </span>
            </div>

            {/* Content Card (Right Side) */}
            <div className="w-full pl-12 md:pl-10 mt-4 md:mt-0 md:w-[70%]">
              <div
                className={`p-6 bg-white border rounded-xl hover:shadow-lg hover:bg-lightHover hover:-translate-y-1 transition-all duration-300 ${exp.current ? "border-green-400 shadow-sm ring-1 ring-green-100" : "border-gray-400"}`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-md font-semibold text-blue-800 mb-4">
                  {exp.company}
                </h4>
                <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
