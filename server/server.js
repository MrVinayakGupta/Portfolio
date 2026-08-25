import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure data folder exists
const dataDir = path.join(__dirname, 'data');
const messagesFile = path.join(dataDir, 'messages.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, JSON.stringify([], null, 2));
}

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString(),
    owner: 'Vinayak Gupta'
  });
});

// Profile information API
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Vinayak Gupta",
    role: "Full-Stack MERN Developer",
    location: "Jaunpur, Uttar Pradesh, India",
    education: "BCA (2023 - 2026), Veer Bahadur Singh Purvanchal University",
    email: "guptavinayak520@gmail.com",
    phone: "+91 6393646581",
    github: "https://github.com/MrVinayakGupta",
    linkedin: "https://www.linkedin.com/in/vinayak-gupta-066424377/",
    specialties: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "SSR"]
  });
});

// Contact Form submission API
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'No Subject Provided',
      message,
      submittedAt: new Date().toISOString()
    };

    // Read existing messages
    let messages = [];
    try {
      const fileData = fs.readFileSync(messagesFile, 'utf8');
      messages = JSON.parse(fileData || '[]');
    } catch (e) {
      messages = [];
    }

    messages.push(newMessage);
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));

    console.log(`[New Contact Received from ${name} <${email}>]: ${subject || 'No Subject'}`);

    return res.status(201).json({
      success: true,
      message: 'Message received and stored successfully! Vinayak will be in touch soon.',
      id: newMessage.id
    });
  } catch (err) {
    console.error('Error saving contact submission:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error processing contact submission.'
    });
  }
});

// Serve static frontend build in production
const distPath = path.join(__dirname, '../client/dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Vinayak Gupta Portfolio Backend Server running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
});
