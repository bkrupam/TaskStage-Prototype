import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, BookOpen, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { RoleSelector } from '../components/RoleSelector';
const practiceAssignments = [
{
  id: 102,
  role: 'Product Designer',
  excerpt:
  'Redesign our checkout flow to improve conversion. Deliverables: High-fidelity Figma prototypes and a Loom video walkthrough explaining your design decisions...',
  score: 82,
  effort: '4-6h',
  reports: 8,
  callback: '45%',
  companyVisible: true,
  company: 'ShopFlow Inc.',
  hasFullBrief: true
},
{
  id: 103,
  role: 'Backend Engineer',
  excerpt:
  'Create a REST API for a library management system. Include authentication, rate limiting, and Docker setup. Must follow RESTful conventions...',
  score: 65,
  effort: '8-10h',
  reports: 24,
  callback: '22%',
  companyVisible: false,
  company: null,
  hasFullBrief: true
},
{
  id: 105,
  role: 'iOS Developer',
  excerpt:
  'Build a weather app using SwiftUI that consumes a public API. Must include unit tests and proper error handling. Support dark mode and accessibility features...',
  score: 78,
  effort: '6-8h',
  reports: 15,
  callback: '38%',
  companyVisible: true,
  company: 'WeatherTech',
  hasFullBrief: true
},
{
  id: 107,
  role: 'Full Stack Engineer',
  excerpt:
  'Build a real-time chat application with React, Node.js, and WebSockets. Include user authentication and message persistence. Deploy to a cloud provider...',
  score: 48,
  effort: '16-20h',
  reports: 18,
  callback: '14%',
  companyVisible: false,
  company: null,
  hasFullBrief: true
},
{
  id: 109,
  role: 'Product Designer',
  excerpt:
  'Design a mobile app onboarding flow. Include user research findings, wireframes, and high-fidelity mockups. Present your work in a case study format...',
  score: 88,
  effort: '6-8h',
  reports: 14,
  callback: '52%',
  companyVisible: true,
  company: 'MobileFirst',
  hasFullBrief: true
}];

export function Practice() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setSelectedRole(savedRole);
    }
  }, []);
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    localStorage.setItem('userRole', role);
  };
  // Only show assignments where hasFullBrief is true
  const filteredAssignments = practiceAssignments.filter((assignment) => {
    if (!assignment.hasFullBrief) return false;
    const matchesRole =
    selectedRole === 'All Roles' ||
    !selectedRole ||
    assignment.role.includes(selectedRole);
    const matchesSearch =
    !searchQuery ||
    assignment.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assignment.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assignment.companyVisible &&
    assignment.company?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });
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
        <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-50 rounded-full mb-4">
          <BookOpen className="h-6 w-6 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Practice Assignments
        </h1>
        <p className="text-slate-600">
          Real assignments shared by the community. Practice your skills with
          full briefs and compare your approach.
        </p>
      </div>

      {/* Role Filter & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600">
            Filter by role:
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
            placeholder="Search practice assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            style={{
              boxShadow:
              '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)'
            }} />

        </div>
      </div>

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

              <Link to={`/practice/${item.id}`}>
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
                    <Badge variant="blue" className="text-xs">
                      <BookOpen size={12} className="mr-1" /> Full Brief
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.role}
                  </h3>

                  {item.companyVisible && item.company &&
              <p className="text-xs text-slate-500 mb-3">
                      {item.company}
                    </p>
              }

                  <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-1">
                    {item.excerpt.substring(0, 200)}...
                  </p>

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
            No practice assignments found
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
    </motion.div>);

}