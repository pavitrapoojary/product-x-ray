import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Sparkles, Building2, ArrowRight, Grid, ArrowUpRight, Filter } from 'lucide-react';
import { CURATED_COMPANIES, CURATED_COMPANIES_METADATA } from '../../services/mockData';
import { CompanyLogo } from './CompanyLogo';

interface CompanySearchProps {
  onSelectCompany: (company: string) => void;
  initialValue?: string;
}

export const CompanySearch: React.FC<CompanySearchProps> = ({ onSelectCompany, initialValue = '' }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [viewMode, setViewMode] = useState<'search' | 'directory'>('search');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredDirectoryCompanies = useMemo(() => {
    if (activeFilter === 'all') return CURATED_COMPANIES_METADATA;
    return CURATED_COMPANIES_METADATA.filter(c => c.vertical === activeFilter);
  }, [activeFilter]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter list based on case-insensitive match against CURATED_COMPANIES
  const filteredCompanies = useMemo(() => {
    if (!inputValue.trim()) {
      // Show first 8 popular ones by default
      return [...CURATED_COMPANIES].slice(0, 8);
    }
    const query = inputValue.toLowerCase().trim();
    return CURATED_COMPANIES.filter(company => 
      company.toLowerCase().includes(query)
    );
  }, [inputValue]);

  // Restrict check: Is the typed input a valid company from the list?
  const isValidSelection = useMemo(() => {
    const query = inputValue.toLowerCase().trim();
    return CURATED_COMPANIES.some(c => c.toLowerCase() === query);
  }, [inputValue]);

  // Find exact company name for mapping back casing correctly
  const getMatchedCompanyName = (value: string): string => {
    const query = value.toLowerCase().trim();
    return CURATED_COMPANIES.find(c => c.toLowerCase() === query) || value;
  };

  const handleSelect = (company: string) => {
    setInputValue(company);
    setIsOpen(false);
    onSelectCompany(company);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown') {
        setIsOpen(true);
      }
      return;
    }

    const totalOptionsCount = filteredCompanies.length;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % totalOptionsCount);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + totalOptionsCount) % totalOptionsCount);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < totalOptionsCount) {
        handleSelect(filteredCompanies[activeIndex]);
      } else {
        // Try exact match matching casing
        const exact = CURATED_COMPANIES.find(
          c => c.toLowerCase() === inputValue.toLowerCase().trim()
        );
        if (exact) {
          handleSelect(exact);
        }
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleConfirm = () => {
    const matched = getMatchedCompanyName(inputValue);
    if (isValidSelection) {
      onSelectCompany(matched);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 animate-fade-in-up w-full">
      {/* Brand Header */}
      <div className="text-center max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100/80 text-teal-750 text-xs font-bold mb-6 tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-teal-500" />
          Interactive Product Teardowns
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-5 leading-tight">
          Product X-Ray
        </h1>
        <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
          Generate instant, local visual product teardowns including user journeys, personas, business models, and feature specs.
        </p>
      </div>

      {/* Navigation tabs between Search and Directory */}
      <div className="flex bg-slate-200/60 p-1 rounded-xl mb-8 font-medium text-xs shadow-inner">
        <button
          onClick={() => setViewMode('search')}
          className={`flex items-center gap-1.5 px-4.5 py-2 rounded-lg transition-all cursor-pointer ${
            viewMode === 'search'
              ? 'bg-white text-teal-700 shadow-sm font-bold'
              : 'text-slate-550 hover:text-slate-850'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          Search Mode
        </button>
        <button
          onClick={() => setViewMode('directory')}
          className={`flex items-center gap-1.5 px-4.5 py-2 rounded-lg transition-all cursor-pointer ${
            viewMode === 'directory'
              ? 'bg-white text-teal-700 shadow-sm font-bold'
              : 'text-slate-550 hover:text-slate-850'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          Company Directory
        </button>
      </div>

      {viewMode === 'search' ? (
        <>
          {/* Search Input Box */}
          <div className="w-full max-w-lg relative animate-pulse-subtle" ref={dropdownRef}>
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50/70 border border-teal-100/60 rounded-xl px-3.5 py-2 shadow-sm">
                <span>💡</span>
                <span>Please select a company from the dropdown to start your teardown journey</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-2.5 flex items-center gap-2 focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100 transition-all duration-300">
              <div className="pl-3 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent border-0 text-slate-800 placeholder-slate-400 focus:ring-0 text-base focus:outline-none py-1.5"
                placeholder="Search curated products (e.g. Zomato, Figma)..."
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setIsOpen(true);
                  setActiveIndex(-1);
                }}
                onFocus={() => setIsOpen(true)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleConfirm}
                disabled={!isValidSelection}
                className="bg-teal-600 hover:bg-teal-500 disabled:bg-slate-100 disabled:text-slate-400 text-white rounded-xl px-5 py-2.5 font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-teal-100 cursor-pointer disabled:cursor-not-allowed text-sm"
              >
                Teardown
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dropdown Suggestions */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-72 overflow-y-auto z-50 divide-y divide-slate-100">
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company, index) => (
                    <button
                      key={company}
                      onClick={() => handleSelect(company)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-150 text-xs ${
                        index === activeIndex 
                          ? 'bg-teal-50/60 text-teal-900 font-semibold' 
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span>{company}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-4 text-center text-slate-400 text-xs">
                    No matching curated products found. Please select from the dropdown.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Decorative Badges / Quick Suggestions */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-xl">
            <span className="text-xs text-slate-400 self-center mr-2">Try searching:</span>
            {['Zomato', 'Figma', 'Stripe', 'CRED', 'Notion'].map((sample) => (
              <button
                key={sample}
                onClick={() => handleSelect(sample)}
                className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-655 hover:border-teal-300 hover:bg-teal-50/30 hover:text-teal-700 transition-all cursor-pointer shadow-sm font-medium"
              >
                {sample}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full max-w-6xl space-y-6">
          {/* Vertical Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 bg-white border border-slate-200 p-2 rounded-2xl shadow-sm max-w-4xl mx-auto">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider px-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3 text-slate-400" /> Filter:
            </span>
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'delivery', label: 'Food & Delivery' },
              { id: 'fintech', label: 'Fintech' },
              { id: 'productivity', label: 'Productivity' },
              { id: 'design', label: 'Design' },
              { id: 'streaming', label: 'Streaming' },
              { id: 'marketplace', label: 'Marketplaces & D2C' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`text-[10px] px-3.5 py-1.5 rounded-xl transition-all cursor-pointer font-semibold ${
                  activeFilter === f.id
                    ? 'bg-teal-50 text-teal-700 border border-teal-100 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
            {filteredDirectoryCompanies.map((c) => (
              <div
                key={c.name}
                onClick={() => onSelectCompany(c.name)}
                className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all duration-300 cursor-pointer relative group shadow-sm min-h-[170px]"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <CompanyLogo name={c.name} className="w-9 h-9" />
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500 uppercase tracking-wide">
                      {c.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1 group-hover:text-teal-700 transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-[11px] text-slate-450 leading-relaxed mt-1 group-hover:text-slate-550 transition-colors">
                      {c.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-3 border-t border-slate-50 mt-3">
                  <span className="text-[10px] font-bold text-teal-600 flex items-center gap-1 group-hover:underline">
                    Teardown
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
