'use client';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

function Header() {
  const { logo, appName } = useTheme() || {};
  return (
    <header className="flex items-center gap-4 p-4 bg-primary text-white shadow-md">
      {logo ? (
        <img 
          src={logo} 
          alt="Uploaded Logo" 
          className="h-8 w-auto object-contain"
        />
      ) : (
        <div className="bg-white text-primary px-3 py-1 rounded font-bold text-sm">
          App Logo
        </div>
      )}
      <span className="font-bold text-xl">{appName || 'Themed App'}</span>
    </header>
  );
}

function Footer() {
  const { appName } = useTheme() || {};
  return (
    <footer className="bg-primary text-white py-3 px-6 text-center mt-auto">
      <p className="text-sm">
        Made by{' '}
        <span className="font-semibold text-white">
          Purnima Darsi
        </span>
        {appName && appName !== 'Themed App' && (
          <span className="text-xs block mt-1 opacity-80">
            for {appName}
          </span>
        )}
      </p>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <SessionProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
