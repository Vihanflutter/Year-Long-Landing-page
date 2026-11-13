export const BOARD_OPTIONS = [
  'CBSE',
  'ICSE',
  'NIOS',
  'Maharashtra Board',
  'Rajasthan (RBSE)',
  'Madhya Pradesh (MPBSE)',
  'Tamil Nadu Board',
  'Odisha (BSE Odisha)',
  'Uttar Pradesh (UP Board)',
  'Bihar (BSEB)',
  'Punjab (PSEB)',
  'Haryana (HBSE)',
  'Gujarat (GSEB)',
  'Telangana (BSE Telangana)',
  'Himachal Pradesh (HPBOSE)',
  'Jharkhand (JAC)',
  'Uttarakhand (UBSE)',
  'West Bengal (WBBSE)',
  'Goa (GBSHSE)',
  'Karnataka (KSEEB)',
] as const;

export const STUDY_MEDIUM_OPTIONS = [
  'English',
  'Hindi',
  'English & Hindi both',
  'Other',
] as const;

export interface StepOneInput {
  studentName: string;
  mobileNumber: string;
}

export interface StepTwoInput {
  city: string;
  board: string;
  studyMedium: string;
  currentClass: string;
}

export interface EnquiryFormInput extends StepOneInput, StepTwoInput {}

export interface StepOneValidationResult {
  isValid: boolean;
  errors: Partial<Record<'studentName' | 'mobileNumber', string>>;
  normalizedPhone: string;
}

export interface StepTwoValidationResult {
  isValid: boolean;
  errors: Partial<Record<'city' | 'board' | 'studyMedium' | 'currentClass', string>>;
}

export interface EnquiryConfirmation {
  referenceId: string;
  submittedAt: string;
  studentName: string;
  mobileNumber: string;
  city: string;
  board: string;
  studyMedium: string;
  currentClass: string;
}

export function normalizeIndianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

export function validateStepOne(input: StepOneInput): StepOneValidationResult {
  const errors: StepOneValidationResult['errors'] = {};

  if (input.studentName.trim().length < 2) {
    errors.studentName = 'Please enter your full name (at least 2 characters).';
  }

  const normalizedPhone = normalizeIndianPhone(input.mobileNumber);
  if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.mobileNumber = 'Enter a valid 10-digit Indian mobile number.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    normalizedPhone,
  };
}

export function validateStepTwo(input: StepTwoInput): StepTwoValidationResult {
  const errors: StepTwoValidationResult['errors'] = {};

  if (input.city.trim().length < 2) {
    errors.city = 'Please enter your city.';
  }

  if (!input.board.trim()) {
    errors.board = 'Please select your board.';
  }

  if (!input.studyMedium.trim()) {
    errors.studyMedium = 'Please select your study medium.';
  }

  if (!input.currentClass.trim()) {
    errors.currentClass = 'Please select current class.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createEnquiryConfirmation(
  input: EnquiryFormInput,
  normalizedPhone: string,
): EnquiryConfirmation {
  const suffix = String(Math.floor(1000 + Math.random() * 9000));

  return {
    referenceId: `SOCH-EC12-${suffix}`,
    submittedAt: new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    studentName: input.studentName.trim(),
    mobileNumber: `+91 ${normalizedPhone}`,
    city: input.city.trim(),
    board: input.board.trim(),
    studyMedium: input.studyMedium.trim(),
    currentClass: input.currentClass.trim(),
  };
}
