import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
export function Pricing() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen pt-24 pb-12 px-4">

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-slate-600 text-lg">
          Invest in your career, not in wasted time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Free Tier */}
        <Card className="p-8 border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Free</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-slate-900">$0</span>
            <span className="text-slate-500 ml-2">/month</span>
          </div>
          <p className="text-slate-600 mb-8 text-sm">
            Perfect for casual job seekers.
          </p>

          <ul className="space-y-4 mb-8">
            {[
            '5 analyses per month',
            'Basic effort estimation',
            'Red flag detection',
            'Community stats access'].
            map((feature) =>
            <li
              key={feature}
              className="flex items-start text-sm text-slate-700">

                <Check className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                {feature}
              </li>
            )}
          </ul>

          <Button variant="secondary" className="w-full">
            Current Plan
          </Button>
        </Card>

        {/* Pro Tier */}
        <Card className="p-8 border-blue-200 ring-1 ring-blue-100 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Pro</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-slate-900">$12</span>
            <span className="text-slate-500 ml-2">/month</span>
          </div>
          <p className="text-slate-600 mb-8 text-sm">
            For active job hunters who value their time.
          </p>

          <ul className="space-y-4 mb-8">
            {[
            'Unlimited analyses',
            'Advanced AI insights & tips',
            'Priority processing',
            'Compare multiple offers',
            'Export reports to PDF',
            'Early access to new features'].
            map((feature) =>
            <li
              key={feature}
              className="flex items-start text-sm text-slate-700">

                <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                {feature}
              </li>
            )}
          </ul>

          <Button className="w-full">Upgrade to Pro</Button>
        </Card>
      </div>
    </motion.div>);

}