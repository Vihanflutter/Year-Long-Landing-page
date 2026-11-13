import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BOARD_OPTIONS,
  STUDY_MEDIUM_OPTIONS,
  createEnquiryConfirmation,
  normalizeIndianPhone,
  validateStepOne,
  validateStepTwo,
} from './enquiry';

test('normalizeIndianPhone handles +91 prefix, spaces, and leading zero', () => {
  assert.equal(normalizeIndianPhone('+91 89491 93467'), '8949193467');
  assert.equal(normalizeIndianPhone('08949193467'), '8949193467');
});

test('validateStepOne validates name and 10-digit Indian phone number', () => {
  const invalid = validateStepOne({
    studentName: 'A',
    mobileNumber: '12345',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.studentName);
  assert.ok(invalid.errors.mobileNumber);

  const valid = validateStepOne({
    studentName: 'Riya Verma',
    mobileNumber: '+91 98290 12345',
  });
  assert.equal(valid.isValid, true);
  assert.equal(valid.normalizedPhone, '9829012345');
});

test('validateStepTwo validates city, board, studyMedium, and currentClass', () => {
  assert.equal(BOARD_OPTIONS.length, 20);
  assert.deepEqual(STUDY_MEDIUM_OPTIONS, [
    'English',
    'Hindi',
    'English & Hindi both',
    'Other',
  ]);

  const invalid = validateStepTwo({
    city: '',
    board: '',
    studyMedium: '',
    currentClass: 'Class 11',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.city);
  assert.ok(invalid.errors.board);
  assert.ok(invalid.errors.studyMedium);

  const valid = validateStepTwo({
    city: 'Jaipur',
    board: 'Rajasthan (RBSE)',
    studyMedium: 'English & Hindi both',
    currentClass: 'Class 11',
  });
  assert.equal(valid.isValid, true);

  const confirmation = createEnquiryConfirmation(
    {
      studentName: 'Riya Verma',
      mobileNumber: '+91 98290 12345',
      city: 'Jaipur',
      board: 'Rajasthan (RBSE)',
      studyMedium: 'English & Hindi both',
      currentClass: 'Class 11',
    },
    '9829012345',
  );

  assert.match(confirmation.referenceId, /^SOCH-EC12-\d{4}$/);
  assert.equal(confirmation.board, 'Rajasthan (RBSE)');
  assert.equal(confirmation.studyMedium, 'English & Hindi both');
  assert.equal(confirmation.city, 'Jaipur');
  assert.equal(confirmation.currentClass, 'Class 11');
});
