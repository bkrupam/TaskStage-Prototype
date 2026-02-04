import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Search, Filter } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
const savedAssignments = [
{
  id: 1,
  company: 'TechCorp Inc.',
  role: 'Senior Frontend Engineer',
  score: 42,
  verdict: 'Avoid',
  date: '2 days ago',
  status: 'analyzed'
},
{
  id: 2,
  company: 'StartupFlow',
  role: 'Product Designer',
  score: 88,
  verdict: 'Worth it',
  date: '1 week ago',
  status: 'analyzed'
},
{
  id: 3,
  company: 'DataSystems',
  role: 'Full Stack Dev',
  score: 65,
  verdict: 'Mid',
  date: '2 weeks ago',
  status: 'analyzed'
}];

export function Dashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500">
            Manage your saved assignments and reports.
          </p>
        </div>
        <Link to="/analyze">
          <Button>
            <Plus size={16} className="mr-2" /> New Analysis
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16} />

          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            style={{
              boxShadow:
              '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)'
            }} />

        </div>
        <Button variant="secondary" className="hidden md:flex">
          <Filter size={16} className="mr-2" /> Filter
        </Button>
      </div>

      {/* Table */}
      <div
        className="bg-white rounded-xl overflow-hidden"
        style={{
          boxShadow:
          '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)'
        }}>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead
              className="bg-slate-50 text-slate-500 font-medium"
              style={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
              }}>

              <tr>
                <th className="px-6 py-4">Company & Role</th>
                <th className="px-6 py-4">Score</th>
                <th className="px-6 py-4">Verdict</th>
                <th className="px-6 py-4">Date Saved</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {savedAssignments.map((item) =>
              <tr
                key={item.id}
                className="hover:bg-slate-50 transition-colors group">

                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">
                      {item.company}
                    </div>
                    <div className="text-slate-500 text-xs">{item.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${item.score >= 70 ? 'bg-emerald-100 text-emerald-700' : item.score >= 40 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>

                        {item.score}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                    variant={
                    item.verdict === 'Worth it' ?
                    'success' :
                    item.verdict === 'Mid' ?
                    'warning' :
                    'danger'
                    }>

                      {item.verdict}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{item.date}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/results/${item.id}`}>
                      <Button variant="ghost" size="sm">
                        View Analysis
                      </Button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {savedAssignments.length === 0 &&
        <div className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-slate-300" size={24} />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-1">
              No assignments yet
            </h3>
            <p className="text-slate-500 mb-6">
              Analyze your first assignment to see it here.
            </p>
            <Link to="/analyze">
              <Button>Start Analysis</Button>
            </Link>
          </div>
        }
      </div>
    </motion.div>);

}