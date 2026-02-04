import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Building2, Eye } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
export function PracticeDetail() {
  const { id } = useParams();
  // Mock data - in real app this would come from API
  const assignment = {
    id: 102,
    role: 'Product Designer',
    company: 'ShopFlow Inc.',
    companyVisible: true,
    score: 82,
    effort: '4-6h',
    fullBrief: `Design Challenge: Checkout Flow Redesign

Background:
Our current checkout process has a 68% abandonment rate. We need to redesign the flow to improve conversion while maintaining trust and security.

Your Task:
Redesign our checkout flow from cart to order confirmation. Focus on:
- Reducing friction and steps
- Building trust (security badges, clear pricing)
- Mobile-first approach
- Accessibility (WCAG AA)

Deliverables:
1. High-fidelity Figma prototypes (desktop + mobile)
2. 5-minute Loom video walkthrough
3. Brief written rationale (1-2 pages)

Requirements:
- Support guest checkout and account creation
- Include address validation
- Show multiple payment methods
- Handle error states gracefully
- Consider international users

Timeline: 5 days

Evaluation Criteria:
- User experience and flow logic
- Visual design quality
- Attention to edge cases
- Communication clarity

Contact: hiring@[REDACTED].com
Submit via: [REDACTED]/submissions`
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
      className="min-h-screen pt-20 pb-12 bg-slate-50/50">

      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/practice"
          className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors group">

          <ChevronLeft
            size={16}
            className="mr-1 transition-transform group-hover:-translate-x-0.5" />
          {' '}
          Back to practice
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
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
            <span className="text-sm text-slate-500">·</span>
            <span className="text-sm text-slate-500">
              {assignment.effort} estimated
            </span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {assignment.role}
          </h1>

          {assignment.companyVisible && assignment.company ?
          <div className="flex items-center gap-2 text-slate-600">
              <Building2 size={16} />
              <span>{assignment.company}</span>
            </div> :

          <div className="flex items-center gap-2 text-slate-500">
              <Eye size={16} className="opacity-50" />
              <span className="italic">Company hidden</span>
            </div>
          }
        </div>

        {/* Full Brief */}
        <Card className="p-8 mb-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Full Assignment Brief
          </h2>
          <div className="prose prose-slate max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed text-[15px]">
              {assignment.fullBrief}
            </pre>
          </div>
        </Card>

        {/* Footer Note */}
        <p className="text-sm text-center text-slate-500">
          Shared by the community for practice.
        </p>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <Link to={`/results/${assignment.id}`} className="flex-1">
            <Button variant="secondary" className="w-full">
              View Full Analysis
            </Button>
          </Link>
          <Button variant="primary" className="flex-1">
            Start Practice Session
          </Button>
        </div>
      </div>
    </motion.div>);

}