import { useState } from 'react';
import { LogIn } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validEmails = [
      'username_head@gmail.com',
      'username_manager@gmail.com',
      'username_volunteer@gmail.com'
    ];

    if (validEmails.includes(email)) {
      onLogin(email);
    } else {
      setError('Invalid email. Please use one of the authorized emails.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <LogIn className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-center text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-center text-gray-600 mb-8">Sign in to access your dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600 mb-2">Demo Accounts:</p>
          <div className="space-y-1 text-gray-500">
            <p className="cursor-pointer hover:text-blue-600" onClick={() => setEmail('username_head@gmail.com')}>
              • username_head@gmail.com (Full Access)
            </p>
            <p className="cursor-pointer hover:text-blue-600" onClick={() => setEmail('username_manager@gmail.com')}>
              • username_manager@gmail.com (Manager)
            </p>
            <p className="cursor-pointer hover:text-blue-600" onClick={() => setEmail('username_volunteer@gmail.com')}>
              • username_volunteer@gmail.com (Volunteer)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
