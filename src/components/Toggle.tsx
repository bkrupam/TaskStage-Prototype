import React from 'react';
import { motion } from 'framer-motion';
interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}
export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => onChange(!checked)}>

      <div
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${checked ? 'bg-slate-900' : 'bg-slate-200'}`}>

        <motion.span
          layout
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30
          }}
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-6' : 'translate-x-1'}`} />

      </div>
      {label &&
      <span className="ml-3 text-sm font-medium text-slate-700 select-none">
          {label}
        </span>
      }
    </div>);

}