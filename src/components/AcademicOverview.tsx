import { Check } from 'lucide-react';
import {
  ACADEMIC_SYSTEM_POINTS,
  DOUBT_SOLVING_POINTS,
  STUDY_MATERIAL_POINTS,
  TEST_SYSTEM_POINTS,
} from '../data/courses';

const OVERVIEW_LIST_SECTIONS = [
  {
    id: undefined,
    index: '01',
    title: 'Academic System',
    description:
      'Live interactive teaching designed around NCERT clarity, daily revision, and strong Class 12 Board conceptual foundations.',
    points: ACADEMIC_SYSTEM_POINTS,
  },
  {
    id: 'study-material',
    index: '02',
    title: 'Structured Study Material',
    description:
      'Complete Class 12 textbook-aligned resources built for board exam mastery.',
    points: STUDY_MATERIAL_POINTS,
  },
  {
    id: undefined,
    index: '03',
    title: 'Doubt Solving System',
    description:
      'Continuous academic support so no Class 12 concept stays unresolved.',
    points: DOUBT_SOLVING_POINTS,
  },
  {
    id: undefined,
    index: '04',
    title: 'Complete Test System',
    description: 'Progressive CBSE Board pattern evaluation.',
    points: TEST_SYSTEM_POINTS,
  },
];

export function AcademicOverview() {
  return (
    <section
      id="academic-system"
      className="border-b border-slate-200 bg-[#FAFAFA] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-4xl">
            Systematic Class 12 Board Readiness Starting in Class 11
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Built exclusively for students currently studying in Class 11 who want to cover their
            Class 12 CBSE syllabus methodically ahead of the board academic year.
          </p>
        </div>

        {/* Structured Vertical List Form */}
        <div className="mt-10 space-y-5">
          {OVERVIEW_LIST_SECTIONS.map((section) => (
            <article
              key={section.title}
              id={section.id}
              className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <span className="font-mono text-xs font-semibold text-orange-700 tabular-nums">
                  {section.index}
                </span>
                <h3 className="mt-1.5 font-display text-2xl font-bold text-slate-900">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {section.description}
                </p>
              </div>

              <ul className="space-y-3 border-t border-slate-200 pt-5 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-800 sm:text-base">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-orange-700"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
