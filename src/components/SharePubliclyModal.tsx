import React, { useState } from 'react';
import { Modal } from './Modal';
import { Toggle } from './Toggle';
import { Button } from './Button';
import { Info } from 'lucide-react';
interface SharePubliclyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
export function SharePubliclyModal({
  isOpen,
  onClose,
  onSuccess
}: SharePubliclyModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [makePublicPractice, setMakePublicPractice] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const handlePublish = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
      onClose();
    }, 1500);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Publish to Community">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between py-3 border-b border-slate-100">
            <div className="flex-1 pr-4">
              <div className="font-medium text-slate-900 mb-1">
                Publish to Company Reports
              </div>
              <div className="text-sm text-slate-500">
                Share your analysis score and insights with the community
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />

            </div>
          </div>

          <div className="flex items-start justify-between py-3 border-b border-slate-100">
            <div className="flex-1 pr-4">
              <div className="font-medium text-slate-900 mb-1">
                Make the full assignment brief visible to everyone
              </div>
              <div className="text-sm text-slate-500">
                Add to Practice section so others can use it for learning
              </div>
            </div>
            <Toggle
              checked={makePublicPractice}
              onChange={setMakePublicPractice} />

          </div>

          <div className="flex items-start justify-between py-3">
            <div className="flex-1 pr-4">
              <div className="font-medium text-slate-900 mb-1">
                Show company name publicly
              </div>
              <div className="text-sm text-slate-500">
                Display which company this assignment is from
              </div>
            </div>
            <Toggle checked={showCompany} onChange={setShowCompany} />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
          <Info className="text-blue-600 flex-shrink-0" size={20} />
          <div className="text-sm text-blue-800">
            <p>
              We automatically redact emails, phone numbers, and domains before
              publishing.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Button
            onClick={handlePublish}
            className="w-full"
            isLoading={isLoading}>

            Publish to Community
          </Button>
        </div>
      </div>
    </Modal>);

}