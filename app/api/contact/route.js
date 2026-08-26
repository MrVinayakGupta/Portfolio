import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide name, email, and message.' },
        { status: 400 }
      );
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      submittedAt: new Date().toISOString()
    };

    // Safely attempt local message storage
    try {
      const dataDir = path.join(process.cwd(), 'data');
      const messagesFile = path.join(dataDir, 'messages.json');

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let messages = [];
      if (fs.existsSync(messagesFile)) {
        const fileContent = fs.readFileSync(messagesFile, 'utf8');
        messages = JSON.parse(fileContent || '[]');
      }

      messages.push(newMessage);
      fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    } catch (fsErr) {
      console.log('Serverless environment file write skipped:', fsErr.message);
    }

    console.log(`[New Contact Received from ${name} <${email}>]: ${subject || 'No Subject'}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Message received and recorded! Vinayak will get in touch with you shortly.',
        id: newMessage.id
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('API Contact route error:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing contact submission.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    endpoint: '/api/contact',
    method: 'POST to submit inquiries'
  });
}
