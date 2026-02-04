import React, { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Upload,
  Search } from
'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Textarea } from '../components/Textarea';
export function Landing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'analyze' | 'search'>('analyze');
  const [assignmentText, setAssignmentText] = useState('');
  const [companySearch, setCompanySearch] = useState('');
  const handleAnalyze = () => {
    if (assignmentText.trim()) {
      sessionStorage.setItem('assignmentText', assignmentText);
      navigate('/company-role');
    }
  };
  const handleSearch = () => {
    if (companySearch.trim()) {
      navigate(`/reports?company=${encodeURIComponent(companySearch)}`);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Refined Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-violet-50/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-4xl">
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
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1]
            }}>

            <div
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-700 text-xs font-medium mb-8 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)'
              }}>

              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Now in Public Beta
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Is this assignment <br className="hidden md:block" />
              <span className="text-slate-600">worth doing?</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              Analyze hiring take-home tasks instantly. Get an objective score
              on effort, fairness, and red flags before you write a single line
              of code.
            </p>

            {/* Card with Segmented Control Inside */}
            <Card className="p-0 max-w-3xl mx-auto mb-6 overflow-hidden">
              {/* Segmented Control - Inside Card Header */}
              <div className="bg-white px-6 pt-6 pb-4 border-b border-slate-100 flex justify-center">
                <div
                  className="inline-flex p-1 bg-white rounded-lg"
                  style={{
                    boxShadow:
                    '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)'
                  }}>

                  <button
                    onClick={() => setActiveTab('analyze')}
                    className={`px-4 py-2.5 text-sm font-medium rounded-md transition-all relative whitespace-nowrap ${activeTab === 'analyze' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>

                    {activeTab === 'analyze' &&
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-slate-100 rounded-md"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6
                      }} />

                    }
                    <span className="relative z-10">Analyze Assignment</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('search')}
                    className={`px-4 py-2.5 text-sm font-medium rounded-md transition-all relative whitespace-nowrap ${activeTab === 'search' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>

                    {activeTab === 'search' &&
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-slate-100 rounded-md"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6
                      }} />

                    }
                    <span className="relative z-10">Search Reports</span>
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'analyze' ?
                  <motion.div
                    key="analyze"
                    initial={{
                      opacity: 0,
                      y: 10
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
                      duration: 0.2
                    }}>

                      <Textarea
                      placeholder="Paste your assignment instructions here..."
                      value={assignmentText}
                      onChange={(e) => setAssignmentText(e.target.value)}
                      rows={8}
                      className="mb-4" />


                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <Button
                        size="lg"
                        className="w-full sm:flex-1 group"
                        onClick={handleAnalyze}
                        disabled={!assignmentText.trim()}>

                          Analyze
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                        <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto">

                          <Upload size={16} className="mr-2" /> Upload PDF
                        </Button>
                      </div>
                    </motion.div> :

                  <motion.div
                    key="search"
                    initial={{
                      opacity: 0,
                      y: 10
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
                      duration: 0.2
                    }}>



                      <div className="relative mb-4">
                        <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        size={18} />

                        <input
                        type="text"
                        placeholder="e.g., Acme Corp, TechStart..."
                        value={companySearch}
                        onChange={(e) => setCompanySearch(e.target.value)}
                        onKeyPress={(e) =>
                        e.key === 'Enter' && handleSearch()
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />

                      </div>

                      <Button
                      size="lg"
                      onClick={handleSearch}
                      disabled={!companySearch.trim()}
                      className="w-full">

                        Search
                      </Button>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            </Card>

            <button
              onClick={() => {
                setActiveTab('analyze');
                setAssignmentText(`Create a React application that fetches data from a public API.
The user should be able to:
- Search for items
- Filter by category
- Sort by date and name
- View detailed information in a modal

Requirements:
- Use Redux for state management
- Write unit tests for all components (at least 80% coverage)
- Implement pixel-perfect design from the attached Figma
- Handle all error states and edge cases
- Add comprehensive documentation
- Deploy to Vercel

Timeline: Please return this within 48 hours.`);
              }}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors">

              Try with demo assignment
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              icon: <Zap className="h-5 w-5 text-amber-600" />,
              title: 'Instant Effort Estimation',
              desc: 'AI analyzes the requirements to give you a realistic hour estimate, not just what the recruiter claims.'
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
              title: 'Red Flag Detection',
              desc: 'Automatically spot unpaid work, vague requirements, and scope creep hidden in the instructions.'
            },
            {
              icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
              title: 'Community Benchmarks',
              desc: 'Compare against thousands of other assignments to see if the callback rate justifies the effort.'
            }].
            map((feature, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1]
              }}>

                <Card className="h-full p-8">
                  <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Trusted by 10,000+ candidates
            </h2>
            <p className="text-slate-600 text-lg">
              Stop wasting weekends on assignments that go nowhere.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              quote:
              "Saved me from a 20-hour 'take home' that was basically free consulting. The red flags were spot on.",
              author: 'Sarah J.',
              role: 'Senior Frontend Dev'
            },
            {
              quote:
              'I use this for every interview process now. If the score is below 60, I politely decline. My sanity is worth it.',
              author: 'Michael C.',
              role: 'Product Designer'
            },
            {
              quote:
              "The effort estimation is frighteningly accurate. It said 8 hours, took me 9. Recruiter said '2-3 hours'.",
              author: 'David L.',
              role: 'Full Stack Engineer'
            }].
            map((t, i) =>
            <Card key={i} className="p-7 bg-white">
                <p className="text-slate-700 mb-6 leading-relaxed text-[15px]">
                  "{t.quote}"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-600 font-semibold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-900">
                      {t.author}
                    </p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-white/50 py-12 mt-auto"
        style={{
          boxShadow: '0 -1px 0 0 rgba(0, 0, 0, 0.05)'
        }}>

        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-6 w-6 bg-slate-900 rounded-md"></div>
            <span className="font-semibold text-lg">TaskStage</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>);

}