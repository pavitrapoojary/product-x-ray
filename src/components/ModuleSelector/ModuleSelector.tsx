import React from 'react';
import { 
  Users, 
  Target, 
  Map, 
  Briefcase, 
  Lightbulb, 
  FileText, 
  History, 
  ArrowLeft, 
  Play, 
  Check
} from 'lucide-react';

export interface ModuleOption {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const MODULE_OPTIONS: ModuleOption[] = [
  {
    id: 'personas',
    title: 'User Personas',
    description: 'Detailed user segments, behavioral profiles, core frustrations, and motivators.',
    icon: Users,
  },
  {
    id: 'jtbd',
    title: 'Jobs-to-be-Done (JTBD)',
    description: 'Core functional, emotional, and social jobs mapped to desired customer outcomes.',
    icon: Target,
  },
  {
    id: 'journey',
    title: 'User Journey Map',
    description: 'Visual flow of user onboarding, engagement steps, pain points, and critical moments.',
    icon: Map,
  },
  {
    id: 'business',
    title: 'Business Model Canvas',
    description: 'Core value proposition, monetisation mechanics, growth loops, and unit economics.',
    icon: Briefcase,
  },
  {
    id: 'features',
    title: 'Feature & Growth Ideas',
    description: 'High-impact product recommendations mapped to an effort vs. impact matrix.',
    icon: Lightbulb,
  },
  {
    id: 'prd',
    title: 'Sample Spec (PRD)',
    description: 'A mock Product Requirement Document for a high-priority feature idea.',
    icon: FileText,
  },
  {
    id: 'history',
    title: 'Product & Company History',
    description: 'Timeline of major milestones, founding story, pivots, and acquisition events.',
    icon: History,
  }
];

interface ModuleSelectorProps {
  companyName: string;
  selectedModules: string[];
  onChangeSelection: (modules: string[]) => void;
  onConfirm: () => void;
  onBack: () => void;
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({
  companyName,
  selectedModules,
  onChangeSelection,
  onConfirm,
  onBack
}) => {
  const handleToggle = (id: string) => {
    if (selectedModules.includes(id)) {
      onChangeSelection(selectedModules.filter(m => m !== id));
    } else {
      onChangeSelection([...selectedModules, id]);
    }
  };

  const handleSelectAll = () => {
    onChangeSelection(MODULE_OPTIONS.map(opt => opt.id));
  };

  const handleClearAll = () => {
    onChangeSelection([]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-xs font-semibold mb-3 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to search
          </button>
          <h2 className="text-3xl font-extrabold text-slate-850 flex items-center gap-2">
            Configure Teardown for <span className="text-teal-600">{companyName}</span>
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            Choose the specific teardown modules you want to view.
          </p>
        </div>

        {/* Global actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSelectAll}
            className="text-xs px-3 py-1.5 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-350 transition-colors cursor-pointer font-medium"
          >
            Select All
          </button>
          <button
            onClick={handleClearAll}
            className="text-xs px-3 py-1.5 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-350 transition-colors cursor-pointer font-medium"
          >
            Deselect All
          </button>
        </div>
      </div>

      {/* Grid of options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {MODULE_OPTIONS.map((opt) => {
          const isSelected = selectedModules.includes(opt.id);
          const IconComponent = opt.icon;

          return (
            <div
              key={opt.id}
              onClick={() => handleToggle(opt.id)}
              className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between ${
                isSelected
                  ? 'border-teal-400 bg-teal-50/25 shadow-md shadow-teal-100/30'
                  : 'border-slate-200 bg-white/70 hover:border-teal-200 hover:bg-white text-slate-800'
              }`}
            >
              <div>
                {/* Header within card */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-lg transition-colors ${
                    isSelected ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                    isSelected 
                      ? 'border-teal-500 bg-teal-600 text-white' 
                      : 'border-slate-300 text-transparent hover:border-slate-400'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>

                <h3 className="text-sm font-bold mb-2 text-slate-800">
                  {opt.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {opt.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trigger Area */}
      <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
        <button
          onClick={onBack}
          className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-800 rounded-xl transition-all cursor-pointer font-medium text-xs"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={selectedModules.length === 0}
          className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold rounded-xl flex items-center gap-2 shadow-md shadow-teal-100 cursor-pointer disabled:cursor-not-allowed text-xs"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          Generate Teardown
        </button>
      </div>
    </div>
  );
};
