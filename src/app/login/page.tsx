'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (res?.ok) {
      router.push('/');
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="flex items-center justify-center bg-background p-4 pt-16 pb-20">
      <div className="max-w-md w-full space-y-6">
        {/* Default Credentials Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Default Login Credentials</h3>
          <div className="space-y-1 text-sm text-blue-700">
            <p><strong>Email:</strong> admin@example.com</p>
            <p><strong>Password:</strong> password</p>
          </div>
          <p className="text-xs text-blue-600 mt-2">Use these credentials to access the app</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
          <h2 className="text-2xl mb-6 font-bold text-center text-gray-800">Login</h2>
          <div className="space-y-4">
            <div>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                required 
                className="input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            {error && <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</div>}
            <button 
              type="submit" 
              className="btn w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
