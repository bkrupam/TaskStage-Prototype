import React, { useState } from 'react';
import { Modal } from './Modal';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';
import { Check } from 'lucide-react';
interface ReportOutcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
export function ReportOutcomeModal({
  isOpen,
  onClose,
  onSuccess
}: ReportOutcomeModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [callback, setCallback] = useState<'yes' | 'no' | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
      onClose();
    }, 1500);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Report Outcome">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700 block">
            Did you receive a callback?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setCallback('yes')}
              className={`flex items-center justify-center px-4 py-3 border rounded-lg transition-all ${callback === 'yes' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 ring-1 ring-emerald-500' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>

              {callback === 'yes' && <Check size={16} className="mr-2" />}
              Yes, I did
            </button>
            <button
              type="button"
              onClick={() => setCallback('no')}
              className={`flex items-center justify-center px-4 py-3 border rounded-lg transition-all ${callback === 'no' ? 'bg-rose-50 border-rose-200 text-rose-700 ring-1 ring-rose-500' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>

              {callback === 'no' && <Check size={16} className="mr-2" />}
              No / Ghosted
            </button>
          </div>
        </div>

        <Input
          label="How many hours did you spend?"
          type="number"
          placeholder="e.g. 12"
          min="0"
          required />


        <Textarea
          label="Notes (optional)"
          placeholder="Any details about the process, feedback received, etc."
          rows={3} />


        <div className="pt-2">
          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
            disabled={!callback}>

            Submit Report
          </Button>
        </div>
      </form>
    </Modal>);

}