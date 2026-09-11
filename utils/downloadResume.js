import confetti from 'canvas-confetti';
import { personalInfo, educationData, certificationsData, projectsData, experienceData, skillsData } from '../data/portfolioData';

export function downloadResume() {
  confetti({
    particleCount: 65,
    spread: 70,
    origin: { y: 0.6 }
  });

  const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vinayak Gupta - Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.4;
      font-size: 11.5px;
      padding: 36px 44px;
      max-width: 850px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 14px;
    }

    .name {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 4px;
    }

    .contact-info {
      font-size: 11px;
      color: #334155;
      margin-bottom: 3px;
    }

    .links {
      font-size: 11px;
    }

    .links a {
      color: #0284c7;
      text-decoration: underline;
      margin: 0 4px;
    }

    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #000000;
      border-bottom: 1.5px solid #000000;
      padding-bottom: 2px;
      margin-top: 14px;
      margin-bottom: 6px;
    }

    .entry {
      margin-bottom: 8px;
    }

    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      font-size: 11.5px;
      color: #0f172a;
    }

    .entry-sub {
      font-size: 11px;
      color: #334155;
      margin-bottom: 2px;
    }

    .entry-sub a {
      color: #0284c7;
      text-decoration: underline;
    }

    ul {
      padding-left: 18px;
      margin-top: 2px;
    }

    li {
      margin-bottom: 2.5px;
      color: #1e293b;
      font-size: 11px;
      line-height: 1.4;
      text-align: justify;
    }

    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 11px;
    }

    .skills-grid span strong {
      color: #000000;
    }

    @media print {
      body {
        padding: 20px 30px;
      }
      @page {
        margin: 10mm;
      }
    }
  </style>
</head>
<body>

  <div class="header">
    <h1 class="name">VINAYAK GUPTA</h1>
    <div class="contact-info">
      Jaunpur, Uttar Pradesh, India &nbsp;|&nbsp; 6393646581 &nbsp;|&nbsp; guptavinayak520@gmail.com
    </div>
    <div class="links">
      <a href="https://www.linkedin.com/in/vinayak-gupta-066424377/" target="_blank">linkedin.com/in/vinayak-gupta-066424377</a> &nbsp;|&nbsp; 
      <a href="https://github.com/MrVinayakGupta" target="_blank">github.com/MrVinayakGupta</a> &nbsp;|&nbsp; 
      <a href="https://portfolio-mrvinayakgupta.vercel.app" target="_blank">portfolio-mrvinayakgupta.vercel.app</a>
    </div>
  </div>

  <div class="section-title">EDUCATION</div>
  <div class="entry">
    <div class="entry-header">
      <span>Bachelor of Computer Application (BCA)</span>
      <span>2023 – 2026</span>
    </div>
    <div class="entry-sub">Veer Bahadur Singh Purvanchal University, Jaunpur</div>
  </div>

  <div class="section-title">TECHNICAL SKILLS</div>
  <div class="skills-grid">
    <span><strong>Languages:</strong> Java, JavaScript, C, C++</span>
    <span><strong>Frontend:</strong> HTML, CSS, React.js, Bootstrap, Tailwind CSS</span>
    <span><strong>Backend:</strong> Node.js, Express.js, REST APIs</span>
    <span><strong>Databases:</strong> MongoDB, MySQL</span>
    <span><strong>Tools:</strong> Git, GitHub, VS Code</span>
  </div>

  <div class="section-title">EXPERIENCE</div>
  
  <div class="entry">
    <div class="entry-header">
      <span>IT Support Intern — Medicover Healthcare Pvt Ltd</span>
      <span>Sep 2025 – Dec 2025</span>
    </div>
    <ul>
      <li>Installed, configured, and maintained desktops, laptops, printers, and other peripherals; supported end-user onboarding with device setup and software installation.</li>
      <li>Diagnosed and resolved technical issues for end users via phone, email, and in person, minimizing downtime.</li>
      <li>Monitored and maintained computer systems, networks, and servers to ensure operational reliability.</li>
      <li>Tracked IT asset inventory across hardware and software resources.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="entry-header">
      <span>Data Analyst Intern — KDSG Super-Speciality Hospital</span>
      <span>3 months</span>
    </div>
    <ul>
      <li>Managed and structured large-scale datasets in Microsoft Excel, maintaining 99%+ data accuracy across operational and financial records.</li>
      <li>Conducted end-to-end data cleaning and quantitative analysis on large financial datasets to uncover key trends and support leadership decision-making.</li>
      <li>Automated routine data entry and validation workflows via dynamic templates and macros, reducing manual processing time by over 30%.</li>
      <li>Designed interactive executive dashboards and reports using Pivot Tables and dynamic visualizations to deliver actionable business insights.</li>
    </ul>
  </div>

  <div class="section-title">PROJECTS</div>

  <div class="entry">
    <div class="entry-header">
      <span>TravelNest — Full-Stack Travel &amp; Accommodation Booking Platform</span>
    </div>
    <div class="entry-sub">
      GitHub: <a href="https://github.com/MrVinayakGupta/TravelNest" target="_blank">github.com/MrVinayakGupta/TravelNest</a> &nbsp;|&nbsp; 
      Live Demo: <a href="https://travelnest-t3z3.onrender.com" target="_blank">travelnest-t3z3.onrender.com</a>
    </div>
    <ul>
      <li>Engineered a scalable RESTful API and backend ecosystem using Node.js and Express, reducing overall server response times by 20% through custom asynchronous middleware.</li>
      <li>Designed efficient NoSQL data pipelines in MongoDB, using advanced indexing and schema optimization to accelerate data retrieval speeds by 35% for dynamic property listings.</li>
      <li>Optimized frontend delivery for SEO and speed using EJS server-side rendering (SSR), achieving a near-perfect 98/100 Lighthouse score for UI responsiveness.</li>
      <li>Built a robust authentication system to secure protected routes, session state, and verified user reviews.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="entry-header">
      <span>Pinspire — Full-Stack Photo Management Platform (MERN Stack)</span>
    </div>
    <ul>
      <li>Engineered a full-stack photo-sharing platform using the MERN stack, implementing JWT-based authentication and Bcrypt hashing to improve user data security by 30%.</li>
      <li>Architected global error-handling middleware and Mongoose schema validations, reducing API response redundancy by 20%.</li>
      <li>Streamlined image management by integrating Multer and the Cloudinary API, offloading server storage and boosting image loading speeds by 50% via CDN delivery.</li>
      <li>Developed a responsive Masonry grid in React using the Context API, improving state management and reducing component re-renders by 15%.</li>
      <li>Implemented dynamic routing and environment-based configuration, maintaining 100% data integrity across production environments.</li>
    </ul>
  </div>

  <div class="section-title">CERTIFICATIONS</div>
  <ul>
    <li>Delta – Full Stack Web Development, Apna College</li>
    <li>Scaler Certified React Bootcamp Masterclass, Scaler</li>
  </ul>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 250);
    };
  </script>
</body>
</html>`;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(resumeHtml);
    printWindow.document.close();
  } else {
    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Vinayak_Gupta_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
