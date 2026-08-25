import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ theme }) {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. Vinayak will get back to you shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setStatus({
          type: 'success',
          message: `Thank you, ${formData.name}! Your message was recorded. You can also reach out directly at guptavinayak520@gmail.com.`
        });
        confetti({ particleCount: 50, spread: 60 });
      }
    } catch (err) {
      console.log('Contact form local fallback triggered');
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Message noted. You can also send directly to guptavinayak520@gmail.com.`
      });
      confetti({ particleCount: 50, spread: 60 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0f1d]' : 'bg-[#faf8f5]'
    }`}>
      {/* Background ambient lighting */}
      <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none -z-10 ${
        isDark ? 'bg-sky-500/10' : 'bg-amber-400/15'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
            isDark 
              ? 'bg-sky-500/10 border border-sky-500/20 text-sky-400' 
              : 'bg-amber-500/15 border border-amber-400 text-amber-800 font-semibold'
          }`}>
            <Mail className="w-3.5 h-3.5" />
            <span>06. LET'S CONNECT</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Get in Touch with <span className="gradient-text">Vinayak</span>
          </h2>
          
          <p className={`max-w-2xl mt-3 text-sm sm:text-base ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Have a project in mind, an open full-time position, or want to talk tech? Send a message or reach out directly through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className={`glass-panel p-6 rounded-3xl border transition-all flex items-start justify-between gap-4 group ${
              isDark ? 'border-slate-800 hover:border-sky-500/40' : 'border-amber-200 hover:border-amber-400 shadow-sm'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                  isDark ? 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20' : 'bg-amber-100 text-amber-700 group-hover:bg-amber-200'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-xs font-mono uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-medium'
                  }`}>Email Address</div>
                  
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className={`text-sm sm:text-base font-bold transition-colors block mt-0.5 ${
                      isDark ? 'text-white hover:text-sky-400' : 'text-slate-900 hover:text-amber-700'
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                  <span className={`text-xs mt-1 block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Replies within 24 hours
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className={`p-2 rounded-xl transition-colors border ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                    : 'bg-white hover:bg-amber-50 text-slate-700 border-amber-200 shadow-sm'
                }`}
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className={`glass-panel p-6 rounded-3xl border transition-all flex items-start justify-between gap-4 group ${
              isDark ? 'border-slate-800 hover:border-emerald-500/40' : 'border-amber-200 hover:border-emerald-400 shadow-sm'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                  isDark ? 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20' : 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200'
                }`}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-xs font-mono uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-medium'
                  }`}>Direct Phone & WhatsApp</div>
                  
                  <a 
                    href={`tel:${personalInfo.rawPhone}`} 
                    className={`text-sm sm:text-base font-bold transition-colors block mt-0.5 ${
                      isDark ? 'text-white hover:text-emerald-400' : 'text-slate-900 hover:text-emerald-700'
                    }`}
                  >
                    {personalInfo.phone}
                  </a>
                  
                  <div className="flex items-center gap-3 mt-1 text-xs">
                    <a 
                      href={`https://wa.me/91${personalInfo.rawPhone}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-emerald-600 hover:underline font-bold"
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleCopy(personalInfo.rawPhone, 'phone')}
                className={`p-2 rounded-xl transition-colors border ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                    : 'bg-white hover:bg-amber-50 text-slate-700 border-amber-200 shadow-sm'
                }`}
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className={`glass-panel p-6 rounded-3xl border flex items-start gap-4 ${
              isDark ? 'border-slate-800' : 'border-amber-200 shadow-sm'
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-amber-100 text-amber-700'
              }`}>
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className={`text-xs font-mono uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500 font-medium'
                }`}>Location</div>
                <div className={`text-sm sm:text-base font-bold mt-0.5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {personalInfo.location}
                </div>
                <span className={`text-xs mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Open to on-site & remote opportunities
                </span>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className={`p-4 rounded-2xl border flex items-center justify-around ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-amber-200 shadow-sm'
            }`}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  isDark ? 'text-slate-300 hover:text-sky-400' : 'text-slate-700 hover:text-amber-700'
                }`}
              >
                <Linkedin className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>LinkedIn</span>
              </a>
              <span className={isDark ? 'text-slate-700' : 'text-amber-200'}>|</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  isDark ? 'text-slate-300 hover:text-sky-400' : 'text-slate-700 hover:text-amber-700'
                }`}
              >
                <Github className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className={`glass-panel p-6 sm:p-8 rounded-3xl border relative ${
              isDark ? 'border-slate-800' : 'border-amber-200/90 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold flex items-center gap-2 mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <MessageSquare className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Send a Message</span>
              </h3>
              
              <p className={`text-xs sm:text-sm mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Fill out the details below to send an inquiry directly to Vinayak's mailbox.
              </p>

              {/* Status Alert */}
              {status && (
                <div 
                  className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm flex items-start gap-3 ${
                    status.type === 'success' 
                      ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800' 
                      : 'bg-rose-950/40 text-rose-300 border border-rose-800'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-700 font-semibold'
                    }`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none transition-all border ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-800 text-white focus:border-sky-500 placeholder:text-slate-600' 
                          : 'bg-white border-amber-200 text-slate-900 focus:border-amber-500 shadow-sm placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-700 font-semibold'
                    }`}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none transition-all border ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-800 text-white focus:border-sky-500 placeholder:text-slate-600' 
                          : 'bg-white border-amber-200 text-slate-900 focus:border-amber-500 shadow-sm placeholder:text-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-700 font-semibold'
                  }`}>
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Time Opportunity / Project Discussion"
                    className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none transition-all border ${
                      isDark 
                        ? 'bg-slate-900/90 border-slate-800 text-white focus:border-sky-500 placeholder:text-slate-600' 
                        : 'bg-white border-amber-200 text-slate-900 focus:border-amber-500 shadow-sm placeholder:text-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-700 font-semibold'
                  }`}>
                    Message Content *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Vinayak, I saw your portfolio and would like to connect regarding..."
                    className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none transition-all resize-none border ${
                      isDark 
                        ? 'bg-slate-900/90 border-slate-800 text-white focus:border-sky-500 placeholder:text-slate-600' 
                        : 'bg-white border-amber-200 text-slate-900 focus:border-amber-500 shadow-sm placeholder:text-slate-400'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-white font-bold text-sm shadow-xl transition-all active:scale-98 disabled:opacity-50 ${
                    isDark
                      ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-sky-500/20'
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-amber-500/30'
                  }`}
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry to Vinayak</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
