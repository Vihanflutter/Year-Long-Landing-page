import { useState } from 'react';
import { STUDENT_ACHIEVERS, type StudentAchiever } from '../data/courses';
import zainabAliImg from '../assets/images/zainab_ali_1794562248702.jpg';
import apurvaGuptaImg from '../assets/images/apurva_gupta_1794562249084.jpg';
import vibhanshuShrimaliImg from '../assets/images/vibhanshu_shrimali_1794562248191.jpg';

const ACHIEVER_PORTRAITS: Record<string, string> = {
  'zainab-ali': zainabAliImg,
  'apurva-gupta': apurvaGuptaImg,
  'vibhanshu-shrimali': vibhanshuShrimaliImg,
  'kevlin-nirwan': `${import.meta.env.BASE_URL}assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a27be68c.png`,
  'suraj-sharma': `${import.meta.env.BASE_URL}assets/aistudio/Confident_Doctor_Portrait_with_Stethoscope_d595ec8e.png`,
  'aditya-singh': `${import.meta.env.BASE_URL}assets/aistudio/Professional_Doctor_Portrait_with_Stethoscope_03893a3d.png`,
  'tanmay-yadav': `${import.meta.env.BASE_URL}assets/aistudio/Friendly_Doctor_Portrait_with_Stethoscope_624491ad.png`,
  'darshana-tater': `${import.meta.env.BASE_URL}assets/aistudio/Confident_Doctor_Portrait_with_Stethoscope__1__2a156e02.png`,
  'gyan-jha': `${import.meta.env.BASE_URL}assets/aistudio/Professional_Indian_Doctor_Portrait_550c97f7.png`,
  'sumant-singh': `${import.meta.env.BASE_URL}assets/aistudio/Friendly_Doctor_Portrait_with_Stethoscope__1__c3bc621a.png`,
  'harsh-lega': `${import.meta.env.BASE_URL}assets/aistudio/Professional_Doctor_Portrait_with_Stethoscope__1__45d280bf.png`,
  'pranjal-bindal': `${import.meta.env.BASE_URL}assets/aistudio/Young_Doctor_Portrait_with_Stethoscope_b27de12f.png`,
  'yuvraj-singh': `${import.meta.env.BASE_URL}assets/aistudio/Approachable_Doctor_in_Purple_and_White_88b0d0f1.png`,
  'musarrat-khanam': `${import.meta.env.BASE_URL}assets/aistudio/Professional_Doctor_in_Coral_Hijab_b2eb6684.png`,
  'aishwarya-jugtawat': `${import.meta.env.BASE_URL}assets/aistudio/Professional_Medical_Portrait_with_Stethoscope_c6b577f6.png`,
  'prajjwal-sharma': `${import.meta.env.BASE_URL}assets/aistudio/Young_Doctor_with_Stethoscope_f24f3d4c.png`,
  'akash-jaiswal': `${import.meta.env.BASE_URL}assets/aistudio/Smiling_Doctor_Portrait_with_Stethoscope_7f24890e.png`,
};

function getInitials(name: string): string {
  const parts = name.replace(/^Dr\.\s+/i, '').trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

interface AchieverCardProps {
  student: StudentAchiever;
  failed: boolean;
  onImageError: (id: string) => void;
}

function AchieverCard({ student, failed, onImageError }: AchieverCardProps) {
  const portraitSrc = ACHIEVER_PORTRAITS[student.id];

  return (
    <article className="flex w-[224px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAFA] sm:w-[244px]">
      <div className="aspect-[3/4] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
        {!failed && portraitSrc ? (
          <img
            src={portraitSrc}
            alt={`${student.name} — ${student.college}`}
            referrerPolicy="no-referrer"
            onError={() => onImageError(student.id)}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900 font-display text-2xl font-bold text-white">
            {getInitials(student.name)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="font-display text-base font-bold leading-snug text-slate-900">
            {student.name}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">{student.college}</p>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-200 pt-2.5 text-xs">
          <span className="font-mono font-medium text-slate-500">{student.batch}</span>
          {student.rank && (
            <span className="font-mono font-semibold text-orange-700">{student.rank}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function VerifiedOutcomes() {
  const [failedPortraits, setFailedPortraits] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedPortraits((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="outcomes" className="border-b border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-3xl">
            Mentored by <span className="whitespace-nowrap">Dr. Anshuman Agarwal</span> Sir. Placed in India&apos;s top medical colleges
          </h2>
        </div>
      </div>

      {/* Continuous Auto-Carousel of Individual Student Cards */}
      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Student Achievers Auto Carousel"
          data-testid="outcomes-auto-carousel"
          className="outcomes-marquee-wrapper relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
        >
          <div className="outcomes-marquee-track">
            <div className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6">
              {STUDENT_ACHIEVERS.map((student) => (
                <AchieverCard
                  key={student.id}
                  student={student}
                  failed={Boolean(failedPortraits[student.id])}
                  onImageError={handleImageError}
                />
              ))}
            </div>

            <div className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6" aria-hidden="true">
              {STUDENT_ACHIEVERS.map((student) => (
                <AchieverCard
                  key={`${student.id}-dup`}
                  student={student}
                  failed={Boolean(failedPortraits[student.id])}
                  onImageError={handleImageError}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
