import { ArrowRight } from 'lucide-react';

interface FooterLinkItem {
  label: string;
  href: string;
}

const USEFUL_LINKS: FooterLinkItem[] = [
  { label: 'About Soching', href: '#' },
  { label: 'About Dr. Anshuman', href: '#' },
  { label: 'Our Book', href: '#' },
  { label: 'Soching App', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Register As Home Tutor', href: '#' },
  { label: 'Blogs', href: '#' },
  { label: 'STSE Result', href: '#' },
];

const POPULAR_COURSES: FooterLinkItem[] = [
  { label: 'Class 10th Crash Course – Boards Preparation', href: '#' },
  { label: 'BRAHMASTRA Class 10th Course', href: '#' },
  { label: 'TEJAS Class 9th Course', href: '#' },
  { label: '11th, 12th Boards & NEET Biology Course', href: '#' },
  { label: '11th, 12th Boards & NEET Chemistry Course', href: '#' },
  { label: '11th, 12th Boards & NEET Physics Course', href: '#' },
  { label: '11th, 12th Boards & JEE Chemistry Course', href: '#' },
  { label: '11th, 12th Boards & JEE Physics Course', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Emblem + Intro + CTA */}
          <div className="flex flex-col items-start lg:col-span-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/aistudio/Soching_logo__2__29d160f0.png`}
              alt="Soching Education logo"
              className="h-32 w-32 shrink-0 object-contain"
            />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              SOCHING EDUCATION is an innovative Offline, Online &amp; Home Tuitions platform located
              at Kota - The Education City of India
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-400 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors duration-150 hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <span>Register With Us</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-base font-bold text-slate-900">Useful Links</h3>
            <ul className="mt-4 space-y-3">
              {USEFUL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors duration-150 hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-bold text-slate-900">Popular Courses</h3>
            <ul className="mt-4 space-y-3">
              {POPULAR_COURSES.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="text-sm leading-snug text-slate-600 transition-colors duration-150 hover:text-slate-900"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-bold text-slate-900">Get Contact</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                <span className="font-semibold text-slate-700">Phone:</span>{' '}
                <a href="tel:+918949193467" className="hover:text-slate-900">
                  +91-8949193467
                </a>
              </p>

              <p>
                <span className="font-semibold text-slate-700">E-mail:</span>{' '}
                <a href="mailto:sochingeducation@gmail.com" className="hover:text-slate-900">
                  sochingeducation@gmail.com
                </a>
              </p>

              <p>
                <span className="font-semibold text-slate-700">Location:</span> 46, Near Kota
                Dhaani,
                <br />
                Kalpana Chawla Circle,
                <br />
                Swami Vivekananda Nagar,
                <br />
                Kota, Rajasthan
                <br />
                PIN: 324010
              </p>
            </div>

            <div className="mt-5 flex items-center gap-5 text-slate-500">
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors duration-150 hover:text-slate-900"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="transition-colors duration-150 hover:text-slate-900"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-150 hover:text-slate-900"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
