'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const themeContext = useTheme();
  const { themes, themeIdx, logo, appName } = themeContext || { themes: [], themeIdx: 0, logo: null, appName: 'Themed App' };
  const currentTheme = themes[themeIdx];

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-primary text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null; // Will redirect to login
  }

  return (
    <div className="flex flex-col items-center bg-background text-text p-8 pt-16">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">Welcome to {appName || 'Themed App'}</h1>
        
        {/* Logo Display */}
        <div className="mb-6">
          {logo ? (
            <img 
              src={logo} 
              alt="Your Logo" 
              className="h-24 w-auto mx-auto object-contain border-2 border-primary rounded-lg p-2"
            />
          ) : (
            <div className="h-24 w-32 mx-auto bg-gray-200 border-2 border-primary rounded-lg flex items-center justify-center text-primary font-bold">
              No Logo
            </div>
          )}
        </div>
        
        {/* Theme Info */}
        <div 
          className="bg-white p-4 rounded-lg shadow-md mb-6 text-gray-800 cursor-pointer hover:shadow-lg transition-shadow"
          title={`Current Theme: ${currentTheme?.name || 'Default'}`}
        >
          <h2 className="text-lg font-semibold mb-2">Current Theme: {currentTheme?.name || 'Default'}</h2>
          <p>Logo: {logo ? 'Uploaded' : 'Default'}</p>
          {currentTheme && (
            <div className="mt-2">
              <div className="flex justify-center gap-2 mt-2">
                <div 
                  className="w-6 h-6 rounded border cursor-pointer hover:scale-110 transition-transform" 
                  style={{ backgroundColor: currentTheme.colors.primary }}
                  title={`Primary Color: ${currentTheme.colors.primary}`}
                ></div>
                <div 
                  className="w-6 h-6 rounded border cursor-pointer hover:scale-110 transition-transform" 
                  style={{ backgroundColor: currentTheme.colors.background }}
                  title={`Background Color: ${currentTheme.colors.background}`}
                ></div>
                <div 
                  className="w-6 h-6 rounded border cursor-pointer hover:scale-110 transition-transform" 
                  style={{ backgroundColor: currentTheme.colors.text }}
                  title={`Text Color: ${currentTheme.colors.text}`}
                ></div>
              </div>
              <p className="text-sm font-semibold mt-2 text-primary">
                Theme: {currentTheme.name}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Link 
            href="/configure" 
            className="btn block w-full text-center bg-primary hover:bg-primary/90"
          >
            Configure Theme
          </Link>
          <button 
            onClick={() => {
              localStorage.removeItem('themeConfig');
              signOut({ callbackUrl: '/login' });
            }}
            className="w-full py-2 px-4 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
