import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Building2,
  TrendingDown,
  TrendingUp,
  Clock,
  BarChart3,
  AlertCircle,
  Shield,
  AlertTriangle,
  BookOpen,
  Users,
  Flame,
  ArrowUp,
  ArrowDown } from
'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
const companyReports = {
  techcorp: {
    name: 'TechCorp Inc.',
    stats: {
      callbackRate: 12,
      avgCallbackRate: 34,
      avgTimeSpent: 14.5,
      totalReports: 42
    },
    assignments: [
    {
      id: 101,
      role: 'Frontend Engineer',
      score: 35,
      verdict: 'Avoid',
      effort: '20h+',
      redFlags: ['Excessive Scope', 'Production Ready Req'],
      companyVisible: true
    },
    {
      id: 108,
      role: 'Senior Frontend Engineer',
      score: 42,
      verdict: 'Avoid',
      effort: '12-16h',
      redFlags: ['Vague Requirements', 'Unpaid Work'],
      companyVisible: true
    }]

  },
  shopflow: {
    name: 'ShopFlow Inc.',
    stats: {
      callbackRate: 45,
      avgCallbackRate: 34,
      avgTimeSpent: 6.2,
      totalReports: 8
    },
    assignments: [
    {
      id: 102,
      role: 'Product Designer',
      score: 82,
      verdict: 'Worth it',
      effort: '4-6h',
      redFlags: [],
      companyVisible: true
    }]

  }
};
// Mock data for community insights
const mostReportedCompanies = [
{
  name: 'TechCorp Inc.',
  reports: 42,
  callbackRate: 12,
  avgTime: 14.5,
  trending: true
},
{
  name: 'DataFlow Systems',
  reports: 38,
  callbackRate: 28,
  avgTime: 10.2,
  trending: true
},
{
  name: 'CloudBase Inc.',
  reports: 31,
  callbackRate: 45,
  avgTime: 6.8,
  trending: false
},
{
  name: 'StartupX',
  reports: 24,
  callbackRate: 18,
  avgTime: 12.0,
  trending: false
}];

const safestCompanies = [
{
  name: 'ShopFlow Inc.',
  avgScore: 82,
  callbackRate: 45,
  avgTime: 6.2,
  reports: 8
},
{
  name: 'DesignCo',
  avgScore: 78,
  callbackRate: 52,
  avgTime: 5.5,
  reports: 15
},
{
  name: 'BuildRight',
  avgScore: 75,
  callbackRate: 48,
  avgTime: 7.0,
  reports: 12
}];

const highRiskCompanies = [
{
  name: 'TechCorp Inc.',
  callbackRate: 12,
  avgTime: 14.5,
  redFlags: 3,
  reports: 42
},
{
  name: 'CodeFactory',
  callbackRate: 8,
  avgTime: 18.2,
  redFlags: 4,
  reports: 28
},
{
  name: 'DevShop Pro',
  callbackRate: 15,
  avgTime: 16.0,
  redFlags: 3,
  reports: 19
}];

const roleBreakdown = [
{
  role: 'Frontend',
  percentage: 32,
  count: 156
},
{
  role: 'Backend',
  percentage: 24,
  count: 117
},
{
  role: 'Product Design',
  percentage: 18,
  count: 88
},
{
  role: 'Full Stack',
  percentage: 14,
  count: 68
},
{
  role: 'Data',
  percentage: 8,
  count: 39
},
{
  role: 'PM',
  percentage: 4,
  count: 19
}];

const communityTrends = {
  newCompanies: {
    value: 23,
    trend: 'up',
    change: 12
  },
  newAssignments: {
    value: 147,
    trend: 'up',
    change: 8
  },
  avgCallback: {
    value: 34,
    trend: 'down',
    change: 3
  },
  avgEffort: {
    value: 9.2,
    trend: 'up',
    change: 5
  }
};
const practiceAssignments = [
{
  id: 102,
  role: 'Product Designer',
  excerpt:
  'Redesign our checkout flow to improve conversion. Deliverables: High-fidelity Figma prototypes...',
  company: 'ShopFlow Inc.',
  companyVisible: true,
  score: 82
},
{
  id: 103,
  role: 'Backend Engineer',
  excerpt:
  'Create a REST API for a library management system. Include authentication, rate limiting...',
  company: null,
  companyVisible: false,
  score: 65
},
{
  id: 105,
  role: 'iOS Developer',
  excerpt:
  'Build a weather app using SwiftUI that consumes a public API. Must include unit tests...',
  company: 'WeatherTech',
  companyVisible: true,
  score: 78
}];

export function Reports() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('company') || ''
  );
  const [activeSearch, setActiveSearch] = useState(
    searchParams.get('company') || ''
  );
  useEffect(() => {
    const company = searchParams.get('company');
    if (company) {
      setSearchQuery(company);
      setActiveSearch(company);
    }
  }, [searchParams]);
  const handleSearch = () => {
    setActiveSearch(searchQuery);
  };
  const companyKey = activeSearch.
  toLowerCase().
  replace(/\s+/g, '').
  replace(/inc\.|corp\.|ltd\./gi, '');
  const companyData = companyReports[companyKey as keyof typeof companyReports];
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
      className="min-h-screen pt-24 pb-32 px-4 max-w-7xl mx-auto">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Company Reports
        </h1>
        <p className="text-slate-600">
          Community insights about hiring assignments across companies and
          roles.
        </p>
      </div>

      {/* Community Insights Dashboard - Only show when no active search */}
      {!activeSearch &&
      <div className="space-y-6 mb-16">
          {/* Community Trends */}
          <Card className="p-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <BarChart3 size={20} className="text-slate-600" />
              Community Trends (Last 30 Days)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-slate-600">
                    New Companies
                  </p>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <ArrowUp size={14} />
                    <span className="text-xs font-medium">
                      {communityTrends.newCompanies.change}%
                    </span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900">
                  {communityTrends.newCompanies.value}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-slate-600">
                    New Assignments
                  </p>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <ArrowUp size={14} />
                    <span className="text-xs font-medium">
                      {communityTrends.newAssignments.change}%
                    </span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900">
                  {communityTrends.newAssignments.value}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-slate-600">
                    Avg Callback
                  </p>
                  <div className="flex items-center gap-1 text-rose-600">
                    <ArrowDown size={14} />
                    <span className="text-xs font-medium">
                      {communityTrends.avgCallback.change}%
                    </span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900">
                  {communityTrends.avgCallback.value}%
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-slate-600">
                    Avg Effort
                  </p>
                  <div className="flex items-center gap-1 text-amber-600">
                    <ArrowUp size={14} />
                    <span className="text-xs font-medium">
                      {communityTrends.avgEffort.change}%
                    </span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900">
                  {communityTrends.avgEffort.value}h
                </p>
              </div>
            </div>
          </Card>

          {/* Most Reported Companies */}
          <Card className="p-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Flame size={20} className="text-slate-600" />
              Most Reported Companies
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mostReportedCompanies.map((company, i) =>
            <div key={i} className="p-5 bg-slate-50 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {company.name}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {company.reports} reports
                        </p>
                      </div>
                    </div>
                    {company.trending &&
                <Badge variant="warning">
                        <Flame size={12} className="mr-1" /> Trending
                      </Badge>
                }
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 mb-1">Callback Rate</p>
                      <p className="font-semibold text-slate-900">
                        {company.callbackRate}%
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">Avg Time</p>
                      <p className="font-semibold text-slate-900">
                        {company.avgTime}h
                      </p>
                    </div>
                  </div>
                </div>
            )}
            </div>
          </Card>

          {/* Two Column Layout: Safest & High-Risk */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Safest Companies */}
            <Card className="p-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Shield size={20} className="text-emerald-600" />
                Safest Companies
              </h2>
              <div className="space-y-3">
                {safestCompanies.map((company, i) =>
              <div key={i} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {company.name}
                        </h3>
                        <Badge variant="success" className="text-xs">
                          Generally Fair
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-emerald-600">
                          {company.avgScore}
                        </p>
                        <p className="text-xs text-slate-500">avg score</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-slate-600">
                      <span>{company.callbackRate}% callback</span>
                      <span>·</span>
                      <span>{company.avgTime}h avg</span>
                      <span>·</span>
                      <span>{company.reports} reports</span>
                    </div>
                  </div>
              )}
              </div>
            </Card>

            {/* High-Risk Companies */}
            <Card className="p-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-600" />
                Community Concern Signals
              </h2>
              <div className="space-y-3">
                {highRiskCompanies.map((company, i) =>
              <div key={i} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          {company.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="warning" className="text-xs">
                            Low Callback Confidence
                          </Badge>
                          <Badge variant="danger" className="text-xs">
                            High Effort Load
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-slate-600">
                      <span>{company.callbackRate}% callback</span>
                      <span>·</span>
                      <span>{company.avgTime}h avg</span>
                      <span>·</span>
                      <span>{company.reports} reports</span>
                    </div>
                  </div>
              )}
              </div>
            </Card>
          </div>

          {/* Role Breakdown - Redesigned without progress bars */}
          <Card className="p-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Users size={20} className="text-slate-600" />
              Role Breakdown
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {roleBreakdown.map((role, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="p-5 bg-slate-50 rounded-lg">

                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {role.role}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {role.count} assignments
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-900">
                        {role.percentage}%
                      </p>
                    </div>
                  </div>
                </motion.div>
            )}
            </div>
          </Card>

          {/* Most Practised Assignments */}
          <Card className="p-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-slate-600" />
              Most Practised Assignments
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {practiceAssignments.map((assignment) =>
            <Link key={assignment.id} to={`/practice/${assignment.id}`}>
                  <div className="p-5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors h-full">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="blue" className="text-xs">
                        <BookOpen size={12} className="mr-1" /> Full Brief
                      </Badge>
                      <Badge
                    variant={assignment.score >= 70 ? 'success' : 'warning'}
                    className="text-xs">

                        {assignment.score}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {assignment.role}
                    </h3>
                    {assignment.companyVisible && assignment.company &&
                <p className="text-xs text-slate-500 mb-3">
                        {assignment.company}
                      </p>
                }
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {assignment.excerpt}
                    </p>
                  </div>
                </Link>
            )}
            </div>
          </Card>
        </div>
      }

      {/* Search Results */}
      {activeSearch &&
      <div className="space-y-8">
          {companyData ?
        <>
              {/* Company Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {companyData.name}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {companyData.stats.totalReports} community reports
                  </p>
                </div>
              </div>

              {/* Community Stats */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-lg">
                    <TrendingDown size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      Callback Rate
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {companyData.stats.callbackRate}%
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      vs {companyData.stats.avgCallbackRate}% avg
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
                    <p className="text-2xl font-bold text-slate-900">
                      {companyData.stats.avgTimeSpent}h
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Per assignment
                    </p>
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
                    <p className="text-2xl font-bold text-slate-900">
                      {companyData.stats.totalReports}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Community insights
                    </p>
                  </div>
                </Card>
              </div>

              {/* Assignment Reports */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Recent Assignments
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {companyData.assignments.map((assignment) =>
              <Link key={assignment.id} to={`/results/${assignment.id}`}>
                      <Card hoverEffect className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <Badge
                      variant={
                      assignment.score >= 70 ?
                      'success' :
                      assignment.score >= 40 ?
                      'warning' :
                      'danger'
                      }>

                            Score: {assignment.score}
                          </Badge>
                          <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                            {assignment.effort}
                          </span>
                        </div>

                        <h4 className="font-semibold text-slate-900 mb-3">
                          {assignment.role}
                        </h4>

                        {assignment.redFlags.length > 0 &&
                  <div className="flex flex-wrap gap-2">
                            {assignment.redFlags.map((flag, i) =>
                    <Badge
                      key={i}
                      variant="danger"
                      className="text-xs">

                                {flag}
                              </Badge>
                    )}
                          </div>
                  }
                      </Card>
                    </Link>
              )}
                </div>
              </div>
            </> /* Empty State */ :

        <Card className="p-12 text-center">
              <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                No reports found for "{activeSearch}"
              </h3>
              <p className="text-slate-600 mb-6">
                Did you receive an assignment from them?
              </p>
              <Link to="/">
                <Button>Report an Assignment</Button>
              </Link>
            </Card>
        }
        </div>
      }

      {/* Floating Search Action Bar */}
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
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18} />

                <input
                  type="text"
                  placeholder="Search for a company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10 pr-4 py-3 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-80 border-0"
                  style={{
                    borderRadius: '16px'
                  }} />

              </div>
              <Button
                onClick={handleSearch}
                disabled={!searchQuery.trim()}
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 whitespace-nowrap"
                style={{
                  borderRadius: '16px'
                }}>

                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>);

}