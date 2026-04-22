import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock } from 'lucide-react';
interface LoginPageProps {
  onLogin: () => void;
}
export function LoginPage({ onLogin }: LoginPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#52796f]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#84a98c]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }}
        className="w-full max-w-sm mx-auto relative z-10">

        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mt-5 bg-[#ffffff] mb-2">
            <img width="200px" className='ml-10 h-auto drop-shadow-lg shadow-[#52796f]/30' src={`${import.meta.env.BASE_URL}sapi.png`} alt="Livsence">
             </img>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            LIVSENSE
          </h1>
          <p className="text-[#52796f] font-medium mt-2">
            Sense the Signs. Save the Stock.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                required
                placeholder="officer@livsense.com"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#52796f] focus:border-transparent transition-all text-gray-900 placeholder-gray-400" />

            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#52796f] focus:border-transparent transition-all text-gray-900 placeholder-gray-400" />

            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-[#52796f] focus:ring-[#52796f]" />

              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-[#52796f] font-semibold hover:underline">

              Forgot password?
            </a>
          </div>

          <motion.button
            whileTap={{
              scale: 0.98
            }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#52796f] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#52796f]/30 flex items-center justify-center space-x-2 hover:bg-[#466a60] transition-colors">

            {isLoading ?
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear'
              }}
              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" /> :


            <>
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5" />
              </>
            }
          </motion.button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-[#52796f] font-bold hover:underline">
            Contact Admin
          </a>
        </p>
      </motion.div>
    </div>);

}