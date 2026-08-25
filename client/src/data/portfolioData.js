export const personalInfo = {
  name: "Vinayak Gupta",
  role: "Full-Stack MERN Developer",
  tagline: "Crafting High-Performance Full-Stack Web Applications & Scalable APIs",
  location: "Jaunpur, Uttar Pradesh, India",
  phone: "+91 6393646581",
  rawPhone: "6393646581",
  email: "guptavinayak520@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinayak-gupta-066424377/",
  github: "https://github.com/MrVinayakGupta",
  status: "Available for Full-time Roles & Projects",
  summary: "Motivated and detail-oriented Computer Science graduate specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about applying modern software engineering principles to real-world challenges, architecting resilient REST APIs, and designing lightning-fast, user-centric interfaces. Committed to continuous learning, code quality, and delivering impactful digital solutions.",
  stats: [
    { label: "Lighthouse Score", value: "98/100", desc: "For SSR & UI responsiveness" },
    { label: "Query Speed Boost", value: "35%", desc: "Via MongoDB schema indexing" },
    { label: "Data Security", value: "30%+", desc: "JWT & Bcrypt hashing standards" },
    { label: "Core Stacks", value: "MERN", desc: "React, Node, Express, MongoDB" }
  ]
};

export const skillsData = {
  languages: [
    { name: "JavaScript (ES6+)", level: 90, icon: "Code2", category: "Core" },
    { name: "Java", level: 80, icon: "Coffee", category: "Core" },
    { name: "C++", level: 75, icon: "Binary", category: "Core" },
    { name: "C", level: 75, icon: "Cpu", category: "Core" }
  ],
  frontend: [
    { name: "React.js", level: 90, icon: "Atom", category: "UI/UX" },
    { name: "Tailwind CSS", level: 95, icon: "Palette", category: "Styling" },
    { name: "Bootstrap", level: 85, icon: "LayoutGrid", category: "Styling" },
    { name: "HTML5 & CSS3", level: 95, icon: "FileCode", category: "Core" },
    { name: "Context API & State", level: 85, icon: "Boxes", category: "State" }
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "Server", category: "Runtime" },
    { name: "Express.js", level: 90, icon: "Zap", category: "Framework" },
    { name: "RESTful API Design", level: 90, icon: "Network", category: "Architecture" },
    { name: "EJS (Server-Side Rendering)", level: 85, icon: "Layers", category: "Templates" },
    { name: "Authentication (JWT & Bcrypt)", level: 88, icon: "ShieldCheck", category: "Security" }
  ],
  database: [
    { name: "MongoDB", level: 88, icon: "Database", category: "NoSQL" },
    { name: "Mongoose ODM", level: 90, icon: "TableProperties", category: "Modeling" },
    { name: "MySQL", level: 78, icon: "DatabaseZap", category: "RDBMS" },
    { name: "Schema Indexing & Optimization", level: 85, icon: "Gauge", category: "Performance" }
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "GitBranch", category: "VCS" },
    { name: "VS Code", level: 95, icon: "Terminal", category: "IDE" },
    { name: "Postman", level: 88, icon: "Send", category: "API Testing" },
    { name: "Multer & Cloudinary API", level: 85, icon: "CloudUpload", category: "Cloud Assets" }
  ]
};

export const projectsData = [
  {
    id: "travelnest",
    title: "TravelNest",
    subtitle: "Full-Stack Travel & Property Marketplace",
    category: "Full Stack (Node/Express + MongoDB + SSR)",
    badge: "Featured Project",
    status: "Production Ready",
    featured: true,
    github: "https://github.com/MrVinayakGupta",
    live: "#",
    metrics: [
      { label: "Lighthouse Score", val: "98/100" },
      { label: "Server Response", val: "-20% Latency" },
      { label: "Query Speed", val: "+35% Retrieval" }
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS SSR", "REST API", "Async Middleware", "Session Auth", "Bootstrap"],
    summary: "A robust travel accommodation marketplace featuring verified listings, protected user reservations, and instant review aggregation.",
    highlights: [
      "Engineered a scalable RESTful API and backend ecosystem using Node.js and Express, reducing overall server response times by 20% through custom asynchronous middleware.",
      "Designed efficient NoSQL data pipelines in MongoDB, utilizing advanced indexing and schema optimization to accelerate data retrieval speeds by 35% for dynamic property listings.",
      "Optimized frontend delivery for SEO and speed, utilizing EJS Server-Side Rendering (SSR) to achieve a near-perfect 98/100 Lighthouse score for UI responsiveness.",
      "Secured user data and platform integrity by building a robust authentication system to manage protected routes, session states, and verified user reviews."
    ],
    architecture: {
      backend: "Node.js & Express with modular MVC architecture",
      database: "MongoDB with compound indexing and Mongoose schema validation",
      rendering: "EJS Server-Side Rendering (SSR) for optimal SEO & zero hydration penalty",
      security: "Session-based auth, input sanitization, and route protection guards"
    }
  },
  {
    id: "pinspire",
    title: "Pinspire",
    subtitle: "Full-Stack Photo Management & Social Discovery Platform",
    category: "MERN Stack (React + Node + Express + MongoDB)",
    badge: "MERN Platform",
    status: "Production Ready",
    featured: true,
    github: "https://github.com/MrVinayakGupta",
    live: "#",
    metrics: [
      { label: "Image Delivery", val: "+50% Faster" },
      { label: "Security Factor", val: "+30% Boost" },
      { label: "Re-render Waste", val: "-15% Redundancy" }
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Bcrypt", "Cloudinary CDN", "Multer", "Context API", "Masonry Grid"],
    summary: "A Pinterest-inspired visual discovery and media hub with seamless Cloudinary CDN asset uploads, responsive Masonry layout, and secured token auth.",
    highlights: [
      "Engineered a full-stack photo-sharing platform using the MERN stack, implementing JWT-based authentication and Bcrypt hashing to improve user data security by 30%.",
      "Optimized backend performance by architecting a global error-handling middleware and Mongoose schema validations, reducing API response redundancy by 20%.",
      "Streamlined image management by integrating Multer and Cloudinary API, offloading server storage and boosting image loading speeds by 50% via CDN delivery.",
      "Enhanced UI/UX efficiency by developing a responsive Masonry grid in React, utilizing Context API to improve state management and reduce component re-renders by 15%.",
      "Improved scalability by implementing dynamic routing and environment variable configurations, ensuring 100% data integrity across all production environments."
    ],
    architecture: {
      frontend: "React SPA with dynamic Masonry layout and React Context API for global state",
      backend: "Express.js REST API with centralized asynchronous error handler",
      storage: "Cloudinary CDN integration with Multer streaming upload",
      auth: "Stateless JSON Web Tokens (JWT) with HTTP-only cookies and Bcrypt password salting"
    }
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    period: "2023 - 2026",
    status: "Pursuing / Final Year",
    description: "Core coursework in Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL/NoSQL), Web Technologies, and Operating Systems.",
    highlight: "Graduating 2026 • Computer Science & Software Engineering"
  },
  {
    degree: "Class XII (Senior Secondary - UP Board)",
    institution: "Janak Kumari Inter College, Jaunpur",
    period: "2021 - 2022",
    status: "Completed",
    description: "Mathematics, Physics, Chemistry, and Computer Science foundation with strong analytical and problem-solving focus.",
    highlight: "Science Stream"
  },
  {
    degree: "Class X (Secondary School - UP Board)",
    institution: "Janak Kumari Inter College, Jaunpur",
    period: "2019 - 2020",
    status: "Completed",
    description: "Core subjects: Mathematics, Science, Social Sciences, Hindi, and English.",
    highlight: "Strong Academic Record"
  }
];

export const certificationsData = [
  {
    id: "delta-apna-college",
    title: "Delta (Full Stack Web Development)",
    issuer: "Apna College (Shradha Khapra)",
    credentialId: "6a79ab1b5b9e304352072d50",
    badge: "Official Certificate of Completion",
    date: "Completed",
    skills: ["Full-Stack MERN", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "RESTful APIs", "HTML5 & CSS3"],
    description: "Rigorous full-stack software development curriculum covering modern JavaScript, server architectures in Node/Express, database design with MongoDB/Mongoose, and production deployments."
  },
  {
    id: "scaler-react",
    title: "Scaler Certified React Bootcamp Masterclass",
    issuer: "Scaler Academy",
    credentialId: "Verified Scaler Credential",
    badge: "Official Certificate",
    date: "Certified",
    skills: ["React.js", "Component Architecture", "Hooks & Lifecycle", "State Management", "Performance Optimization"],
    description: "Intensive training covering modern React ecosystem, component lifecycle, virtual DOM reconciliation, custom hooks, performance tuning, and scalable frontend architecture."
  }
];

export const terminalCommands = {
  help: `Available commands:
  • about       : Quick bio & profile snapshot
  • skills      : Core competencies & tech stack
  • projects    : Highlighted full-stack applications
  • education   : Academic journey & degrees
  • certs       : Professional certifications (Apna College Delta & Scaler)
  • contact     : Direct channels to reach Vinayak
  • social      : LinkedIn & GitHub profiles
  • clear       : Clear terminal screen`,

  about: `Vinayak Gupta | Full-Stack MERN Developer
Location: Jaunpur, Uttar Pradesh, India
BCA Graduate (VBS Purvanchal University, 2023-2026)
Specializing in high-performance React.js frontends & resilient Node/Express backends.`,

  skills: `Frontend : React.js, Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript
Backend  : Node.js, Express.js, EJS SSR, REST APIs
Databases: MongoDB (Mongoose), MySQL
Tools    : Git, GitHub, Postman, Cloudinary, Multer, VS Code`,

  projects: `1. TravelNest - Full-Stack Travel Marketplace (Node, Express, MongoDB, SSR, Lighthouse 98/100)
2. Pinspire   - Full-Stack Photo Management Platform (MERN, JWT, Cloudinary CDN, Masonry Grid)`,

  education: `• BCA (2023-2026): Veer Bahadur Singh Purvanchal University
• XII (2021-2022): Janak Kumari Inter College, Jaunpur
• X   (2019-2020): Janak Kumari Inter College, Jaunpur`,

  certs: `1. Delta (Full Stack Web Development) - Apna College [ID: 6a79ab1b5b9e304352072d50]
2. Scaler Certified React Bootcamp Masterclass - Scaler Academy`,

  contact: `Email    : guptavinayak520@gmail.com
Phone    : +91 6393646581
LinkedIn : https://www.linkedin.com/in/vinayak-gupta-066424377/
GitHub   : https://github.com/MrVinayakGupta`,

  social: `LinkedIn : https://www.linkedin.com/in/vinayak-gupta-066424377/
GitHub   : https://github.com/MrVinayakGupta`
};
