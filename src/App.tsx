import { useEffect, useState } from 'react';
import { AcademicOverview } from './components/AcademicOverview';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VerifiedOutcomes } from './components/VerifiedOutcomes';
import type { EnquiryConfirmation } from './utils/enquiry';

const STORAGE_KEY = 'soching_early_class_12_enquiry';

export default function App() {
  const [savedConfirmation, setSavedConfirmation] = useState<EnquiryConfirmation | null>(
    () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as EnquiryConfirmation) : null;
      } catch {
        return null;
      }
    },
  );

  useEffect(() => {
    try {
      if (savedConfirmation) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedConfirmation));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage quota errors in restricted frames
    }
  }, [savedConfirmation]);

  const handleFocusTopForm = () => {
    const formCard = document.getElementById('lead-form');
    if (formCard) {
      formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    const targetInput =
      document.getElementById('hero-student-name') ?? document.getElementById('hero-city');
    if (targetInput instanceof HTMLInputElement) {
      window.setTimeout(() => targetInput.focus(), 250);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900">
      <Header onFocusTopForm={handleFocusTopForm} />

      <main>
        <HeroSection
          savedConfirmation={savedConfirmation}
          onSuccess={(confirmation) => setSavedConfirmation(confirmation)}
          onReset={() => setSavedConfirmation(null)}
        />

        <AcademicOverview />

        <VerifiedOutcomes />
      </main>

      <Footer />
    </div>
  );
}
