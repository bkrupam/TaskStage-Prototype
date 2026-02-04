import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  Users,
  Sparkles,
  BookOpen } from
'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { RoleSelector } from '../components/RoleSelector';
import { RoleOnboardingModal } from '../components/RoleOnboardingModal';
const publicAssignments = [
{
  id: 101,
  role: 'Frontend Engineer',
  category: 'Frontend',
  excerpt:
  'Build a Trello clone with drag and drop functionality, optimistic UI updates, and offline support...',
  score: 35,
  effort: '20h+',
  reports: 12,
  callback: '8%',
  hasFullBrief: false
},
{
  id: 102,
  role: 'Product Designer',
  category: 'Design',
  excerpt:
  'Redesign our checkout flow to improve conversion. Deliverables: High-fidelity Figma prototypes and a Loom video...',
  score: 82,
  effort: '4-6h',
  reports: 8,
  callback: '45%',
  hasFullBrief: true
},
{
  id: 103,
  role: 'Backend Engineer',
  category: 'Backend',
  excerpt:
  'Create a REST API for a library management system. Include authentication, rate limiting, and Docker setup...',
  score: 65,
  effort: '8-10h',
  reports: 24,
  callback: '22%',
  hasFullBrief: true
},
{
  id: 104,
  role: 'Marketing Manager',
  category: 'Marketing',
  excerpt:
  'Create a 3-month go-to-market strategy for our new product launch. Include budget allocation and channel mix...',
  score: 45,
  effort: '12h+',
  reports: 5,
  callback: '15%',
  hasFullBrief: false
},
{
  id: 105,
  role: 'iOS Developer',
  category: 'Mobile',
  excerpt:
  'Build a weather app using SwiftUI that consumes a public API. Must include unit tests and proper error handling...',
  score: 78,
  effort: '6-8h',
  reports: 15,
  callback: '38%',
  hasFullBrief: true
},
{
  id: 106,
  role: 'Data Scientist',
  category: 'Data',
  excerpt:
  'Analyze this dataset of 1M records, clean the data, and build a predictive model for customer churn...',
  score: 55,
  effort: '10-12h',
  reports: 9,
  callback: '18%',
  hasFullBrief: false
},
{
  id: 107,
  role: 'Full Stack Engineer',
  category: 'Full Stack',
  excerpt:
  'Build a real-time chat application with React, Node.js, and WebSockets. Include user authentication and message persistence...',
  score: 48,
  effort: '16-20h',
  reports: 18,
  callback: '14%',
  hasFullBrief: true
},
{
  id: 108,
  role: 'Frontend Engineer',
  category: 'Frontend',
  excerpt:
  'Create a dashboard with multiple chart types using D3.js. Must be responsive and support dark mode...',
  score: 72,
  effort: '8-10h',
  reports: 22,
  callback: '28%',
  hasFullBrief: false
},
{
  id: 109,
  role: 'Product Designer',
  category: 'Design',
  excerpt:
  'Design a mobile app onboarding flow. Include user research findings, wireframes, and high-fidelity mockups...',
  score: 88,
  effort: '6-8h',
  reports: 14,
  callback: '52%',
  hasFullBrief: true
},
{
  id: 110,
  role: 'DevOps Engineer',
  category: 'DevOps',
  excerpt:
  'Set up a CI/CD pipeline with automated testing and deployment. Include infrastructure as code using Terraform...',
  score: 58,
  effort: '12-14h',
  reports: 11,
  callback: '19%',
  hasFullBrief: false
}];

export function Explore() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setSelectedRole(savedRole);
    } else {
      setShowOnboarding(true);
    }
  }, []);
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    localStorage.setItem('userRole', role);
  };
  const filteredAssignments = publicAssignments.filter((assignment) => {
    const matchesRole =
    selectedRole === 'All Roles' ||
    !selectedRole ||
    assignment.role.includes(selectedRole);
    const matchesSearch =
    !searchQuery ||
    assignment.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assignment.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });
  const assignmentCount = filteredAssignments.length;
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
      className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Explore Community Insights
        </h1>
        <p className="text-slate-600">
          Browse thousands of analyzed assignments. See what companies are
          asking for and avoid the red flags others have found.
        </p>
      </div>

      {/* Role Filter & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600">
            Showing for:
          </span>
          <RoleSelector
            selectedRole={selectedRole || 'All Roles'}
            onRoleChange={handleRoleSelect} />

        </div>

        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18} />

          <input
            type="text"
            placeholder="Search by role, skill, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            style={{
              boxShadow:
              '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)'
            }} />

        </div>
        <Button variant="secondary" className="px-6">
          <SlidersHorizontal size={18} className="mr-2" /> Filters
        </Button>
      </div>

      {/* Personalization Banner */}
      {selectedRole && selectedRole !== 'All Roles' &&
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="mb-6 p-4 bg-blue-50 rounded-lg flex items-start gap-3"
        style={{
          boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.1)'
        }}>

          <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-blue-900">
              <span className="font-medium">
                Personalized for {selectedRole}
              </span>
              <span className="text-blue-700">
                {' '}
                · Showing {assignmentCount} relevant{' '}
                {assignmentCount === 1 ? 'assignment' : 'assignments'}
              </span>
            </p>
          </div>
          <button
          onClick={() => handleRoleSelect('All Roles')}
          className="text-xs text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap">

            View all
          </button>
        </motion.div>
      }

      {/* Grid */}
      {filteredAssignments.length > 0 ?
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssignments.map((item, index) =>
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }}>

              <Link
            to={
            item.hasFullBrief ?
            `/practice/${item.id}` :
            `/results/${item.id}`
            }>

                <Card hoverEffect className="h-full p-6 flex flex-col group">
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                  variant={
                  item.score >= 70 ?
                  'success' :
                  item.score >= 40 ?
                  'warning' :
                  'danger'
                  }>

                      Score: {item.score}
                    </Badge>
                    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                      {item.effort}
                    </span>
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                    "{item.excerpt}"
                  </p>

                  {item.hasFullBrief &&
              <div className="mb-4">
                      <Badge variant="blue" className="text-xs">
                        <BookOpen size={12} className="mr-1" /> Full Brief
                        Available
                      </Badge>
                    </div>
              }

                  <div
                className="flex items-center justify-between pt-4 border-t text-xs text-slate-500"
                style={{
                  borderColor: 'rgba(0, 0, 0, 0.05)'
                }}>

                    <div className="flex items-center gap-1">
                      <Users size={14} /> {item.reports} reports
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-slate-700">
                        {item.callback}
                      </span>{' '}
                      callback
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
        )}
        </div> :

      <div className="text-center py-16">
          <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            No assignments found
          </h3>
          <p className="text-slate-600 mb-6">
            Try adjusting your filters or search query.
          </p>
          <Button
          variant="secondary"
          onClick={() => {
            setSearchQuery('');
            setSelectedRole('All Roles');
          }}>

            Clear filters
          </Button>
        </div>
      }

      {filteredAssignments.length > 0 &&
      <div className="mt-12 text-center">
          <Button variant="secondary" size="lg">
            Load More Assignments
          </Button>
        </div>
      }

      <RoleOnboardingModal
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        onRoleSelect={handleRoleSelect} />

    </motion.div>);

}