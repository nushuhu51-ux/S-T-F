// ===================================================
// Portfolio data — Samuel Teshale Terefe
// All facts sourced strictly from CV.
// Do NOT add fabricated metrics, fake links, or
// invented experience.
// ===================================================

import type {
  Project,
  SkillCategory,
  Certification,
  Achievement,
  Education,
  PhilosophyArea
} from './types';

// ---------------------------------------------------
// PROJECTS
// ---------------------------------------------------
export const projects: Project[] = [
  {
    id: 'brain-tumor-detection',
    title: 'Brain Tumor Detection System',
    category: 'Deep Learning & Computer Vision',
    shortDescription:
      'A deep learning system that classifies brain MRI scans to detect and categorise tumors using convolutional neural networks.',
    problem:
      'Brain tumor diagnosis from MRI scans is time-consuming, requires specialist expertise, and is prone to human error under high workloads. Automated, consistent classification can assist radiologists and improve diagnostic throughput.',
    goal: 'Build a CNN-based classification model capable of analysing brain MRI images and distinguishing between tumor types, providing a practical tool to support medical image analysis.',
    approach:
      'Applied supervised deep learning using convolutional neural network architectures. The pipeline covers data preprocessing, augmentation to address class imbalance, model design, training, and evaluation. Transfer learning techniques were explored to leverage pre-trained feature representations.',
    architecture:
      'Input MRI images → Preprocessing & augmentation → CNN feature extraction layers → Fully connected classifier → Softmax output (multi-class tumor categories)',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNNs', 'NumPy', 'Pandas', 'Matplotlib'],
    challenges:
      'Medical imaging datasets are often limited in size and class-imbalanced. Preventing overfitting on small datasets while achieving generalisation required careful regularisation, augmentation strategies, and validation discipline.',
    implementation:
      'Built using Python with TensorFlow/Keras. Image preprocessing included resizing, normalisation, and augmentation (rotation, flip, zoom). CNN architecture was iteratively refined through training experiments. Model evaluation used standard classification metrics.',
    result:
      'Performance metrics were not formally documented in the available project materials. The system demonstrates a complete deep learning pipeline for medical image classification.',
    lessons:
      'Medical AI systems demand rigorous validation and cannot be trusted on metrics alone — interpretability and error analysis on failure cases matter as much as aggregate accuracy.',
    highlights: [
      'End-to-end deep learning pipeline for medical imaging',
      'Convolutional neural network architecture design',
      'Data augmentation for class imbalance',
      'Transfer learning exploration',
      'MRI image preprocessing'
    ],
    github: null,
    demo: null,
    image: null
  },
  {
    id: 'autonomous-drone',
    title: 'AI-Based Autonomous Drone System',
    category: 'Computer Vision & Autonomous Systems',
    shortDescription:
      'Intelligent drone control software using Python and computer vision techniques to enable autonomous navigation and object tracking.',
    problem:
      'Manual drone operation requires constant human attention and is limited by operator reaction time. Autonomous perception and control logic can extend drone capabilities for inspection, tracking, and navigation tasks.',
    goal: 'Design and implement autonomous drone control software that uses computer vision to perceive the environment and drive navigation decisions without continuous manual input.',
    approach:
      'Integrated computer vision for real-time environment perception with a control logic layer that translates visual signals into drone commands. The system follows a perception → decision → action loop.',
    architecture:
      'Camera input → Frame capture → Computer vision processing (object detection / tracking) → Decision logic → Control commands → Drone actuation',
    technologies: ['Python', 'Computer Vision', 'OpenCV', 'NumPy'],
    challenges:
      'Real-time computer vision for drone control requires low-latency processing. Handling variable lighting conditions, occlusion, and maintaining stable tracking under motion blur were key engineering challenges.',
    implementation:
      'Implemented in Python with computer vision libraries for frame processing, feature detection, and object tracking. Control logic translates vision outputs into directional commands for drone navigation.',
    result:
      'Performance metrics were not formally documented in the available project materials. The system demonstrates a functional perception-to-control pipeline for autonomous drone navigation.',
    lessons:
      'The gap between computer vision accuracy in a static benchmark and real-world drone deployment is significant — robustness and latency must be treated as first-class engineering constraints.',
    highlights: [
      'Real-time computer vision pipeline',
      'Autonomous perception-to-action loop',
      'Object detection and tracking',
      'Python-based control system',
      'Low-latency frame processing'
    ],
    github: null,
    demo: null,
    image: null
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation Engine',
    category: 'Machine Learning / Recommendation Systems',
    shortDescription:
      'A personalised movie recommendation system using machine learning to surface relevant content based on user preferences and viewing patterns.',
    problem:
      'With thousands of movies available, users struggle to discover relevant content. A recommendation engine that learns from preferences and interaction data can significantly improve content discovery.',
    goal: 'Build a recommendation system that generates personalised movie suggestions, applying collaborative filtering or content-based approaches to model user-item relationships.',
    approach:
      'Applied machine learning-based recommendation techniques including data preprocessing, feature engineering on movie and user data, model training, and evaluation using standard recommendation metrics.',
    architecture:
      'Raw data (user ratings, movie metadata) → Data cleaning & preprocessing → Feature engineering → Recommendation model → Ranked suggestion output',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Visualization'],
    challenges:
      'The cold-start problem — recommending for new users or new items with no interaction history — and handling the sparsity typical of rating matrices are fundamental challenges in recommendation systems.',
    implementation:
      'Built in Python. Data processing handled with Pandas and NumPy. Recommendation logic implemented with Scikit-learn. Model evaluation used appropriate recommendation metrics.',
    result:
      'Performance metrics were not formally documented in the available project materials. The system demonstrates a complete recommendation pipeline from raw data to ranked suggestions.',
    lessons:
      'Recommendation quality depends heavily on data quality and the choice of similarity metric — domain knowledge about the content type significantly improves feature engineering decisions.',
    highlights: [
      'Personalised recommendation pipeline',
      'Collaborative and content-based filtering',
      'Feature engineering on user-item data',
      'Sparse matrix handling',
      'Recommendation evaluation methodology'
    ],
    github: null,
    demo: null,
    image: null
  },
  {
    id: 'weather-api',
    title: 'Weather API Application',
    category: 'Backend / API Development',
    shortDescription:
      'A backend API application that retrieves, processes, and serves weather data, demonstrating RESTful API design and external service integration.',
    problem:
      'Applications requiring weather data need a clean, reliable backend layer that abstracts external weather API complexity, handles errors gracefully, and delivers structured data to consuming clients.',
    goal: 'Build a backend API application that integrates with an external weather data source, processes responses, handles errors, and exposes a clean API interface for consumers.',
    approach:
      'Designed a RESTful backend service with clean endpoint design, external API integration, input validation, and error handling. Focused on API contract clarity and reliable data delivery.',
    architecture:
      'Client request → Input validation → External weather API call → Response processing → Structured JSON response → Client',
    technologies: ['Python', 'FastAPI', 'REST API', 'HTTP', 'JSON'],
    challenges:
      'External API reliability, rate limits, error propagation, and ensuring the backend remains responsive when the upstream service is slow or unavailable.',
    implementation:
      'Built with Python using FastAPI (or equivalent framework). Implements input validation, structured error responses, and clean separation between the data-fetching layer and the API layer.',
    result:
      'A functional backend weather API application demonstrating backend engineering practices: clean routing, input validation, error handling, and external service integration.',
    lessons:
      'External API integrations require defensive programming — circuit breakers, timeout handling, and meaningful error messages to consumers are not optional in production-grade services.',
    highlights: [
      'RESTful API design',
      'External service integration',
      'Input validation and error handling',
      'Clean backend architecture',
      'Structured JSON response design'
    ],
    github: null,
    demo: null,
    image: null
  }
];

// ---------------------------------------------------
// SKILLS
// ---------------------------------------------------
export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: 'code',
    skills: ['Python', 'SQL', 'C++', 'Golang']
  },
  {
    name: 'Machine Learning',
    icon: 'brain',
    skills: ['Supervised Learning', 'Deep Learning', 'Neural Networks', 'CNNs']
  },
  {
    name: 'AI / Computer Vision / Data',
    icon: 'eye',
    skills: [
      'Computer Vision',
      'Natural Language Processing',
      'Generative AI',
      'LLMs',
      'RAG Systems',
      'Data Cleaning',
      'Feature Engineering',
      'Model Evaluation',
      'Data Visualization'
    ]
  },
  {
    name: 'Frameworks & Libraries',
    icon: 'layers',
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas']
  },
  {
    name: 'Backend & Engineering',
    icon: 'server',
    skills: ['FastAPI', 'Django', 'Docker', 'Apache Spark']
  }
];

// ---------------------------------------------------
// CERTIFICATIONS
// ---------------------------------------------------
export const certifications: Certification[] = [
  {
    id: 'hcia-ai',
    title: 'HCIA-AI Certification',
    issuer: 'Huawei Academy',
    year: '2025',
    credentialUrl: null,
    category: 'ai-ml'
  },
  {
    id: 'alx-data-science',
    title: 'Data Science',
    issuer: 'ALX Africa',
    year: '2024',
    credentialUrl: null,
    category: 'data'
  },
  {
    id: 'alx-data-engineering',
    title: 'Data Engineering',
    issuer: 'ALX Africa',
    year: '2024',
    credentialUrl: null,
    category: 'data'
  },
  {
    id: 'alx-python',
    title: 'Python Programming',
    issuer: 'ALX Africa',
    year: '2024',
    credentialUrl: null,
    category: 'programming'
  },
  {
    id: 'alx-ml',
    title: 'Machine Learning',
    issuer: 'ALX Africa',
    year: '2024',
    credentialUrl: null,
    category: 'ai-ml'
  }
];

// ---------------------------------------------------
// ACHIEVEMENTS
// ---------------------------------------------------
export const achievements: Achievement[] = [
  {
    id: 'huawei-ict-national-2025',
    title: 'First Prize',
    competition: 'Huawei ICT Competition 2025–2026',
    track: 'Cloud Track',
    level: 'national',
    prize: 'First Prize Winner',
    year: '2026',
    description:
      'Achieved First Prize at the National Final of the Huawei ICT Competition 2025–2026, Cloud Track — one of the most prestigious technology competitions in Ethiopia and across the African region.'
  },
  {
    id: 'huawei-ict-regional-2025',
    title: 'Third Prize',
    competition: 'Huawei ICT Competition 2025–2026',
    track: 'Cloud Track',
    level: 'regional',
    prize: 'Third Prize Winner',
    year: '2026',
    description:
      'Achieved Third Prize at the Regional Final of the Huawei ICT Competition 2025–2026, Cloud Track.'
  }
];

// ---------------------------------------------------
// EDUCATION
// ---------------------------------------------------
export const education: Education = {
  institution: 'University of Gondar',
  degree: 'Bachelor of Science',
  field: 'Computer Engineering',
  gpa: '3.15',
  exitExam: '73.75%',
  location: 'Gondar, Ethiopia',
  highlights: [
    'National Exit Exam Result: 73.75%',
    'Computer Engineering curriculum covering hardware, software, and systems',
    'Focus areas: AI, machine learning, and backend systems'
  ]
};

// ---------------------------------------------------
// ENGINEERING PHILOSOPHY
// ---------------------------------------------------
export const philosophyAreas: PhilosophyArea[] = [
  {
    title: 'Intelligent Systems',
    icon: 'brain',
    description:
      'Building machine learning and AI systems that solve real, practical problems — not academic benchmarks. The measure of a good model is whether it works reliably in the domain it was designed for.'
  },
  {
    title: 'Computer Vision',
    icon: 'eye',
    description:
      'Vision-based systems and intelligent automation. Teaching machines to extract meaningful information from visual data and act on it — from medical imaging to autonomous control.'
  },
  {
    title: 'Backend Systems',
    icon: 'server',
    description:
      'APIs and services built with Python and modern backend frameworks. Clean contracts, reliable error handling, and scalable architecture — the foundation everything else depends on.'
  },
  {
    title: 'Data Engineering',
    icon: 'database',
    description:
      'Data processing, transformation, and scalable pipelines. Good models start with good data. Cleaning, feature engineering, and pipeline reliability are engineering disciplines, not afterthoughts.'
  },
  {
    title: 'Experimentation',
    icon: 'flask',
    description:
      'Research-driven experimentation, model evaluation, and iterative development. Progress in AI comes from disciplined hypothesis testing and honest evaluation — not from running more epochs.'
  }
];

// ---------------------------------------------------
// PERSONAL INFO
// ---------------------------------------------------
export const personalInfo = {
  name: 'Samuel Teshale Terefe',
  titles: ['AI Engineer', 'ML Engineer', 'Data Scientist', 'Deep Learning Engineer', 'LLM & RAG Engineer'],
  location: 'Addis Ababa, Ethiopia',
  email: 'nushuhu297@gmail.com',
  linkedin: 'https://www.linkedin.com/in/samuel-teshale-219326396/',
  github: 'https://github.com/nushuhu51-ux',
  tagline:
    'Building intelligent systems that solve real-world problems through machine learning, computer vision, backend engineering, and modern software technologies.',
  about: [
    'I am a Computer Engineering graduate from the University of Gondar with a focused interest in artificial intelligence, machine learning, and backend development. My engineering work sits at the intersection of intelligent systems and practical software — building systems that learn, perceive, and act.',
    'My technical work spans deep learning for computer vision, NLP, recommendation systems, and backend API development with Python. I approach problems empirically: design an architecture, run controlled experiments, evaluate honestly, and iterate.',
    'I have competed in the Huawei ICT Competition, achieving First Prize at the National Final (Cloud Track, 2025–2026). I hold certifications in AI, machine learning, data science, and data engineering from Huawei Academy and ALX Africa.',
    'I am based in Addis Ababa, Ethiopia, and I am interested in roles involving AI engineering, machine learning systems, backend development, and intelligent applications.'
  ]
} as const;
