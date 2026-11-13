import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import { useState } from 'react';
import { SOCHING_CONTACT } from '../data/courses';
import {
  BOARD_OPTIONS,
  STUDY_MEDIUM_OPTIONS,
  createEnquiryConfirmation,
  type EnquiryConfirmation,
  validateStepOne,
  validateStepTwo,
} from '../utils/enquiry';

interface EnquiryFormProps {
  savedConfirmation: EnquiryConfirmation | null;
  onSuccess: (confirmation: EnquiryConfirmation) => void;
  onReset: () => void;
  idPrefix: string;
}

export function EnquiryForm({
  savedConfirmation,
  onSuccess,
  onReset,
  idPrefix,
}: EnquiryFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [studentName, setStudentName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [normalizedPhone, setNormalizedPhone] = useState('');
  const [city, setCity] = useState('');
  const [board, setBoard] = useState('CBSE');
  const [studyMedium, setStudyMedium] = useState('');
  const [currentClass, setCurrentClass] = useState('Class 11');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleStepOneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateStepOne({
      studentName,
      mobileNumber,
    });

    if (!validation.isValid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    setErrors({});
    setNormalizedPhone(validation.normalizedPhone);
    setStep(2);
  };

  const handleStepTwoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateStepTwo({
      city,
      board,
      studyMedium,
      currentClass,
    });

    if (!validation.isValid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    setErrors({});
    const resolvedPhone =
      normalizedPhone || validateStepOne({ studentName, mobileNumber }).normalizedPhone;
    const confirmation = createEnquiryConfirmation(
      {
        studentName,
        mobileNumber,
        city,
        board,
        studyMedium,
        currentClass,
      },
      resolvedPhone,
    );
    onSuccess(confirmation);
  };

  const handleResetAll = () => {
    setStep(1);
    setStudentName('');
    setMobileNumber('');
    setNormalizedPhone('');
    setCity('');
    setBoard('CBSE');
    setStudyMedium('');
    setCurrentClass('Class 11');
    setErrors({});
    onReset();
  };

  if (savedConfirmation) {
    return (
      <div
        data-testid={`${idPrefix}-confirmation`}
        className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" />
          <div>
            <p className="text-xs font-semibold text-emerald-800">
              Enquiry Submitted Successfully
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
              Callback Requested for {savedConfirmation.studentName}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Our academic team will contact you on{' '}
              <span className="font-semibold text-slate-900">
                {savedConfirmation.mobileNumber}
              </span>{' '}
              with full Early Class 12 Live Course details.
            </p>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-1 gap-3 rounded-xl border border-emerald-200 bg-white p-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs text-slate-500">Enquiry Reference</dt>
            <dd className="mt-0.5 font-mono font-semibold text-slate-900">
              {savedConfirmation.referenceId}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Current Class</dt>
            <dd className="mt-0.5 font-semibold text-slate-900">
              {savedConfirmation.currentClass}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">City · Board · Medium</dt>
            <dd className="mt-0.5 text-slate-800">
              {savedConfirmation.city} · {savedConfirmation.board} · {savedConfirmation.studyMedium}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Soching Education Contact</dt>
            <dd className="mt-0.5 font-mono font-semibold text-slate-900">
              {SOCHING_CONTACT.phone}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`tel:${SOCHING_CONTACT.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-slate-800"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call {SOCHING_CONTACT.phone}
          </a>

          <button
            type="button"
            onClick={handleResetAll}
            className="text-xs font-semibold text-slate-600 underline underline-offset-4 hover:text-slate-900 cursor-pointer"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <form
        onSubmit={handleStepOneSubmit}
        noValidate
        data-testid={`${idPrefix}-step-1`}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor={`${idPrefix}-student-name`}
            className="block text-xs font-semibold text-slate-700"
          >
            Name <span className="text-rose-600">*</span>
          </label>
          <input
            id={`${idPrefix}-student-name`}
            type="text"
            value={studentName}
            onChange={(e) => {
              setStudentName(e.target.value);
              if (errors.studentName) setErrors((prev) => ({ ...prev, studentName: '' }));
            }}
            placeholder="Enter student name"
            className={`mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
              errors.studentName
                ? 'border-rose-500 focus:border-rose-600'
                : 'border-slate-300 focus:border-orange-700'
            }`}
          />
          {errors.studentName && (
            <p className="mt-1 text-xs font-medium text-rose-700">{errors.studentName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-mobile`}
            className="block text-xs font-semibold text-slate-700"
          >
            Phone <span className="text-rose-600">*</span>
          </label>
          <input
            id={`${idPrefix}-mobile`}
            type="tel"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
              if (errors.mobileNumber) setErrors((prev) => ({ ...prev, mobileNumber: '' }));
            }}
            placeholder="10-digit mobile number"
            className={`mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
              errors.mobileNumber
                ? 'border-rose-500 focus:border-rose-600'
                : 'border-slate-300 focus:border-orange-700'
            }`}
          />
          {errors.mobileNumber && (
            <p className="mt-1 text-xs font-medium text-rose-700">{errors.mobileNumber}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-orange-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 cursor-pointer"
        >
          Enroll Now
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleStepTwoSubmit}
      noValidate
      data-testid={`${idPrefix}-step-2`}
      className="space-y-3.5"
    >
      <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs">
        <div className="min-w-0">
          <span className="text-slate-500">Details for </span>
          <span className="font-semibold text-slate-900">{studentName.trim()}</span>
          <span className="font-mono text-slate-600"> (+91 {normalizedPhone})</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setErrors({});
            setStep(1);
          }}
          className="inline-flex shrink-0 items-center gap-1 font-semibold text-orange-700 hover:text-orange-800 cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${idPrefix}-city`}
            className="block text-xs font-semibold text-slate-700"
          >
            City <span className="text-rose-600">*</span>
          </label>
          <input
            id={`${idPrefix}-city`}
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (errors.city) setErrors((prev) => ({ ...prev, city: '' }));
            }}
            placeholder="e.g. Kota, Jaipur"
            className={`mt-1 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none ${
              errors.city
                ? 'border-rose-500 focus:border-rose-600'
                : 'border-slate-300 focus:border-orange-700'
            }`}
          />
          {errors.city && (
            <p className="mt-1 text-xs font-medium text-rose-700">{errors.city}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-board`}
            className="block text-xs font-semibold text-slate-700"
          >
            Board <span className="text-rose-600">*</span>
          </label>
          <select
            id={`${idPrefix}-board`}
            value={board}
            onChange={(e) => {
              setBoard(e.target.value);
              if (errors.board) setErrors((prev) => ({ ...prev, board: '' }));
            }}
            className={`mt-1 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none ${
              errors.board
                ? 'border-rose-500 focus:border-rose-600'
                : 'border-slate-300 focus:border-orange-700'
            }`}
          >
            <option value="">Select Board</option>
            {BOARD_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.board && (
            <p className="mt-1 text-xs font-medium text-rose-700">{errors.board}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${idPrefix}-study-medium`}
            className="block text-xs font-semibold text-slate-700"
          >
            Your Study Medium <span className="text-rose-600">*</span>
          </label>
          <select
            id={`${idPrefix}-study-medium`}
            value={studyMedium}
            onChange={(e) => {
              setStudyMedium(e.target.value);
              if (errors.studyMedium) setErrors((prev) => ({ ...prev, studyMedium: '' }));
            }}
            className={`mt-1 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none ${
              errors.studyMedium
                ? 'border-rose-500 focus:border-rose-600'
                : 'border-slate-300 focus:border-orange-700'
            }`}
          >
            <option value="">SELECT</option>
            {STUDY_MEDIUM_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.studyMedium && (
            <p className="mt-1 text-xs font-medium text-rose-700">{errors.studyMedium}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-current-class`}
            className="block text-xs font-semibold text-slate-700"
          >
            Current Class
          </label>
          <select
            id={`${idPrefix}-current-class`}
            value={currentClass}
            onChange={(e) => setCurrentClass(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-700 focus:outline-none"
          >
            <option value="Class 11">Class 11</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-orange-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
