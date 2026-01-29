// src/components/customer/BranchSelector.tsx - Glassmorphism Design

import type { Branch } from '../../types';

interface BranchSelectorProps {
  branches: Branch[];
  selectedBranch: string;
  onBranchChange: (branchId: string) => void;
  loading?: boolean;
}

export function BranchSelector({
  branches,
  selectedBranch,
  onBranchChange,
  loading = false,
}: BranchSelectorProps) {
  return (
    <div className="glass-card p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Label with Icon */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-600/20 flex items-center justify-center border border-blue-400/20">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <span className="text-offwhite font-semibold">Select Branch</span>
            <p className="text-secondary/60 text-sm">Choose your nearest location</p>
          </div>
        </div>

        {/* Select Dropdown */}
        <div className="flex-1 md:max-w-sm">
          <div className="relative">
            <select
              value={selectedBranch}
              onChange={(e) => onBranchChange(e.target.value)}
              disabled={loading}
              className="w-full glass-input appearance-none cursor-pointer pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" className="bg-primary text-offwhite">Choose a branch</option>
              {branches.map((branch) => (
                <option
                  key={branch._id}
                  value={branch._id}
                  className="bg-primary text-offwhite"
                >
                  {branch.name} - {branch.location}
                </option>
              ))}
            </select>
            {/* Custom Arrow */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Branch Count Badge */}
        <div className="glass-badge">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {branches.length} locations
        </div>
      </div>
    </div>
  );
}
