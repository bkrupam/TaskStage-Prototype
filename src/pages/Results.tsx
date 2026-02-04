import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  Bookmark,
  Flag,
  Clock,
  Users,
  BarChart3,
  ChevronLeft,
  TrendingDown } from
'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Accordion } from '../components/Accordion';
import { ReportOutcomeModal } from '../components/ReportOutcomeModal';
import { SharePubliclyModal } from '../components/SharePubliclyModal';
import { toast, Toaster } from 'sonner';
export function Results() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? 'Removed from dashboard' : 'Saved to dashboard');
  };
  const score = 42;
  const verdict = 'Avoid';
  const verdictColor = 'text-rose-600 bg-rose-50 border-rose-100';
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
      className="min-h-screen pt-20 pb-32 bg-slate-50/50">

      <Toaster position="top-right" />

      {/* Header / Nav */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors group">

          <ChevronLeft
            size={16}
            className="mr-1 transition-transform group-hover:-translate-x-0.5" />
          {' '}
          Back to home
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Frontend Take-home Analysis
            </h1>
            <p className="text-slate-500">
              TechCorp Inc. • Senior Frontend Engineer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content - Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Score Card */}
          <Card className="p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-shrink-0">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    className="text-slate-100"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="70"
                    cx="80"
                    cy="80" />

                  <motion.circle
                    className="text-rose-500"
                    strokeWidth="10"
                    strokeDasharray={440}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="70"
                    cx="80"
                    cy="80"
                    initial={{
                      strokeDashoffset: 440
                    }}
                    animate={{
                      strokeDashoffset: 440 - 440 * score / 100
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.23, 1, 0.32, 1],
                      delay: 0.2
                    }} />

                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <motion.span
                    className="text-5xl font-bold text-slate-900"
                    initial={{
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1],
                      delay: 0.3
                    }}>

                    {score}
                  </motion.span>
                  <span className="block text-xs text-slate-500 font-medium uppercase mt-1">
                    Score
                  </span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold border mb-4 ${verdictColor}`}>

                  Verdict: {verdict}
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  High effort, low return probability
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  This assignment requires significantly more effort than
                  average for this role level. Several red flags indicate
                  potential free work or disorganized hiring process.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">
                  Estimated Effort
                </p>
                <p className="text-2xl font-bold text-slate-900">12-16 hrs</p>
                <p className="text-xs text-slate-400 mt-1">
                  Limit stated: 4 hrs
                </p>
              </div>
            </Card>
            <Card className="p-6 flex items-start gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                <Flag size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">
                  Red Flags
                </p>
                <p className="text-2xl font-bold text-slate-900">3 Found</p>
                <p className="text-xs text-slate-400 mt-1">Critical severity</p>
              </div>
            </Card>
          </div>

          {/* Red Flags */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Detected Issues
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="danger" className="px-3 py-1.5 text-sm">
                Excessive Scope
              </Badge>
              <Badge variant="danger" className="px-3 py-1.5 text-sm">
                Production Ready Req
              </Badge>
              <Badge variant="warning" className="px-3 py-1.5 text-sm">
                Vague Success Criteria
              </Badge>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Detailed Breakdown
            </h3>
            <Accordion
              items={[
              {
                id: 'scope',
                title: 'Scope vs Time Limit Analysis',
                content:
                'The assignment asks for "production ready" code, unit tests (80% coverage), and deployment within a 48-hour window. For a senior role, this scope typically requires 12-16 hours of focused work, which contradicts the "4 hours" suggested time limit. This is a common red flag indicating the company does not value candidate time.'
              },
              {
                id: 'tech',
                title: 'Technical Requirements',
                content:
                'Requiring a specific state management library (Redux) for a simple fetch-and-display app adds unnecessary boilerplate and complexity. This suggests a rigid engineering culture or outdated boilerplate requirements.'
              },
              {
                id: 'rights',
                title: 'IP & Usage Rights',
                content:
                'No clear statement about intellectual property ownership. The requirement to "implement pixel-perfect design" for a specific business use case could imply spec work.'
              }]
              }
              defaultOpenId="scope" />

          </div>
        </div>

        {/* Sidebar - Right Column */}
        <div className="space-y-6">
          {/* Community Stats */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Users size={16} /> Community Insights
            </h3>

            <Card className="p-6 flex items-start gap-4">
              <div className="p-3 bg-rose-50 text-rose-600 rounded-lg">
                <TrendingDown size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">
                  Callback Rate
                </p>
                <p className="text-2xl font-bold text-slate-900">12%</p>
                <p className="text-xs text-slate-400 mt-1">
                  vs 34% industry avg
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">
                  Avg Time Spent
                </p>
                <p className="text-2xl font-bold text-slate-900">14.5h</p>
                <p className="text-xs text-slate-400 mt-1">3.6x stated limit</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <div className="p-3 bg-slate-50 text-slate-600 rounded-lg">
                <BarChart3 size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">
                  Total Reports
                </p>
                <p className="text-2xl font-bold text-slate-900">42</p>
                <p className="text-xs text-slate-400 mt-1">
                  Community insights
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action Bar - Glassmorphic Pill */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{
            y: 100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.5
          }}
          className="pointer-events-auto">

          <div
            className="bg-white/80 backdrop-blur-xl p-2 border border-slate-200/50"
            style={{
              borderRadius: '20px',
              boxShadow:
              '0 8px 32px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)'
            }}>

            <div className="flex items-center gap-2">
              <Button
                size="lg"
                onClick={() => setIsReportModalOpen(true)}
                className="bg-slate-900 hover:bg-slate-800 whitespace-nowrap"
                style={{
                  borderRadius: '16px'
                }}>

                <BarChart3 size={18} className="mr-2" /> Report Outcome
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleSave}
                className="whitespace-nowrap"
                style={{
                  borderRadius: '16px'
                }}>

                <Bookmark
                  size={18}
                  className={`mr-2 ${isSaved ? 'fill-slate-600' : ''}`} />

                {isSaved ? 'Saved' : 'Save'}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsShareModalOpen(true)}
                className="whitespace-nowrap"
                style={{
                  borderRadius: '16px'
                }}>

                <Share2 size={18} className="mr-2" /> Share
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <ReportOutcomeModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSuccess={() => toast.success('Report submitted successfully')} />


      <SharePubliclyModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onSuccess={() => toast.success('Analysis published to community')} />

    </motion.div>);

}