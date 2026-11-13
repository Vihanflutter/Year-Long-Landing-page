import { useState } from 'react';
import { STUDENT_ACHIEVERS, type StudentAchiever } from '../data/courses';
import zainabAliImg from '../assets/images/zainab_ali_1794562248702.jpg';
import apurvaGuptaImg from '../assets/images/apurva_gupta_1794562249084.jpg';
import vibhanshuShrimaliImg from '../assets/images/vibhanshu_shrimali_1794562248191.jpg';
import kevlinNirwanImg from '../assets/images/kevlin_nirwan_1794562249129.jpg';
import surajSharmaImg from '../assets/images/suraj_sharma_1794562250728.jpg';
import adityaSinghImg from '../assets/images/aditya_singh_1794562251765.jpg';
import tanmayYadavImg from '../assets/images/tanmay_yadav_1794562251577.jpg';
import darshanaTaterImg from '../assets/images/darshana_tater_1794562252295.jpg';
import gyanJhaImg from '../assets/images/gyan_jha_1794562252669.jpg';
import sumantSinghImg from '../assets/images/sumant_singh_1794562253291.jpg';
import harshLegaImg from '../assets/images/harsh_lega_1794562253507.jpg';
import pranjalBindalImg from '../assets/images/pranjal_bindal_1794562253715.jpg';
import yuvrajSinghImg from '../assets/images/yuvraj_singh_1794562254475.jpg';
import musarratKhanamImg from '../assets/images/musarrat_khanam_1794562255156.jpg';
import aishwaryaJugtawatImg from '../assets/images/aishwarya_jugtawat_1794562255868.jpg';
import prajjwalSharmaImg from '../assets/images/prajjwal_sharma_1794562255989.jpg';
import akashJaiswalImg from '../assets/images/akash_jaiswal_1794562258160.jpg';

const ACHIEVER_PORTRAITS: Record<string, string> = {
  'zainab-ali': zainabAliImg,
  'apurva-gupta': apurvaGuptaImg,
  'vibhanshu-shrimali': vibhanshuShrimaliImg,
  'kevlin-nirwan': kevlinNirwanImg,
  'suraj-sharma': surajSharmaImg,
  'aditya-singh': adityaSinghImg,
  'tanmay-yadav': tanmayYadavImg,
  'darshana-tater': darshanaTaterImg,
  'gyan-jha': gyanJhaImg,
  'sumant-singh': sumantSinghImg,
  'harsh-lega': harshLegaImg,
  'pranjal-bindal': pranjalBindalImg,
  'yuvraj-singh': yuvrajSinghImg,
  'musarrat-khanam': musarratKhanamImg,
  'aishwarya-jugtawat': aishwaryaJugtawatImg,
  'prajjwal-sharma': prajjwalSharmaImg,
  'akash-jaiswal': akashJaiswalImg,
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
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">
            Verified Student Outcomes
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Past student achievements shared for reference only and are not presented as
            guaranteed outcomes of the Early Class 12 Live Course.
          </p>
        </div>
      </div>

      {/* Continuous Auto-Carousel of Individual Student Cards */}
      <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Verified Student Outcomes Auto Carousel"
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
