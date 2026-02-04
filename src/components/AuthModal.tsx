import React, { useState } from 'react';
import { Modal } from './Modal';
import { Input } from './Input';
import { Button } from './Button';
import { Lock, Mail, Github } from 'lucide-react';
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'login' ? 'Welcome back' : 'Create an account'}
      maxWidth="max-w-md">

      <div className="space-y-6">
        <div className="flex p-1 bg-slate-100 rounded-lg">
          <button
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            onClick={() => setMode('login')}>

            Login
          </button>
          <button
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            onClick={() => setMode('signup')}>

            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            required />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            required />


          {mode === 'login' &&
          <div className="flex justify-end">
              <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900">

                Forgot password?
              </a>
            </div>
          }

          <Button type="submit" className="w-full" isLoading={isLoading}>
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-500">
              Or continue with
            </span>
          </div>
        </div>

        <Button variant="secondary" className="w-full" type="button">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Button>
      </div>
    </Modal>);

}