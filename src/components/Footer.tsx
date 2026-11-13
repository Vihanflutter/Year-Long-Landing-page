import { MapPin, Phone } from 'lucide-react';
import { SOCHING_CONTACT } from '../data/courses';

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <p className="font-display text-xl font-bold tracking-tight text-slate-900">
              {SOCHING_CONTACT.brandName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {SOCHING_CONTACT.courseName} — {SOCHING_CONTACT.positioningTagline}{' '}
              {SOCHING_CONTACT.targetAudience}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p className="mt-1.5 flex items-start gap-2 text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                <span>{SOCHING_CONTACT.address}</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Contact / WhatsApp Number</p>
              <p className="mt-1.5 flex items-center gap-2 font-mono text-slate-600">
                <Phone className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                <span>{SOCHING_CONTACT.phone}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 {SOCHING_CONTACT.brandName}. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
            <a href="#lead-form" className="hover:text-slate-900">
              Enquiry Form
            </a>
            <a href="#faculty" className="hover:text-slate-900">
              Faculty Lead
            </a>
            <a href="#academic-system" className="hover:text-slate-900">
              Academic System
            </a>
            <a href="#study-material" className="hover:text-slate-900">
              Study Material
            </a>
            <a href="#outcomes" className="hover:text-slate-900">
              Student Outcomes
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
