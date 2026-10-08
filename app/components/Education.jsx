'use client';
import React, { useState } from 'react';

const schools = [
  {
    id: 'bilkent',
    name: 'İhsan Doğramacı Bilkent University',
    country: 'Ankara, Turkey',
    flag: '🇹🇷',
    degree: 'BSc - Information Systems & Technologies (CTIS)',
    date: 'Aug 2024 - Jun 2028',
    active: true,
    accent: 'border-blue-700',
    bgLight: 'bg-blue-50',
    text: 'text-blue-700',
    highlights: [
      { emoji: '⭐', label: 'CGPA 3.93 / 4.00' },
      { emoji: '🎓', label: 'Full Scholarship (100%)' },
      { emoji: '🏛️', label: 'Bilkent ACM' },
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Software Engineering Principles',
      'OOP with Java',
      'DBMS',
      'Linux Fundamentals',
      'Computer Networks',
      'Backend & Frontend Development',
      "Software Testing, Verification & Validation",
    ],
  },
  {
    id: 'fhooe',
    name: 'FH Oberösterreich',
    country: 'Wels, Austria',
    flag: '🇦🇹',
    degree: 'Erasmus+ Exchange - Computer Science',
    date: 'Sep 2026 - Feb 2027',
    active: true,
    accent: 'border-red-600',
    bgLight: 'bg-red-50',
    text: 'text-red-600',
    highlights: [
      { emoji: '🌍', label: 'Erasmus+ Exchange Program' },
      { emoji: '🇦🇹', label: 'Austria' },
    ],
    coursework: [
      'Mobile App Development',
      'Semester Project',
      'AI in Creativity',
      'Data & Information Security',
      'Foundations of Computer Science',
      'Object-Oriented Programming with Python',
      'Deutsch',
    ],
  },
  {
    id: 'metropolia',
    name: 'Metropolia University of Applied Sciences',
    country: 'Helsinki, Finland',
    flag: '🇫🇮',
    degree: 'ICT Summer School',
    date: 'Aug 2025',
    active: false,
    accent: 'border-orange-500',
    bgLight: 'bg-orange-50',
    text: 'text-orange-500',
    highlights: [
      { emoji: '🇫🇮', label: 'Helsinki, Finland' },
    ],
    coursework: [
      'Introduction to Machine Learning',
      'Understanding Game Backend',
    ],
    note: 'An intensive 10-day program (Aug 4-14) that provided broad insight into ICT disciplines and helped define my future academic path.',
  },
  {
    id: 'darusafaka',
    name: 'Darüşşafaka',
    country: 'Istanbul, Turkey',
    flag: '🇹🇷',
    degree: 'High School Graduate',
    date: 'Sep 2016 - Jun 2024',
    active: false,
    accent: 'border-green-700',
    bgLight: 'bg-green-50',
    text: 'text-green-700',
    highlights: [
      { emoji: '🥇', label: 'Valedictorian - Ranked 1st' },
      { emoji: '📊', label: 'GPA: 97.03 / 100' },
      { emoji: '🏆', label: 'Ranked 1755th in YKS (University Entrance Exam)' },
    ],
    activities: [
      'AI & Machine Learning Club',
      'Erasmus Club',
      'Football Team',
      'E-Sports Club',
      'Basketball Club',
    ],
  },
];

const Education = () => {
  const [selected, setSelected] = useState(0);
  const school = schools[selected];

  return (
    <section id="education" className="w-full px-5 sm:px-[8%] md:px-[12%] py-10 scroll-mt-28 font-jetbrains">
      <h4 className="text-center mb-2 text-lg text-gray-600">Where I Studied</h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-12">./Education</h2>

      <div className="max-w-5xl mx-auto">
        {/* Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {schools.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-start text-left px-4 py-4 rounded-2xl border-2 w-full transition-all duration-300 cursor-pointer
                ${selected === i
                  ? `${s.accent} ${s.bgLight} shadow-md`
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }
              `}
            >
              <span className="text-xl mb-1.5">{s.flag}</span>
              <span className={`font-bold text-sm leading-tight ${selected === i ? s.text : 'text-gray-800'}`}>
                {s.name}
              </span>
              <span className="text-xs text-gray-500 mt-1">{s.date}</span>
              {s.active && (
                <span className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold tracking-wide">
                  ● Active
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <div
          className={`rounded-2xl border-2 ${school.accent} ${school.bgLight} p-6 md:p-8 transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className={`text-2xl font-bold ${school.text}`}>{school.name}</h3>
              <p className="text-gray-700 mt-1 font-medium">{school.degree}</p>
              <p className="text-sm text-gray-400 mt-0.5">{school.country}</p>
            </div>
            <span
              className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full border-2 ${school.accent} ${school.text} bg-white shrink-0 self-start`}
            >
              {school.date}
            </span>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {school.highlights.map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 font-medium shadow-xs"
              >
                <span>{h.emoji}</span>
                {h.label}
              </span>
            ))}
          </div>

          {/* Coursework */}
          {school.coursework && (
            <div className={school.activities ? 'mb-6' : ''}>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {school.coursework.map((c, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white text-gray-700 text-xs rounded-lg border border-gray-200 font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Activities */}
          {school.activities && (
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Activities & Clubs
              </h4>
              <div className="flex flex-wrap gap-2">
                {school.activities.map((a, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white text-gray-700 text-xs rounded-lg border border-gray-200 font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Note */}
          {school.note && (
            <p className="text-sm text-gray-600 italic border-l-4 border-orange-300 pl-4 mt-4">
              {school.note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
