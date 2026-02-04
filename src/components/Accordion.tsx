import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}
interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | undefined>(defaultOpenId);
  const toggle = (id: string) => {
    setOpenId(openId === id ? undefined : id);
  };
  return (
    <div className="space-y-3">
      {items.map((item) =>
      <div
        key={item.id}
        className={`border rounded-lg overflow-hidden transition-colors duration-200 ${openId === item.id ? 'border-slate-300 bg-slate-50/50' : 'border-slate-200 bg-white'}`}>

          <button
          onClick={() => toggle(item.id)}
          className="flex items-center justify-between w-full px-5 py-4 text-left focus:outline-none">

            <span className="font-medium text-slate-900">{item.title}</span>
            <motion.div
            animate={{
              rotate: openId === item.id ? 180 : 0
            }}
            transition={{
              duration: 0.2
            }}>

              <ChevronDown size={18} className="text-slate-400" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openId === item.id &&
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              duration: 0.2
            }}>

                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {item.content}
                </div>
              </motion.div>
          }
          </AnimatePresence>
        </div>
      )}
    </div>);

}