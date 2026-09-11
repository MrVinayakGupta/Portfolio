export const personalInfo = {
  name: "Vinayak Gupta",
  role: "Full-Stack MERN Developer",
  tagline: "Architecting High-Performance Web Applications & Scalable APIs",
  location: "Jaunpur, Uttar Pradesh, India",
  phone: "+91 6393646581",
  rawPhone: "6393646581",
  email: "guptavinayak520@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinayak-gupta-066424377/",
  github: "https://github.com/MrVinayakGupta",
  portfolioUrl: "https://portfolio-mrvinayakgupta.vercel.app",
  status: "Available for Full-time Roles & Contracts",
  summary: "Motivated and detail-oriented Computer Science graduate specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about applying modern software engineering principles to real-world challenges, architecting resilient REST APIs, and designing lightning-fast, user-centric interfaces. Committed to continuous learning, code quality, and delivering impactful digital solutions.",
  stats: [
    { label: "Lighthouse Performance", value: "98/100", desc: "For SSR & UI responsiveness" },
    { label: "Database Query Speed", value: "+35%", desc: "Via MongoDB schema indexing" },
    { label: "Data Security Standard", value: "+30%", desc: "JWT & Bcrypt hashing protocols" },
    { label: "Core Expertise", value: "MERN", desc: "React, Node, Express, MongoDB" }
  ]
};

export const skillsData = {
  languages: [
    { name: "Java", level: 88, category: "Object-Oriented Programming" },
    { name: "JavaScript (ES6+)", level: 94, category: "Core Language" },
    { name: "C++", level: 80, category: "Algorithms & DS" },
    { name: "C", level: 78, category: "System Concepts" }
  ],
  frontend: [
    { name: "React.js", level: 94, category: "Modern SPA & SSR" },
    { name: "HTML5 & CSS3", level: 96, category: "Semantic Markup" },
    { name: "Bootstrap", level: 90, category: "Responsive Grid" },
    { name: "Tailwind CSS", level: 95, category: "Modern Utility Styling" },
    { name: "Next.js", level: 90, category: "Full-Stack App Router" }
  ],
  backend: [
    { name: "Node.js", level: 90, category: "Runtime Environment" },
    { name: "Express.js", level: 92, category: "RESTful Web Server" },
    { name: "REST APIs", level: 94, category: "Middleware & Routing" },
    { name: "EJS Server-Side Rendering", level: 88, category: "Dynamic Templates" },
    { name: "JWT & Bcrypt", level: 92, category: "Authentication & Security" }
  ],
  database: [
    { name: "MongoDB", level: 92, category: "NoSQL Database" },
    { name: "Mongoose ODM", level: 94, category: "Schema & Validation" },
    { name: "MySQL", level: 82, category: "Relational Queries" },
    { name: "Indexing & Performance", level: 88, category: "Query Optimization" }
  ],
  tools: [
    { name: "Git & GitHub", level: 94, category: "Version Control" },
    { name: "VS Code", level: 96, category: "Development IDE" },
    { name: "Postman", level: 90, category: "API Testing" },
    { name: "Cloudinary & Multer", level: 90, category: "Media CDN Pipelines" }
  ]
};

export const experienceData = [
  {
    role: "IT Support Intern",
    company: "Medicover Healthcare Pvt Ltd",
    period: "Sep 2025 – Dec 2025",
    type: "Internship",
    location: "On-site",
    highlights: [
      "Installed, configured, and maintained desktops, laptops, printers, and other peripherals; supported end-user onboarding with device setup and software installation.",
      "Diagnosed and resolved technical issues for end users via phone, email, and in person, minimizing downtime.",
      "Monitored and maintained computer systems, networks, and servers to ensure operational reliability.",
      "Tracked IT asset inventory across hardware and software resources."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "KDSG Super-Speciality Hospital",
    period: "3 months",
    type: "Internship",
    location: "On-site",
    highlights: [
      "Managed and structured large-scale datasets in Microsoft Excel, maintaining 99%+ data accuracy across operational and financial records.",
      "Conducted end-to-end data cleaning and quantitative analysis on large financial datasets to uncover key trends and support leadership decision-making.",
      "Automated routine data entry and validation workflows via dynamic templates and macros, reducing manual processing time by over 30%.",
      "Designed interactive executive dashboards and reports using Pivot Tables and dynamic visualizations to deliver actionable business insights."
    ]
  }
];

export const projectsData = [
  {
    id: "travelnest",
    title: "TravelNest",
    subtitle: "Full-Stack Travel & Accommodation Booking Platform",
    category: "Full-Stack Web Application (Node.js, Express, MongoDB, EJS SSR)",
    badge: "Featured Full-Stack",
    status: "Live & Deployed",
    featured: true,
    github: "https://github.com/MrVinayakGupta/TravelNest",
    live: "https://travelnest-t3z3.onrender.com",
    liveUrl: "https://travelnest-t3z3.onrender.com",
    metrics: [
      { label: "Lighthouse Score", val: "98/100" },
      { label: "Server Response Latency", val: "-20% Reduced" },
      { label: "Query Speed Boost", val: "+35% Faster" }
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS SSR", "REST API", "Session Auth", "Bootstrap"],
    summary: "A production-grade travel accommodation marketplace featuring verified listings, protected reservations, interactive maps, and instant review aggregation.",
    highlights: [
      "Engineered a scalable RESTful API and backend ecosystem using Node.js and Express, reducing overall server response times by 20% through custom asynchronous middleware.",
      "Designed efficient NoSQL data pipelines in MongoDB, using advanced indexing and schema optimization to accelerate data retrieval speeds by 35% for dynamic property listings.",
      "Optimized frontend delivery for SEO and speed using EJS server-side rendering (SSR), achieving a near-perfect 98/100 Lighthouse score for UI responsiveness.",
      "Built a robust authentication system to secure protected routes, session state, and verified user reviews."
    ],
    architecture: {
      backend: "Node.js & Express with modular MVC architecture & async error handling",
      database: "MongoDB with compound indexing and Mongoose schema validations",
      rendering: "EJS Server-Side Rendering (SSR) for optimal SEO & zero hydration penalty",
      security: "Session-based authentication, input sanitization, and protected route guards"
    }
  },
  {
    id: "pinspire",
    title: "Pinspire",
    subtitle: "Full-Stack Photo Management Platform (MERN Stack)",
    category: "MERN Application (React.js, Node.js, Express, MongoDB)",
    badge: "MERN Stack",
    status: "Live & Deployed",
    featured: true,
    github: "https://github.com/MrVinayakGupta",
    live: "https://github.com/MrVinayakGupta",
    liveUrl: "https://github.com/MrVinayakGupta",
    metrics: [
      { label: "Image CDN Delivery", val: "+50% Faster" },
      { label: "User Data Security", val: "+30% Boost" },
      { label: "Component Re-renders", val: "-15% Cut" }
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Bcrypt", "Cloudinary API", "Multer", "Context API", "Masonry Grid"],
    summary: "A Pinterest-inspired visual discovery and media hub with seamless Cloudinary CDN asset uploads, responsive Masonry layout, and secured token auth.",
    highlights: [
      "Engineered a full-stack photo-sharing platform using the MERN stack, implementing JWT-based authentication and Bcrypt hashing to improve user data security by 30%.",
      "Architected global error-handling middleware and Mongoose schema validations, reducing API response redundancy by 20%.",
      "Streamlined image management by integrating Multer and the Cloudinary API, offloading server storage and boosting image loading speeds by 50% via CDN delivery.",
      "Developed a responsive Masonry grid in React using the Context API, improving state management and reducing component re-renders by 15%.",
      "Implemented dynamic routing and environment-based configuration, maintaining 100% data integrity across production environments."
    ],
    architecture: {
      frontend: "React SPA with dynamic Masonry layout and React Context API for global state",
      backend: "Express.js REST API with centralized asynchronous error handler",
      storage: "Cloudinary CDN integration with Multer streaming upload pipeline",
      auth: "Stateless JSON Web Tokens (JWT) with HTTP-only cookies and Bcrypt password salting"
    }
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    period: "2023 – 2026",
    status: "Pursuing / Graduating 2026",
    description: "Core coursework in Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL/NoSQL), Web Technologies, and Operating Systems.",
    highlight: "Computer Science & Software Applications"
  }
];

export const certificationsData = [
  {
    id: "delta-apna-college",
    title: "Delta – Full Stack Web Development",
    issuer: "Apna College",
    credentialId: "6a79ab1b5b9e304352072d50",
    badge: "Verified Certificate",
    date: "Certified",
    skills: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "REST APIs", "HTML5 & CSS3"],
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
  • about       : Bio & developer summary
  • skills      : Technical competencies & tech matrix
  • projects    : Highlighted full-stack applications (TravelNest & Pinspire)
  • experience  : Professional internships (Medicover & KDSG Hospital)
  • education   : Academic degree (BCA Purvanchal University)
  • certs       : Verified certificates (Delta Apna College & Scaler)
  • contact     : Direct contact details
  • social      : LinkedIn & GitHub profile links
  • clear       : Clear terminal window`,

  about: `Vinayak Gupta | Full-Stack MERN Developer
Location: Jaunpur, Uttar Pradesh, India
BCA (Veer Bahadur Singh Purvanchal University, 2023-2026)
Specializing in high-performance React frontends & resilient Node/Express backends.`,

  skills: `Languages: Java, JavaScript (ES6+), C, C++
Frontend : HTML, CSS, React.js, Bootstrap, Tailwind CSS, Next.js
Backend  : Node.js, Express.js, REST APIs, EJS SSR
Databases: MongoDB (Mongoose ODM), MySQL
Tools    : Git, GitHub, VS Code, Postman, Cloudinary, Multer`,

  projects: `1. TravelNest - Full-Stack Travel & Booking Platform
   Live URL : https://travelnest-t3z3.onrender.com
   GitHub   : https://github.com/MrVinayakGupta/TravelNest
   Features : Node/Express, MongoDB, EJS SSR, 98/100 Lighthouse

2. Pinspire   - Full-Stack Photo Management Platform
   Features : MERN Stack, JWT/Bcrypt, Cloudinary CDN, Masonry Grid`,

  experience: `1. IT Support Intern — Medicover Healthcare Pvt Ltd (Sep 2025 – Dec 2025)
2. Data Analyst Intern — KDSG Super-Speciality Hospital (3 months)`,

  education: `• Bachelor of Computer Application (BCA), 2023 – 2026
  Veer Bahadur Singh Purvanchal University, Jaunpur`,

  certs: `1. Delta – Full Stack Web Development, Apna College [ID: 6a79ab1b5b9e304352072d50]
2. Scaler Certified React Bootcamp Masterclass, Scaler`,

  contact: `Email    : guptavinayak520@gmail.com
Phone    : +91 6393646581
LinkedIn : https://www.linkedin.com/in/vinayak-gupta-066424377/
GitHub   : https://github.com/MrVinayakGupta
Live Site: https://portfolio-mrvinayakgupta.vercel.app`,

  social: `LinkedIn : https://www.linkedin.com/in/vinayak-gupta-066424377/
GitHub   : https://github.com/MrVinayakGupta`
};
