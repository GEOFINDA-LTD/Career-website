export interface Program {
  id: string
  title: string
  category: 'web' | 'mobile' | 'data' | 'cloud' | 'ai'
  description: string
  shortDescription: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  skills: string[]
  tools: string[]
  outcomes: string[]
  candidateProfile: string[]
  image: string
}

export const programs: Program[] = [
  // Web Development Category
  {
    id: 'web-001',
    title: 'Full Stack Web Development',
    category: 'web',
    description: 'Master modern full-stack development with React, Node.js, and databases. Build production-ready web applications from frontend to backend.',
    shortDescription: 'Complete web development from frontend to backend',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'Database Design'],
    tools: ['React', 'Express', 'PostgreSQL', 'Git', 'Docker'],
    outcomes: ['Build scalable web applications', 'Deploy to production', 'Collaborate with teams'],
    candidateProfile: ['Understanding of web basics', 'Problem-solving mindset', 'Passion for clean code'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop'
  },
  {
    id: 'web-002',
    title: 'Frontend Web Development',
    category: 'web',
    description: 'Specialize in creating beautiful, responsive user interfaces. Learn modern CSS, JavaScript frameworks, and UI/UX best practices.',
    shortDescription: 'Create stunning user interfaces and experiences',
    duration: '8 weeks',
    level: 'Beginner',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'UI Design Principles', 'Responsive Design'],
    tools: ['React', 'Tailwind CSS', 'Figma', 'Webpack'],
    outcomes: ['Master modern UI frameworks', 'Create responsive designs', 'Implement accessibility standards'],
    candidateProfile: ['Design sensitivity', 'Attention to detail', 'JavaScript fundamentals'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'web-003',
    title: 'Next.js Advanced Development',
    category: 'web',
    description: 'Master Next.js framework for building optimized, production-ready web applications with server-side rendering and static generation.',
    shortDescription: 'Advanced modern web framework development',
    duration: '8 weeks',
    level: 'Advanced',
    skills: ['React Advanced', 'Next.js', 'API Routes', 'Deployment', 'Performance Optimization'],
    tools: ['Next.js', 'TypeScript', 'Vercel', 'Prisma'],
    outcomes: ['Build high-performance applications', 'Master SSR and SSG', 'Deploy at scale'],
    candidateProfile: ['React experience', 'Server-side concepts', 'TypeScript knowledge'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'web-004',
    title: 'Web3 & Blockchain Development',
    category: 'web',
    description: 'Enter the world of decentralized applications. Learn Solidity, smart contracts, and blockchain architecture.',
    shortDescription: 'Build decentralized applications on blockchain',
    duration: '8 weeks',
    level: 'Advanced',
    skills: ['Solidity', 'Smart Contracts', 'Web3.js', 'DeFi Concepts', 'Security'],
    tools: ['Solidity', 'Hardhat', 'Ethers.js', 'OpenZeppelin'],
    outcomes: ['Write smart contracts', 'Build dApps', 'Understand DeFi protocols'],
    candidateProfile: ['JavaScript experience', 'Understanding of cryptography basics', 'Problem-solving skills'],
    image: 'https://images.unsplash.com/photo-1639762681033-b461b9d285f1?w=500&h=300&fit=crop'
  },
  {
    id: 'web-005',
    title: 'API Development & Backend Services',
    category: 'web',
    description: 'Learn to build robust, scalable APIs and backend services. Master authentication, caching, and microservices architecture.',
    shortDescription: 'Build powerful backend services and APIs',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['Node.js', 'API Design', 'Authentication', 'Database Design', 'Microservices'],
    tools: ['Express', 'MongoDB', 'JWT', 'Redis', 'Docker'],
    outcomes: ['Design robust APIs', 'Implement authentication', 'Scale backend systems'],
    candidateProfile: ['Backend fundamentals', 'Database concepts', 'System design interest'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },

  // Mobile Development Category
  {
    id: 'mobile-001',
    title: 'iOS Development',
    category: 'mobile',
    description: 'Create powerful iOS applications using Swift. Learn native development, frameworks, and App Store deployment.',
    shortDescription: 'Build native iOS applications',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['Swift', 'UIKit', 'SwiftUI', 'Core Data', 'App Design'],
    tools: ['Xcode', 'Swift', 'CocoaPods', 'Firebase'],
    outcomes: ['Build native iOS apps', 'Deploy to App Store', 'Optimize performance'],
    candidateProfile: ['Object-oriented programming', 'Mac/iOS familiarity', 'Persistence in learning'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'mobile-002',
    title: 'Android Development',
    category: 'mobile',
    description: 'Master Android development with Kotlin. Build native applications, leverage Google Play Services, and reach millions of users.',
    shortDescription: 'Create native Android applications',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['Kotlin', 'Android Studio', 'Material Design', 'APIs', 'Data Storage'],
    tools: ['Android Studio', 'Kotlin', 'Room Database', 'Retrofit'],
    outcomes: ['Build Android apps', 'Publish on Play Store', 'Implement Material Design'],
    candidateProfile: ['Java/Kotlin basics', 'Linux familiarity', 'Creative problem-solver'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'mobile-003',
    title: 'React Native Development',
    category: 'mobile',
    description: 'Build cross-platform mobile applications with React Native. Write once, deploy to iOS and Android.',
    shortDescription: 'Cross-platform mobile app development',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['React Native', 'JavaScript', 'Native Modules', 'Platform APIs'],
    tools: ['React Native', 'Expo', 'Firebase', 'Redux'],
    outcomes: ['Build cross-platform apps', 'Deploy to both platforms', 'Manage state efficiently'],
    candidateProfile: ['React knowledge', 'JavaScript fluency', 'Mobile design sense'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'mobile-004',
    title: 'Flutter Development',
    category: 'mobile',
    description: 'Learn Google\'s Flutter framework for beautiful, natively compiled applications. Single codebase for multiple platforms.',
    shortDescription: 'Build beautiful cross-platform apps',
    duration: '8 weeks',
    level: 'Beginner',
    skills: ['Dart', 'Flutter', 'UI Design', 'State Management', 'APIs'],
    tools: ['Flutter', 'Dart', 'Firebase', 'GetX'],
    outcomes: ['Master Flutter framework', 'Build beautiful UIs', 'Deploy to app stores'],
    candidateProfile: ['Programming basics', 'Learning agility', 'Design appreciation'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'mobile-005',
    title: 'Mobile App Backend Integration',
    category: 'mobile',
    description: 'Learn to build and integrate backend services for mobile applications. Master APIs, real-time databases, and cloud services.',
    shortDescription: 'Build backends for mobile apps',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['REST APIs', 'Real-time Databases', 'Cloud Services', 'Authentication'],
    tools: ['Firebase', 'Node.js', 'MongoDB', 'AWS'],
    outcomes: ['Build mobile backends', 'Implement real-time features', 'Scale for millions'],
    candidateProfile: ['Mobile development experience', 'Backend interest', 'Problem-solving'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },

  // Data & Analytics Category
  {
    id: 'data-001',
    title: 'Data Science Fundamentals',
    category: 'data',
    description: 'Learn the fundamentals of data science. Master Python, data analysis, visualization, and introductory machine learning.',
    shortDescription: 'Introduction to data science and analysis',
    duration: '8 weeks',
    level: 'Beginner',
    skills: ['Python', 'Data Analysis', 'Statistics', 'Visualization', 'ML Basics'],
    tools: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    outcomes: ['Analyze data', 'Create visualizations', 'Build predictive models'],
    candidateProfile: ['Math/statistics interest', 'Programming basics', 'Analytical mindset'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'data-002',
    title: 'Machine Learning Engineering',
    category: 'data',
    description: 'Deep dive into machine learning. Build, train, and deploy ML models. Master algorithms and advanced techniques.',
    shortDescription: 'Professional ML model development',
    duration: '14 weeks',
    level: 'Advanced',
    skills: ['ML Algorithms', 'Deep Learning', 'Neural Networks', 'Model Deployment'],
    tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
    outcomes: ['Build ML pipelines', 'Deploy models', 'Optimize performance'],
    candidateProfile: ['ML fundamentals', 'Math proficiency', 'Research interest'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'data-003',
    title: 'Data Engineering',
    category: 'data',
    description: 'Master data pipeline architecture and engineering. Learn ETL processes, big data technologies, and data warehousing.',
    shortDescription: 'Build data pipelines and infrastructure',
    duration: '13 weeks',
    level: 'Advanced',
    skills: ['ETL', 'Big Data', 'SQL', 'Data Warehousing', 'Cloud Platforms'],
    tools: ['Apache Spark', 'Airflow', 'Snowflake', 'AWS'],
    outcomes: ['Design data pipelines', 'Manage big data', 'Optimize performance'],
    candidateProfile: ['Database knowledge', 'System design', 'Scalability interest'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'data-004',
    title: 'Business Analytics',
    category: 'data',
    description: 'Learn to drive business decisions with data. Master analytics tools, reporting, and business intelligence.',
    shortDescription: 'Data-driven business insights',
    duration: '8 weeks',
    level: 'Beginner',
    skills: ['SQL', 'Analytics Tools', 'Reporting', 'Dashboard Design', 'Business Logic'],
    tools: ['Tableau', 'Power BI', 'SQL', 'Google Analytics'],
    outcomes: ['Create dashboards', 'Analyze business metrics', 'Drive insights'],
    candidateProfile: ['Business acumen', 'Communication skills', 'Curiosity about data'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'data-005',
    title: 'NLP & Text Analytics',
    category: 'data',
    description: 'Explore Natural Language Processing. Build chatbots, sentiment analysis systems, and language models.',
    shortDescription: 'Process and analyze human language',
    duration: '8 weeks',
    level: 'Advanced',
    skills: ['NLP Concepts', 'Text Processing', 'Deep Learning', 'Language Models'],
    tools: ['NLTK', 'Transformers', 'BERT', 'GPT'],
    outcomes: ['Build NLP systems', 'Implement chatbots', 'Analyze sentiment'],
    candidateProfile: ['ML background', 'Linguistics interest', 'Advanced Python'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },

  // Cloud & DevOps Category
  {
    id: 'cloud-001',
    title: 'Cloud Architecture with AWS',
    category: 'cloud',
    description: 'Master AWS services and cloud architecture. Design, deploy, and manage scalable cloud applications.',
    shortDescription: 'Professional cloud architecture on AWS',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['AWS Services', 'Cloud Architecture', 'Serverless', 'Security', 'Cost Optimization'],
    tools: ['AWS', 'CloudFormation', 'Lambda', 'EC2'],
    outcomes: ['Design cloud systems', 'Implement security', 'Optimize costs'],
    candidateProfile: ['Cloud basics', 'System design interest', 'Infrastructure mindset'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'cloud-002',
    title: 'Kubernetes & Container Orchestration',
    category: 'cloud',
    description: 'Learn Docker and Kubernetes. Master containerization, orchestration, and microservices deployment.',
    shortDescription: 'Container orchestration and deployment',
    duration: '8 weeks',
    level: 'Advanced',
    skills: ['Docker', 'Kubernetes', 'Microservices', 'YAML', 'Helm'],
    tools: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
    outcomes: ['Containerize applications', 'Orchestrate at scale', 'Manage deployments'],
    candidateProfile: ['Linux knowledge', 'DevOps interest', 'System administration'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'cloud-003',
    title: 'DevOps Engineering',
    category: 'cloud',
    description: 'Master the full DevOps lifecycle. CI/CD pipelines, infrastructure automation, and monitoring.',
    shortDescription: 'Complete DevOps pipeline management',
    duration: '13 weeks',
    level: 'Advanced',
    skills: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Automation', 'Git'],
    tools: ['Jenkins', 'GitLab CI', 'Terraform', 'Prometheus'],
    outcomes: ['Build CI/CD pipelines', 'Automate infrastructure', 'Monitor systems'],
    candidateProfile: ['Development experience', 'Linux expertise', 'Problem-solver'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'cloud-004',
    title: 'Google Cloud Platform Mastery',
    category: 'cloud',
    description: 'Comprehensive Google Cloud Platform training. BigQuery, Cloud Run, and GCP-specific services.',
    shortDescription: 'Master Google Cloud technologies',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['GCP Services', 'BigQuery', 'Cloud Run', 'Dataflow', 'Security'],
    tools: ['GCP', 'BigQuery', 'Dataflow', 'Pub/Sub'],
    outcomes: ['Design GCP solutions', 'Implement big data', 'Optimize services'],
    candidateProfile: ['Cloud knowledge', 'Data interest', 'Google ecosystem familiarity'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'cloud-005',
    title: 'Site Reliability Engineering (SRE)',
    category: 'cloud',
    description: 'Learn SRE principles and practices. Build reliable, resilient, and scalable systems.',
    shortDescription: 'Engineering for reliability and scale',
    duration: '8 weeks',
    level: 'Advanced',
    skills: ['SRE Principles', 'Monitoring', 'Incident Response', 'Automation', 'Performance'],
    tools: ['Prometheus', 'Grafana', 'PagerDuty', 'ELK Stack'],
    outcomes: ['Implement SRE practices', 'Reduce outages', 'Build resilient systems'],
    candidateProfile: ['Production experience', 'System design', 'Leadership potential'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },

  // AI & Emerging Tech Category
  {
    id: 'ai-001',
    title: 'Artificial Intelligence Fundamentals',
    category: 'ai',
    description: 'Introduction to AI concepts. Expert systems, knowledge representation, and AI algorithms.',
    shortDescription: 'Foundation of artificial intelligence',
    duration: '8 weeks',
    level: 'Beginner',
    skills: ['AI Concepts', 'Search Algorithms', 'Knowledge Representation', 'Logic'],
    tools: ['Python', 'AI Frameworks', 'TensorFlow'],
    outcomes: ['Understand AI fundamentals', 'Implement algorithms', 'Build expert systems'],
    candidateProfile: ['Math interest', 'Curiosity about AI', 'Programming fundamentals'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'ai-002',
    title: 'Generative AI & LLMs',
    category: 'ai',
    description: 'Master generative AI and large language models. Build applications with GPT, fine-tuning, and prompt engineering.',
    shortDescription: 'Build with generative AI',
    duration: '8 weeks',
    level: 'Intermediate',
    skills: ['Prompt Engineering', 'LLM Fine-tuning', 'API Integration', 'Vector Databases'],
    tools: ['OpenAI API', 'Hugging Face', 'LangChain', 'Pinecone'],
    outcomes: ['Build AI applications', 'Fine-tune models', 'Prompt engineering mastery'],
    candidateProfile: ['ML interest', 'Current AI knowledge', 'Product thinking'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'ai-003',
    title: 'Computer Vision & Image Processing',
    category: 'ai',
    description: 'Learn computer vision techniques. Image classification, object detection, and advanced visual applications.',
    shortDescription: 'Build vision-based systems',
    duration: '8 weeks',
    level: 'Advanced',
    skills: ['Image Processing', 'CNN', 'Object Detection', 'Face Recognition'],
    tools: ['OpenCV', 'PyTorch', 'YOLO', 'MediaPipe'],
    outcomes: ['Build computer vision systems', 'Implement detection', 'Create visual AI'],
    candidateProfile: ['Deep learning background', 'Image processing interest', 'Research mindset'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'ai-004',
    title: 'Reinforcement Learning',
    category: 'ai',
    description: 'Master reinforcement learning. Game AI, robotics, and autonomous systems.',
    shortDescription: 'Build intelligent autonomous systems',
    duration: '13 weeks',
    level: 'Advanced',
    skills: ['RL Algorithms', 'Game Theory', 'Policy Gradient', 'Q-Learning'],
    tools: ['OpenAI Gym', 'PyTorch', 'TensorFlow', 'Unity ML-Agents'],
    outcomes: ['Implement RL algorithms', 'Build game AI', 'Create autonomous systems'],
    candidateProfile: ['ML mastery', 'Math proficiency', 'Research passion'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 'ai-005',
    title: 'AI Ethics & Responsible AI',
    category: 'ai',
    description: 'Critical examination of AI ethics. Bias detection, fairness, interpretability, and responsible development.',
    shortDescription: 'Build ethical and fair AI systems',
    duration: '9 weeks',
    level: 'Intermediate',
    skills: ['AI Ethics', 'Bias Detection', 'Interpretability', 'Fairness Metrics', 'Governance'],
    tools: ['Fairness Indicators', 'LIME', 'SHAP', 'What-If Tool'],
    outcomes: ['Understand AI ethics', 'Detect bias', 'Build responsible AI'],
    candidateProfile: ['AI background', 'Social responsibility', 'Thoughtful approach'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
]

export const categoryLabels: Record<Program['category'], string> = {
  web: 'Web Development',
  mobile: 'Mobile Development',
  data: 'Data & Analytics',
  cloud: 'Cloud & DevOps',
  ai: 'AI & Emerging Tech'
}

export const categoryColors: Record<Program['category'], string> = {
  web: 'from-blue-400 to-blue-600',
  mobile: 'from-purple-400 to-purple-600',
  data: 'from-green-400 to-green-600',
  cloud: 'from-orange-400 to-orange-600',
  ai: 'from-pink-400 to-pink-600'
}
