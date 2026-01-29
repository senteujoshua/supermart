// src/pages/LoginPage.tsx - Glassmorphism Design

import { LoginForm } from '../components/auth/LoginForm';

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cream/10 rounded-full blur-3xl" />

      {/* Login Card */}
      <div className="glass-modal w-full max-w-md animate-in relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/40 to-cream/30 flex items-center justify-center border border-offwhite/20 shadow-glass">
            <svg className="w-8 h-8 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-offwhite text-shadow-glass">SuperMart</h1>
          <p className="text-secondary/80 mt-2">Welcome back! Sign in to continue</p>
        </div>

        <LoginForm />

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-secondary/50 text-xs">
            Premium Shopping Experience
          </p>
        </div>
      </div>
    </div>
  );
}
