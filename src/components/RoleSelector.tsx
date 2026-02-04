import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from './Button';
interface RoleSelectorProps {
  selectedRole: string;
  onRoleChange: (role: string) => void;
  variant?: 'inline' | 'modal';
}
const ROLES = [
'Frontend Engineer',
'Backend Engineer',
'Full Stack Engineer',
'Product Designer',
'Data Scientist',
'iOS Developer',
'Android Developer',
'DevOps Engineer',
'Product Manager',
'Marketing Manager',
'All Roles'];

export function RoleSelector({
  selectedRole,
  onRoleChange,
  variant = 'inline'
}: RoleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (role: string) => {
    onRoleChange(role);
    setIsOpen(false);
  };
  if (variant === 'inline') {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          style={{
            boxShadow:
            '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)'
          }}>

          <span>{selectedRole}</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />

        </button>

        <AnimatePresence>
          {isOpen &&
          <>
              <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)} />

              <motion.div
              initial={{
                opacity: 0,
                y: -10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.15
              }}
              className="absolute top-full mt-2 left-0 w-64 bg-white rounded-lg py-2 z-20 max-h-80 overflow-y-auto"
              style={{
                boxShadow:
                '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
              }}>

                {ROLES.map((role) =>
              <button
                key={role}
                onClick={() => handleSelect(role)}
                className="w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 transition-colors flex items-center justify-between group">

                    <span
                  className={
                  selectedRole === role ?
                  'font-medium text-slate-900' :
                  'text-slate-600'
                  }>

                      {role}
                    </span>
                    {selectedRole === role &&
                <Check size={16} className="text-slate-900" />
                }
                  </button>
              )}
              </motion.div>
            </>
          }
        </AnimatePresence>
      </div>);

  }
  return null;
}