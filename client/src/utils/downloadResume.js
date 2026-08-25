import confetti from 'canvas-confetti';
import { personalInfo, educationData, certificationsData, projectsData } from '../data/portfolioData';

export function downloadResume() {
  // Fire celebration confetti
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.6 }
  });

  // Construct styled printable HTML content
  const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vinayak Gupta - Full-Stack Developer Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 30px;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.45;
      font-size: 13px;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #d97706;
      padding-bottom: 14px;
      margin-bottom: 16px;
    }
    .name {
      font-size: 26px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
      text-transform: uppercase;
      margin: 0;
    }
    .role {
      font-size: 14px;
      font-weight: 600;
      color: #b45309;
      margin-top: 4px;
    }
    .contact-bar {
      margin-top: 8px;
      font-size: 11.5px;
      color: #475569;
    }
    .contact-bar a {
      color: #b45309;
      text-decoration: none;
      font-weight: 600;
    }
    .section-title {
      font-size: 12.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #b45309;
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 3px;
      margin-top: 14px;
      margin-bottom: 8px;
    }
    .summary {
      color: #334155;
      font-size: 12px;
      text-align: justify;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      font-size: 12px;
    }
    .project-item {
      margin-bottom: 10px;
    }
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      font-size: 13px;
      color: #0f172a;
    }
    .project-tech {
      font-size: 11px;
      color: #64748b;
      font-weight: normal;
    }
    ul {
      margin: 4px 0 0 0;
      padding-left: 18px;
    }
    li {
      margin-bottom: 3px;
      font-size: 12px;
      color: #334155;
    }
    .edu-item, .cert-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
      font-size: 12px;
    }
    .cert-id {
      font-family: monospace;
      background: #fef3c7;
      padding: 1px 6px;
      border-radius: 4px;
      color: #92400e;
      font-size: 11px;
      font-weight: bold;
    }
    @media print {
      body { padding: 15px; }
      @page { margin: 12mm; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="name">${personalInfo.name}</h1>
    <div class="role">${personalInfo.role}</div>
    <div class="contact-bar">
      ${personalInfo.location} • ${personalInfo.phone} • <a href="mailto:${personalInfo.email}">${personalInfo.email}</a> • <a href="${personalInfo.linkedin}">LinkedIn</a> • <a href="${personalInfo.github}">GitHub</a>
    </div>
  </div>

  <div class="section-title">Professional Summary</div>
  <div class="summary">${personalInfo.summary}</div>

  <div class="section-title">Technical Skills</div>
  <div class="grid">
    <div><strong>Languages:</strong> Java, JavaScript (ES6+), C, C++</div>
    <div><strong>Frontend:</strong> React.js, Tailwind CSS, Bootstrap, HTML5, CSS3</div>
    <div><strong>Backend:</strong> Node.js, Express.js, EJS SSR, RESTful APIs</div>
    <div><strong>Databases:</strong> MongoDB (Mongoose ODM), MySQL</div>
    <div><strong>Architecture & Auth:</strong> JWT, Bcrypt, Multer, Cloudinary API</div>
    <div><strong>Tools & Workflow:</strong> Git, GitHub, VS Code, Postman</div>
  </div>

  <div class="section-title">Key Full-Stack Projects</div>
  ${projectsData.map(p => `
    <div class="project-item">
      <div class="project-header">
        <span>${p.title} <span class="project-tech">| ${p.category}</span></span>
        <span style="font-size: 11px; font-weight: normal; color: #b45309;">GitHub: ${p.github}</span>
      </div>
      <ul>
        ${p.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('')}

  <div class="section-title">Education</div>
  ${educationData.map(e => `
    <div class="edu-item">
      <div>
        <strong>${e.degree}</strong> – <span>${e.institution}</span>
      </div>
      <div style="font-weight: 600; color: #b45309;">${e.period}</div>
    </div>
  `).join('')}

  <div class="section-title">Verified Certifications</div>
  ${certificationsData.map(c => `
    <div class="cert-item">
      <div>
        <strong>${c.title}</strong> – <span>${c.issuer}</span>
        ${c.credentialId ? `<span class="cert-id" style="margin-left: 8px;">ID: ${c.credentialId}</span>` : ''}
      </div>
      <div style="font-weight: 600; color: #059669;">Verified</div>
    </div>
  `).join('')}

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>`;

  // Open printable window for instant saving / printing as PDF
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(resumeHtml);
    printWindow.document.close();
  } else {
    // Fallback: Create downloadable HTML/Doc blob
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
