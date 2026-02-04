import React from 'react';
import { motion } from 'framer-motion';
interface ProgressBarProps {
  steps: string[];
  currentStep: number; // 0-indexed
}
export function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative flex justify-between mb-2">
        {steps.map((step, index) =>
        <span
          key={step}
          className={`text-xs font-medium transition-colors duration-300 ${index <= currentStep ? 'text-slate-900' : 'text-slate-400'}`}>

            {step}
          </span>
        )}
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-slate-900 rounded-full"
          initial={{
            width: '0%'
          }}
          animate={{
            width: `${(currentStep + 1) / steps.length * 100}%`
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }} />

      </div>
    </div>);

}