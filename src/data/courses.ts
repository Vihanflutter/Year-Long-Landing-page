export const SOCHING_CONTACT = {
  brandName: 'Soching Education',
  courseName: 'Early Class 12 Live Course',
  targetAudience: 'For Students Currently Studying in Class 11',
  positioningTagline: 'Start Early. Prepare Better. Excel in Boards.',
  address: '46, Kalpana Chawla Circle, Swami Vivekananda Nagar, Kota, Rajasthan, India.',
  phone: '+91 8949193467',
};

export const ACADEMIC_SYSTEM_POINTS = [
  'Daily Live Interactive Classes',
  'Real-Time 2-Way Interaction with Faculty',
  'Limited Batch Size',
  'Live PDF Notes + Class Recordings',
  'NCERT-Based Teaching + PYQs + Module Discussion',
  'Strong Focus on Concept Clarity & Retention',
  'Class 12 Board Preparation Support',
];

export const STUDY_MATERIAL_POINTS = [
  'Complete Class 12 Textbook-Based Preparation',
  'NCERT Line-by-Line Coverage',
  'Chapter-Wise Practice Questions',
  'Concept-Based + Application-Based Exercises',
  'Previous Year Board Questions (PYQs)',
  'Chapter-Wise Revision Material',
  'Important Questions and Sample Papers',
  'Premium Lecture Notes',
];

export const DOUBT_SOLVING_POINTS = [
  'Doubt Solving in Live Classes',
  'Dedicated Doubt Classes',
  'Personal Faculty Connect',
];

export const TEST_SYSTEM_POINTS = [
  'Chapter-Wise Tests',
  'Topic-Wise Tests',
  'Regular Practice Tests',
  'Major & Minor Tests',
  'Full-Length Board Pattern Tests',
];

export const FACULTY_LEAD = {
  name: 'Dr. Anshuman Agarwal Sir',
  image: '/assets/aistudio/Dr_ansh-2_d2975b31.png',
  credentials: [
    'MBBS, MD, FIPM',
    'NEET AIR 196',
    'Ex-Biology HOD – Resonance & eSaral',
    'Founder & Director – Soching Education',
    '15+ Years of Teaching Experience',
  ],
};

export interface StudentAchiever {
  id: string;
  name: string;
  college: string;
  rank?: string;
  batch: string;
}

export const STUDENT_ACHIEVERS: StudentAchiever[] = [
  {
    id: 'zainab-ali',
    name: 'Dr. Zainab Ashfaque Ali',
    college: 'SRTRG Medical College, Ambaj Gai',
    batch: 'Batch 2016',
  },
  {
    id: 'apurva-gupta',
    name: 'Apurva Vidushi Gupta',
    college: 'SMS Medical College, Jaipur',
    batch: 'Batch 2017',
  },
  {
    id: 'vibhanshu-shrimali',
    name: 'Vibhanshu Shrimali',
    college: 'AIIMS, Jodhpur',
    rank: 'AIIMS AIR 387',
    batch: 'Batch 2018',
  },
  {
    id: 'kevlin-nirwan',
    name: 'Kevlin Nirwan',
    college: 'Dr. S.N. Medical College, Jodhpur',
    batch: 'Batch 2018',
  },
  {
    id: 'suraj-sharma',
    name: 'Suraj Sharma',
    college: 'MGM Medical College, Indore',
    batch: 'Batch 2018',
  },
  {
    id: 'aditya-singh',
    name: 'Aditya Singh',
    college: 'Patna Medical College, Patna',
    batch: 'Batch 2018',
  },
  {
    id: 'tanmay-yadav',
    name: 'Tanmay Yadav',
    college: 'Dr. S.N. Medical College, Jodhpur',
    batch: 'Batch 2019',
  },
  {
    id: 'darshana-tater',
    name: 'Darshana Tater',
    college: 'Dr. S.N. Medical College, Jodhpur',
    batch: 'Batch 2019',
  },
  {
    id: 'gyan-jha',
    name: 'Gyan Prakash Jha',
    college: 'B.P. Koirala Inst. of Health Science, Dharan',
    batch: 'Batch 2019',
  },
  {
    id: 'sumant-singh',
    name: 'Sumant Singh',
    college: 'SMS Medical College, Jaipur',
    batch: 'Batch 2019',
  },
  {
    id: 'harsh-lega',
    name: 'Harsh Lega',
    college: 'AIIMS, Rishikesh',
    rank: 'AIIMS AIR 429',
    batch: 'Batch 2019',
  },
  {
    id: 'pranjal-bindal',
    name: 'Pranjal Bindal',
    college: 'Govt. Medical College, Kota',
    batch: 'Batch 2019',
  },
  {
    id: 'yuvraj-singh',
    name: 'Yuvraj Singh',
    college: 'Patna Medical College, Patna',
    batch: 'Batch 2020',
  },
  {
    id: 'musarrat-khanam',
    name: 'Musarrat Khanam',
    college: 'Govt. Medical College, Pali',
    batch: 'Batch 2020',
  },
  {
    id: 'aishwarya-jugtawat',
    name: 'Aishwarya Jugtawat',
    college: 'R.N.T. Medical College, Udaipur',
    batch: 'Batch 2020',
  },
  {
    id: 'prajjwal-sharma',
    name: 'Prajjwal Sharma',
    college: 'Govt. Medical College, Kota',
    batch: 'Batch 2020',
  },
  {
    id: 'akash-jaiswal',
    name: 'Akash Jaiswal',
    college: 'BRD Medical College, Gorakhpur',
    batch: 'Batch 2020',
  },
];
