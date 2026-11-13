import { Check } from 'lucide-react';
import { useState } from 'react';
import { FACULTY_LEAD, SOCHING_CONTACT } from '../data/courses';
import type { EnquiryConfirmation } from '../utils/enquiry';
import { EnquiryForm } from './EnquiryForm';

interface HeroSectionProps {
  savedConfirmation: EnquiryConfirmation | null;
  onSuccess: (confirmation: EnquiryConfirmation) => void;
  onReset: () => void;
}

export function HeroSection({
  savedConfirmation,
  onSuccess,
  onReset,
}: HeroSectionProps) {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 lg:px-8 lg:pt-12 lg:pb-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Top on Mobile, Right on Desktop: Get Course Details / Request a Callback */}
          <div
            id="lead-form"
            className="rounded-2xl border border-slate-200 bg-[#FAFAFA] p-6 sm:p-7 lg:order-2 lg:col-span-5"
          >
            <div className="border-b border-slate-200 pb-4">
              <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                Get Course Details / Request a Callback
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Enter your details below to receive Early Class 12 Live Course guidance from our
                academic advisor.
              </p>
            </div>

            <div className="mt-5">
              <EnquiryForm
                idPrefix="hero"
                savedConfirmation={savedConfirmation}
                onSuccess={onSuccess}
                onReset={onReset}
              />
            </div>
          </div>

          {/* Below on Mobile, Left on Desktop: Course Positioning + Academic Leadership */}
          <div className="flex flex-col lg:order-1 lg:col-span-7">
            <h1
              className="font-display font-bold tracking-tight text-slate-900 [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.125rem, 3.6vw, 3.25rem)', lineHeight: 1.08 }}
            >
              Start Your Class 12 Board Preparation Early
            </h1>

            <p className="mt-3 text-base font-semibold text-slate-800 sm:text-lg">
              {SOCHING_CONTACT.positioningTagline}
            </p>

            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {SOCHING_CONTACT.targetAudience}. Prepare ahead of time, strengthen your concepts,
              complete your syllabus systematically and enter your board year with confidence.
            </p>

            {/* Academic Leadership — Dr. Anshuman Agarwal Sir */}
            <article
              id="faculty"
              className="mt-7 grid grid-cols-1 items-stretch gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAFA] p-5 sm:grid-cols-12"
            >
              <div className="sm:col-span-4">
                <div className="aspect-[3/4] h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                  {!portraitFailed ? (
                    <img
                      src={FACULTY_LEAD.image}
                      alt={FACULTY_LEAD.name}
                      referrerPolicy="no-referrer"
                      onError={() => setPortraitFailed(true)}
                      className="h-full w-full object-contain object-bottom"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col justify-between bg-slate-900 p-4 text-white">
                      <span className="font-mono text-xs text-slate-300">
                        15+ Years Experience
                      </span>
                      <p className="font-display text-2xl font-bold">AA</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-center sm:col-span-8">
                <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                  Faculty Lead: {FACULTY_LEAD.name}
                </h2>
                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-3.5">
                  {FACULTY_LEAD.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-start gap-2 text-xs font-medium text-slate-800 sm:text-sm"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-orange-700"
                        aria-hidden="true"
                      />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
