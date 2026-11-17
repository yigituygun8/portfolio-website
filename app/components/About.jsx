'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets, toolsData } from "@/assets/assets.js";

const certifications = [
  {
    emoji: '🤖',
    title: 'Microsoft AI Innovators Internship Program 2026',
    subtitle: 'Microsoft Turkey — On-Device AI & RAG',
    details: [
      'Completed the Microsoft AI Innovators Internship Program (Summer 2026) in the CSA track.',
      'Built a fully offline document Q&A assistant with Microsoft Foundry Local and a custom RAG pipeline (qwen2.5-1.5b chat, qwen3-embedding-0.6b embeddings).',
      'FastAPI + React/Vite stack with PDF ingestion, cosine-similarity retrieval, grounded answers, and clickable source citations.'
    ],
    color: 'border-cyan-300',
    hoverColor: 'hover:border-cyan-400',
    bgAccent: 'bg-cyan-50',
  },
  {
    emoji: '🏅',
    title: 'Amazon University Engagement Program 2025',
    subtitle: 'SDE Track — Frontend, Backend, DevOps',
    details: [
      'Completed the Software Development Engineer (SDE) track covering end-to-end web development.',
      'Topics: Frontend (React, HTML/CSS), Backend (APIs, Microservices), DevOps (CI/CD, Cloud).',
      'Hands-on projects and collaborative workshops with Amazon engineers.'
    ],
    color: 'border-orange-300',
    hoverColor: 'hover:border-orange-400',
    bgAccent: 'bg-orange-50',
  },
  {
    emoji: '🏅',
    title: 'Google Project Management',
    subtitle: 'Foundations of PM & Agile — Coursera',
    details: [
      'Google Career Certificates program covering project management fundamentals.',
      'Agile methodologies: Scrum, Kanban, Sprint planning and retrospectives.',
      'Project lifecycle, stakeholder management, risk assessment, and documentation.'
    ],
    color: 'border-blue-300',
    hoverColor: 'hover:border-blue-400',
    bgAccent: 'bg-blue-50',
  },
  {
    emoji: '🏅',
    title: 'HackerRank Java Certificate',
    subtitle: 'Problem Solving & OOP',
    details: [
      'Certified proficiency in Java programming and object-oriented design.',
      'Covered data structures, algorithms, and problem-solving techniques.',
      'Demonstrated skills in Java collections, generics, and design patterns.'
    ],
    color: 'border-green-300',
    hoverColor: 'hover:border-green-400',
    bgAccent: 'bg-green-50',
  },
  {
    emoji: '🌐',
    title: 'Network Technician Career Path',
    subtitle: 'Cisco — Networking Fundamentals',
    details: [
      'Different types of networks and how they work. How devices send and receive data, types of network cabling, and how IP addresses find information on the Internet.',
      'Physical, data link and network layers, and how they work together to provide end-to-end connectivity.',
      'Benefits of cloud and virtualization. Troubleshooting knowledge to support endpoints, networks, and users as a member of a help desk team.'
    ],
    color: 'border-purple-300',
    hoverColor: 'hover:border-purple-400',
    bgAccent: 'bg-purple-50',
  },
  {
    emoji: '🎓',
    title: 'IELTS Academic — Band 7.0',
    subtitle: 'British Council — English Proficiency',
    details: [
      'Overall band score of 7.0 (Good User) in the IELTS Academic examination.',
      'Demonstrated proficiency in academic English across Listening, Reading, Writing, and Speaking modules.',
      'Qualified for international study programs and professional English communication.'
    ],
    color: 'border-red-300',
    hoverColor: 'hover:border-red-400',
    bgAccent: 'bg-red-50',
  }
];

const nodes = [
  {
    id: 'academic',
    icon: '🎓',
    title: 'Academic Journey',
    tagline: 'Bilkent CTIS ➔ FH Oberösterreich (Erasmus+)',
    desc: 'Third-year CTIS student at Bilkent (CGPA 3.93/4.00, Full Scholarship). Currently on Erasmus+ exchange in Austria.',
    badges: [],
    accent: 'border-blue-400 hover:border-blue-600',
    activeBg: 'bg-blue-50/60',
    lineColor: '#2563eb', // blue-600
    yCoord: 45,
  },
  {
    id: 'experience',
    icon: '💼',
    title: 'Industry Experience',
    tagline: 'Akbank Mobile & Commencis QA',
    desc: 'React Native Intern at Akbank (Payment Systems) & QA Intern at Commencis on OTP Bank European digital banking.',
    badges: [],
    accent: 'border-indigo-400 hover:border-indigo-600',
    activeBg: 'bg-indigo-50/60',
    lineColor: '#4f46e5', // indigo-600
    yCoord: 148,
  },
  {
    id: 'focus',
    icon: '⚡',
    title: 'Core Engineering Focus',
    tagline: 'Full-Stack · Mobile · QA Automation',
    desc: 'Building responsive full-stack applications with Node.js/React, mobile apps with React Native & Kotlin, plus manual testing and unit, API & E2E testing.',
    badges: [],
    accent: 'border-emerald-400 hover:border-emerald-600',
    activeBg: 'bg-emerald-50/60',
    lineColor: '#059669', // emerald-600
    yCoord: 252,
  },
  {
    id: 'mentorship',
    icon: '🤝',
    title: 'Teaching & Mentorship',
    tagline: 'Bilkent TA & 1-on-1 Tutoring',
    desc: 'Mentored 50+ students in C and Data Structures labs at Bilkent. Also provide private tutoring for university CS (Python, Java, DSA) and high school exam prep.',
    badges: [],
    accent: 'border-amber-400 hover:border-amber-600',
    activeBg: 'bg-amber-50/60',
    lineColor: '#d97706', // amber-600
    yCoord: 355,
  },
];

const About = () => {
  const [currentCert, setCurrentCert] = useState(0);
  const [openCert, setOpenCert] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const modalRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const isModalOpen = openCert !== null;

  // Close the certificate modal with Escape and lock page scroll while it is open
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpenCert(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Move focus into the modal when it opens and restore it when it closes
  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.focus();
    } else if (lastFocusedRef.current) {
      lastFocusedRef.current.focus();
      lastFocusedRef.current = null;
    }
  }, [isModalOpen]);

  const openCertificate = (index) => {
    lastFocusedRef.current = document.activeElement;
    setOpenCert(index);
  };

  // Keep Tab focus inside the dialog
  const trapModalFocus = (event) => {
    if (event.key !== 'Tab' || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const activeCertData = openCert !== null ? certifications[openCert] : null;

  return (
    <section id="about" className="w-full px-6 sm:px-[8%] md:px-[10%] py-12 font-jetbrains scroll-mt-24">
      <h4 className="text-center mb-2 text-lg text-gray-600">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl mb-4">./About Me</h2>
      <p className="text-center text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-12">
        An interactive concept map of my academic background, industry internships, technical focus, and teaching journey.
      </p>

      {/* ===================== CONCEPT MIND-MAP SECTION ===================== */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-0 my-6">
        
        {/* LEFT NODE: Central Profile Entity */}
        <div className="w-full sm:w-auto lg:w-72 shrink-0 self-center flex flex-col items-center p-5 bg-white border-2 border-gray-200/90 rounded-3xl shadow-sm relative group hover:border-gray-400 transition-all duration-300">
          <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden mb-3 shadow-sm relative border border-gray-100">
            <Image
              src={assets.user_image}
              alt="Osman Yiğit Uygun"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: "center 72%" }}
              priority
            />
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Central Entity
            </span>
            <h3 className="text-lg font-bold text-gray-900">Osman Yiğit Uygun</h3>
            <p className="text-xs text-gray-500 mt-1">Bilkent University &amp; FH OÖ</p>
            <p className="text-xs text-gray-400 mt-0.5">Software Engineer</p>
          </div>

          {/* Connected point indicator on desktop right edge */}
          <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-gray-400 items-center justify-center shadow-xs z-10">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          </div>
        </div>

        {/* MIDDLE: Animated SVG Connector Curves (Desktop Only) */}
        <div className="hidden lg:block w-20 xl:w-28 shrink-0 relative self-stretch">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
            fill="none"
          >
            {nodes.map((node, index) => {
              const isHovered = activeNode === index;
              return (
                <g key={node.id}>
                  {/* Outer glow line on hover */}
                  {isHovered && (
                    <path
                      d={`M 0 200 C 50 200, 50 ${node.yCoord}, 100 ${node.yCoord}`}
                      stroke={node.lineColor}
                      strokeWidth="6"
                      strokeOpacity="0.25"
                      strokeLinecap="round"
                    />
                  )}
                  {/* Main connecting path */}
                  <path
                    d={`M 0 200 C 50 200, 50 ${node.yCoord}, 100 ${node.yCoord}`}
                    stroke={isHovered ? node.lineColor : '#cbd5e1'}
                    strokeWidth={isHovered ? "2.5" : "1.75"}
                    strokeDasharray={isHovered ? "none" : "4 3"}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  {/* End node anchor dot */}
                  <circle
                    cx="100"
                    cy={node.yCoord}
                    r={isHovered ? "4" : "3"}
                    fill={isHovered ? node.lineColor : "#94a3b8"}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* RIGHT BRANCHES: 4 Concept Node Cards */}
        <div className="flex-1 w-full flex flex-col justify-between gap-3.5">
          {nodes.map((node, index) => {
            const isHovered = activeNode === index;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(index)}
                onMouseLeave={() => setActiveNode(null)}
                className={`relative p-4 sm:p-4.5 rounded-2xl border-2 bg-white transition-all duration-300 shadow-xs cursor-default
                  ${isHovered ? `${node.accent} ${node.activeBg} shadow-md translate-x-1` : 'border-gray-200/90 hover:border-gray-300'}
                `}
              >
                {/* Mobile left indicator connector */}
                <div className="lg:hidden absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{node.icon}</span>
                    <h3 className="font-bold text-gray-900 text-base">{node.title}</h3>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 sm:text-right">
                    {node.tagline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                  {node.desc}
                </p>

                {/* Micro Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {node.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-0.5 bg-white/90 text-gray-700 text-[11px] font-medium rounded-md border border-gray-200 shadow-2xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ===================== BOTTOM SECTION: TOOLS & CERTIFICATIONS ===================== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14 items-stretch">
        
        {/* LEFT COLUMN: Tools & Frameworks */}
        <div className="w-full border border-gray-200 rounded-2xl p-6 bg-gray-50/50 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-gray-800 font-bold text-base flex items-center gap-2">
                <span className="text-xl">🛠️</span> Tools &amp; Frameworks
              </h4>
              <span className="text-xs text-gray-400">Core Toolkit</span>
            </div>

            <ul className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {toolsData.map(({ title, icon }, index) => (
                <li
                  key={index}
                  className="group relative flex items-center justify-center h-14 rounded-xl border border-gray-200 bg-white hover:-translate-y-1 hover:border-gray-500 hover:shadow-md transition-all duration-300 cursor-pointer shadow-xs"
                >
                  <Image src={icon} alt={title} className="w-7 h-7 object-contain" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-white text-[11px] font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:-top-11 transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
                    {title}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-400">
            <span>Modern Web, Mobile &amp; QA Stack</span>
            <span className="text-gray-500 font-medium">{toolsData.length} Technologies</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Certifications (Interactive Carousel Slider) */}
        <div className="w-full border border-gray-200 rounded-2xl p-6 bg-white shadow-xs flex flex-col justify-between">
          <div>
            {/* Carousel Header with Controls */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-gray-800 font-bold text-base flex items-center gap-2">
                <span className="text-xl">📜</span> Certifications &amp; Credentials
              </h4>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length)}
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-600 hover:bg-gray-100 flex items-center justify-center text-xs text-gray-700 transition-colors cursor-pointer"
                  aria-label="Previous certification"
                >
                  ←
                </button>
                <span className="text-xs font-semibold text-gray-600 px-1">
                  {currentCert + 1} / {certifications.length}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentCert((prev) => (prev + 1) % certifications.length)}
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-600 hover:bg-gray-100 flex items-center justify-center text-xs text-gray-700 transition-colors cursor-pointer"
                  aria-label="Next certification"
                >
                  →
                </button>
              </div>
            </div>

            {/* Current Active Certificate Card */}
            {(() => {
              const cert = certifications[currentCert];
              return (
                <button
                  type="button"
                  onClick={() => openCertificate(currentCert)}
                  aria-haspopup="dialog"
                  className={`w-full text-left rounded-xl border-[1.5px] ${cert.color} ${cert.bgAccent} p-4 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl shrink-0">{cert.emoji}</span>
                      <span className="block">
                        <span className="block font-bold text-gray-900 text-sm leading-tight">{cert.title}</span>
                        <span className="block text-gray-500 text-xs mt-0.5">{cert.subtitle}</span>
                      </span>
                    </span>
                    <span className="text-xs text-gray-400 font-mono mt-1 shrink-0">Details ↗</span>
                  </span>
                </button>
              );
            })()}
          </div>

          {/* Dots Indicator at the bottom */}
          <div className="flex items-center justify-center gap-2 pt-4 mt-4 border-t border-gray-100">
            {certifications.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentCert(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentCert === idx ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to certification ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ===================== CERTIFICATION DETAILS MODAL ===================== */}
      {activeCertData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-overlay-in"
          onKeyDown={trapModalFocus}
        >
          {/* Dimmed backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-[2px]"
            onClick={() => setOpenCert(null)}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            aria-describedby="cert-modal-description"
            tabIndex={-1}
            className="relative w-full max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl animate-modal-in focus:outline-none"
          >
            <div className={`border-b ${activeCertData.color} ${activeCertData.bgAccent} px-5 py-4 pr-14`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl shrink-0">{activeCertData.emoji}</span>
                <div>
                  <h3 id="cert-modal-title" className="font-bold text-gray-900 text-base leading-snug">
                    {activeCertData.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">{activeCertData.subtitle}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenCert(null)}
                className="absolute right-3 top-3 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-500 hover:text-gray-900 hover:bg-white transition-colors cursor-pointer"
                aria-label="Close certificate details"
              >
                ✕
              </button>
            </div>

            <div id="cert-modal-description" className="px-5 py-4">
              <p className="text-[11px] font-semibold tracking-wide text-gray-400 uppercase mb-2">
                What I did
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {activeCertData.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-gray-400 mt-0.5 shrink-0">▸</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-gray-100 bg-gray-50/60 px-5 py-3">
              <span className="text-xs text-gray-400 font-mono">
                {openCert + 1} / {certifications.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const next = (openCert - 1 + certifications.length) % certifications.length;
                    setOpenCert(next);
                    setCurrentCert(next);
                  }}
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-600 hover:bg-white flex items-center justify-center text-xs text-gray-700 transition-colors cursor-pointer"
                  aria-label="Previous certification"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next = (openCert + 1) % certifications.length;
                    setOpenCert(next);
                    setCurrentCert(next);
                  }}
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-600 hover:bg-white flex items-center justify-center text-xs text-gray-700 transition-colors cursor-pointer"
                  aria-label="Next certification"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default About;