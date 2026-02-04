import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Shield, Calculator, Check } from 'lucide-react';
const stages = [
{
  id: 0,
  name: 'Extracting',
  label: 'Extracting requirements',
  icon: FileText
},
{
  id: 1,
  name: 'Analyzing',
  label: 'Detecting red flags',
  icon: Shield
},
{
  id: 2,
  name: 'Scoring',
  label: 'Calculating fairness score',
  icon: Calculator
}];

export function Analyze() {
  const navigate = useNavigate();
  const [progressStep, setProgressStep] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    // Check if assignment text exists
    const assignmentText = sessionStorage.getItem('assignmentText');
    if (!assignmentText) {
      navigate('/');
      return;
    }
    // Start elapsed time counter
    const timeInterval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    // Simulate analysis steps
    const steps = [
    {
      delay: 1500,
      step: 0
    },
    {
      delay: 3000,
      step: 1
    },
    {
      delay: 4500,
      step: 2
    }];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setProgressStep(step), delay);
    });
    setTimeout(() => {
      navigate('/results/123');
    }, 6000);
    return () => clearInterval(timeInterval);
  }, [navigate]);
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center bg-slate-50/50">

      <div className="w-full max-w-2xl">
        {/* Stage Cards */}
        <div className="space-y-3 mb-8">
          {stages.map((stage, index) => {
            const isActive = progressStep === stage.id;
            const isComplete = progressStep > stage.id;
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1]
                }}>

                <div
                  className={`
                    relative p-6 rounded-xl transition-all duration-300
                    ${isActive ? 'bg-white opacity-100' : 'bg-white/40 opacity-60'}
                  `}
                  style={{
                    boxShadow: isActive ?
                    '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)' :
                    '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)',
                    borderLeft: isActive ?
                    '4px solid #0f172a' :
                    '4px solid transparent'
                  }}>

                  <div className="flex items-center gap-4">
                    {/* Icon/Status */}
                    <div
                      className={`
                      flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300
                      ${isComplete ? 'bg-emerald-50 text-emerald-600' : isActive ? 'bg-slate-100 text-slate-600' : 'bg-slate-50 text-slate-400'}
                    `}>

                      {isComplete ?
                      <motion.div
                        initial={{
                          scale: 0
                        }}
                        animate={{
                          scale: 1
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30
                        }}>

                          <Check size={20} />
                        </motion.div> :
                      isActive ?
                      <motion.div
                        animate={{
                          rotate: 360
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear'
                        }}>

                          <Icon size={20} />
                        </motion.div> :

                      <Icon size={20} />
                      }
                    </div>

                    {/* Stage Info */}
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">
                        {stage.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {stage.label}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="text-sm text-slate-400">
                      {isComplete ?
                      <span className="text-emerald-600 font-medium">
                          Complete
                        </span> :
                      isActive ?
                      <span className="text-slate-600">In progress...</span> :

                      <span>Waiting</span>
                      }
                    </div>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>

        {/* Elapsed Time */}
        <div className="text-center">
          <p className="text-sm text-slate-400">{elapsedTime}s elapsed</p>
        </div>
      </div>
    </motion.div>);

}