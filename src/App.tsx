import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { CompanyRole } from './pages/CompanyRole';
import { Analyze } from './pages/Analyze';
import { Results } from './pages/Results';
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { Practice } from './pages/Practice';
import { PracticeDetail } from './pages/PracticeDetail';
import { Pricing } from './pages/Pricing';
import { AuthModal } from './components/AuthModal';
import { Button } from './components/Button';
import { Menu, X } from 'lucide-react';
function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${isLanding ? 'bg-white/80 backdrop-blur-md border-b border-slate-100' : 'bg-white border-b border-slate-200'}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <div className="h-6 w-6 bg-slate-900 rounded-md"></div>
            TaskStage
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/reports" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Reports
            </Link>
            <Link to="/practice" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Practice
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Dashboard
            </Link>
            <div className="h-4 w-px bg-slate-200"></div>
            <button onClick={() => setIsAuthOpen(true)} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Log in
            </button>
            <Link to="/">
              <Button size="sm">Analyze New</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-lg">
            <Link to="/reports" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Reports
            </Link>
            <Link to="/practice" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Practice
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Dashboard
            </Link>
            <hr className="border-slate-100" />
            <button onClick={() => {
          setIsAuthOpen(true);
          setIsMobileMenuOpen(false);
        }} className="text-sm font-medium text-slate-600 py-2 text-left">
              Log in
            </button>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Analyze New</Button>
            </Link>
          </div>}
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>;
}
export function App() {
  return <Router>
      <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/company-role" element={<CompanyRole />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/results/:id" element={<Results />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:id" element={<PracticeDetail />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>;
}