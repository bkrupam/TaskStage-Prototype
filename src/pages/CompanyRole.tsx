import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Briefcase } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
export function CompanyRole() {
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  useEffect(() => {
    // Check if assignment text exists, otherwise redirect to landing
    const assignmentText = sessionStorage.getItem('assignmentText');
    if (!assignmentText) {
      navigate('/');
    }
  }, [navigate]);
  const handleContinue = () => {
    // Store company and role
    if (company) sessionStorage.setItem('company', company);
    if (role) sessionStorage.setItem('role', role);
    // Navigate to analyze page which will show loading
    navigate('/analyze');
  };
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center bg-slate-50/50">

      <div className="w-full max-w-md">
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
            delay: 0.1,
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="text-center mb-8">

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Almost there
          </h1>
          <p className="text-slate-600">
            Help us personalize your analysis (optional)
          </p>
        </motion.div>

        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 size={16} className="text-slate-400" />
                <label className="text-sm font-medium text-slate-700">
                  Company Name
                </label>
                <span className="text-xs text-slate-400">(optional)</span>
              </div>
              <Input
                placeholder="e.g., Acme Corp"
                value={company}
                onChange={(e) => setCompany(e.target.value)} />

            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={16} className="text-slate-400" />
                <label className="text-sm font-medium text-slate-700">
                  Role
                </label>
                <span className="text-xs text-slate-400">(optional)</span>
              </div>
              <Input
                placeholder="e.g., Senior Frontend Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)} />

            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="w-full group"
                onClick={handleContinue}>

                Continue to Analysis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            <p className="text-xs text-center text-slate-500">
              This helps us provide more accurate benchmarks and insights
            </p>
          </div>
        </Card>
      </div>
    </motion.div>);

}