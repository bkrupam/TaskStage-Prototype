import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Briefcase } from 'lucide-react';
interface RoleOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: string) => void;
}
const POPULAR_ROLES = [
{
  name: 'Frontend Engineer',
  icon: '💻'
},
{
  name: 'Backend Engineer',
  icon: '⚙️'
},
{
  name: 'Full Stack Engineer',
  icon: '🔧'
},
{
  name: 'Product Designer',
  icon: '🎨'
},
{
  name: 'Data Scientist',
  icon: '📊'
},
{
  name: 'iOS Developer',
  icon: '📱'
},
{
  name: 'Android Developer',
  icon: '🤖'
},
{
  name: 'DevOps Engineer',
  icon: '🚀'
},
{
  name: 'Product Manager',
  icon: '📋'
},
{
  name: 'Marketing Manager',
  icon: '📢'
}];

export function RoleOnboardingModal({
  isOpen,
  onClose,
  onRoleSelect
}: RoleOnboardingModalProps) {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
      onClose();
    }
  };
  const handleSkip = () => {
    onRoleSelect('All Roles');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleSkip}
      title="What role are you exploring?"
      maxWidth="max-w-2xl">

      <div className="space-y-6">
        <div className="text-center">
          <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="h-6 w-6 text-slate-600" />
          </div>
          <p className="text-slate-600">
            We'll personalize your feed to show assignments relevant to your
            role.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {POPULAR_ROLES.map((role) =>
          <button
            key={role.name}
            onClick={() => setSelectedRole(role.name)}
            className={`p-4 rounded-lg text-left transition-all ${selectedRole === role.name ? 'bg-slate-900 text-white ring-2 ring-slate-900' : 'bg-slate-50 hover:bg-slate-100 text-slate-700'}`}>

              <div className="text-2xl mb-2">{role.icon}</div>
              <div className="font-medium text-sm">{role.name}</div>
            </button>
          )}
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="ghost" onClick={handleSkip} className="flex-1">
            Skip for now
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!selectedRole}
            className="flex-1">

            Continue
          </Button>
        </div>
      </div>
    </Modal>);

}