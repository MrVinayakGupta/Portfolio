import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';
import ScrollProgressBar from '../components/ScrollProgressBar';

export const metadata = {
  title: 'Vinayak Gupta | Full-Stack MERN Developer & Computer Science Graduate',
  description: 'Portfolio of Vinayak Gupta - Full-Stack MERN Developer, BCA Graduate from Veer Bahadur Singh Purvanchal University, Jaunpur. Certified in Delta Full-Stack Web Development by Apna College.',
  keywords: 'Vinayak Gupta, Full Stack Developer, MERN Stack, React Developer, Next.js, Node.js, Express.js, MongoDB, TravelNest, Pinspire, Apna College Delta, Jaunpur',
  authors: [{ name: 'Vinayak Gupta', url: 'https://github.com/MrVinayakGupta' }],
  creator: 'Vinayak Gupta',
  openGraph: {
    title: 'Vinayak Gupta - Full-Stack MERN Developer',
    description: 'Explore high-performance full-stack applications, scalable APIs, and verified credentials for Vinayak Gupta.',
    url: 'https://github.com/MrVinayakGupta',
    siteName: 'Vinayak Gupta Portfolio',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-amber-500 selection:text-white min-h-screen font-sans">
        <ThemeProvider>
          {/* Synchronized Scroll Progress Bar at the top of the viewport */}
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
