import React, { useState } from 'react';
import { 
  RefreshCw, 
  Copy, 
  Check,
  Calendar,
  Loader2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Activity,
  ShieldAlert,
  User,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';
import { MODULE_OPTIONS } from '../ModuleSelector/ModuleSelector';
import type { ModuleOption } from '../ModuleSelector/ModuleSelector';

interface ResultsViewProps {
  companyName: string;
  selectedModules: string[];
  modulesState: Record<string, { data: any; loading: boolean; error: string | null }>;
  onRetryModule: (moduleId: string) => void;
  onReset: () => void;
}

const getEmotionBadge = (score: number | string) => {
  const num = Number(score);
  if (isNaN(num)) return 'bg-slate-100 text-slate-500';
  if (num >= 8) return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
  if (num >= 5) return 'bg-amber-50 text-amber-700 border border-amber-100';
  return 'bg-rose-50 text-rose-700 border border-rose-100';
};

const SkeletonLoader: React.FC<{ moduleId: string }> = ({ moduleId }) => {
  const getShimmerBlocks = () => {
    switch (moduleId) {
      case 'personas':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-3.5 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-3 bg-slate-200/60 rounded w-1/3"></div>
                  </div>
                </div>
                <div className="h-10 bg-slate-100 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'jtbd':
        return (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="h-3.5 bg-slate-200 rounded w-24"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-11/12"></div>
                  <div className="h-3 bg-slate-200/65 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'journey':
        return (
          <div className="space-y-6 animate-pulse">
            <div className="h-28 bg-slate-100 border border-slate-200 rounded-xl"></div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-24 bg-slate-100 border border-slate-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        );
      case 'business':
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className={`bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 ${
                i === 1 || i === 3 || i === 5 ? 'md:row-span-2 min-h-[220px]' : ''
              }`}>
                <div className="h-3.5 bg-slate-200 rounded w-1/3"></div>
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        );
      case 'features':
        return (
          <div className="space-y-6 animate-pulse">
            <div className="h-64 bg-slate-100 border border-slate-200 rounded-xl"></div>
            <div className="h-44 bg-slate-100 border border-slate-200 rounded-xl"></div>
          </div>
        );
      case 'prd':
        return (
          <div className="space-y-6 animate-pulse">
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="h-4 bg-slate-200 rounded w-1/3"></div>
              <div className="h-3 bg-slate-200 rounded w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-36 bg-slate-100 border border-slate-200 rounded-xl"></div>
              <div className="h-36 bg-slate-100 border border-slate-200 rounded-xl"></div>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="relative pl-6 border-l border-slate-200 space-y-6 ml-2 py-2 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-2 relative">
                <div className="absolute -left-[30px] top-1 w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-4 bg-slate-200 rounded"></div>
                  <div className="w-44 h-4 bg-slate-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="flex justify-center items-center min-h-[30vh] animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      <div className="pt-2">{getShimmerBlocks()}</div>
    </div>
  );
};

export const ResultsView: React.FC<ResultsViewProps> = ({ 
  companyName, 
  selectedModules, 
  modulesState,
  onRetryModule,
  onReset 
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Sorting state for Feature Ideas table
  const [featureSortBy, setFeatureSortBy] = useState<'name' | 'impact' | 'effort'>('impact');
  const [featureSortOrder, setFeatureSortOrder] = useState<'asc' | 'desc'>('desc');

  const tabs = MODULE_OPTIONS.filter((opt: ModuleOption) => selectedModules.includes(opt.id));

  // Handle global copy of report
  const handleCopyReport = () => {
    const fullReport: Record<string, any> = {};
    tabs.forEach(tab => {
      const data = modulesState[tab.id]?.data;
      if (data) {
        fullReport[tab.id] = data;
      }
    });

    navigator.clipboard.writeText(JSON.stringify(fullReport, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySection = (moduleId: string, data: any) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedSection(moduleId);
    setTimeout(() => setCopiedSection(null), 1500);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper values for feature table sorting
  const getImpactWeight = (val: string) => {
    const v = val.toLowerCase();
    if (v.includes('high')) return 3;
    if (v.includes('med')) return 2;
    return 1;
  };

  const getEffortWeight = (val: string) => {
    const v = val.toLowerCase();
    if (v.includes('l')) return 3;
    if (v.includes('m')) return 2;
    return 1;
  };

  // Custom visual components for each specific schema
  const renderPersonas = (data: any) => {
    const list = data.personas || data.items || [];
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
        {list.map((p: any, idx: number) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div>
              {/* Persona Identity Card Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg shrink-0 shadow-sm shadow-teal-100/20">
                  <User className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-tight">{p.name || 'Anonymous'}</h4>
                  <span className="text-xs text-teal-600 font-semibold">{p.occupation || 'Professional'} (Age {p.age})</span>
                </div>
              </div>

              {/* Personal representative quote */}
              {p.quote && (
                <p className="text-xs italic text-slate-600 bg-teal-50/20 p-3 rounded-lg border border-teal-100/20 mb-4 leading-relaxed">
                  &quot;{p.quote}&quot;
                </p>
              )}

              {/* Goals */}
              {p.goals && p.goals.length > 0 && (
                <div className="mb-4">
                  <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Key Goals
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {p.goals.map((g: string, i: number) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded bg-emerald-50/50 border border-emerald-100/50 text-emerald-700 font-medium">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Frustrations */}
              {p.frustrations && p.frustrations.length > 0 && (
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                    Pain Points
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {p.frustrations.map((f: string, i: number) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded bg-rose-50/50 border border-rose-100/50 text-rose-700 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Target feature recommendation */}
            {p.keyFeature && (
              <div className="border-t border-slate-100 pt-3 text-xs text-teal-700">
                <strong className="text-slate-450 block mb-1 font-semibold uppercase text-[9px] tracking-wider">Key Feature Target:</strong>
                <span className="text-slate-700 font-medium">{p.keyFeature}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderJtbd = (data: any) => {
    const list = data.jobs || [];
    return (
      <div className="space-y-4 animate-fade-in-up">
        {list.map((job: any, idx: number) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
            {/* Massive modern index badge */}
            <div className="text-2xl font-black text-teal-500/20 select-none shrink-0 pt-0.5 font-mono">
              {String(idx + 1).padStart(2, '0')}
            </div>

            <div className="space-y-3 flex-1">
              <div className="inline-block text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded uppercase tracking-wide">
                {job.type || 'Job'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-50/50 p-3 rounded-lg border border-slate-200 text-slate-700">
                  <strong className="text-slate-800 block uppercase text-[9px] tracking-widest mb-1.5 font-bold">When (Situation)</strong>
                  {job.situation}
                </div>
                <div className="bg-teal-50/20 p-3 rounded-lg border border-teal-100/30 text-slate-700">
                  <strong className="text-teal-700 block uppercase text-[9px] tracking-widest mb-1.5 font-bold">I want to (Motivation)</strong>
                  {job.motivation}
                </div>
                <div className="bg-emerald-50/20 p-3 rounded-lg border border-emerald-100/20 text-slate-700">
                  <strong className="text-emerald-700 block uppercase text-[9px] tracking-widest mb-1.5 font-bold">So I can (Outcome)</strong>
                  {job.outcome}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderJourney = (data: any) => {
    const list = data.stages || [];
    if (list.length === 0) return null;

    const svgWidth = 720;
    const svgHeight = 120;
    const paddingX = 60;
    const paddingY = 20;

    const coords = list.map((stg: any, index: number) => {
      const x = paddingX + (index * (svgWidth - paddingX * 2)) / (list.length - 1);
      const score = Number(stg.emotion) || 5;
      const y = paddingY + ((10 - score) * (svgHeight - paddingY * 2)) / 9;
      return { x, y, score, name: stg.name };
    });

    let pathD = '';
    if (coords.length > 0) {
      pathD = `M ${coords[0].x} ${coords[0].y} ` + coords.slice(1).map((c: any) => `L ${c.x} ${c.y}`).join(' ');
    }

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* SVG Emotion Line Graph */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 overflow-x-auto shadow-sm">
          <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider mb-4 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-teal-500" />
            User Satisfaction Trend (1-10 Score)
          </h4>
          <div className="min-w-[760px] flex justify-center py-2">
            <svg width={svgWidth} height={svgHeight} className="overflow-visible">
              <defs>
                <linearGradient id="chart-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Grid guide lines */}
              <line x1={paddingX} y1={paddingY} x2={svgWidth - paddingX} y2={paddingY} stroke="#e2e8f0" strokeDasharray="3" />
              <line x1={paddingX} y1={svgHeight / 2} x2={svgWidth - paddingX} y2={svgHeight / 2} stroke="#e2e8f0" strokeDasharray="3" />
              <line x1={paddingX} y1={svgHeight - paddingY} x2={svgWidth - paddingX} y2={svgHeight - paddingY} stroke="#e2e8f0" strokeDasharray="3" />

              {/* Path line */}
              {pathD && (
                <path d={pathD} fill="none" stroke="url(#chart-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              )}

              {/* Graph nodes */}
              {coords.map((c: any, i: number) => (
                <g key={i} className="group cursor-pointer">
                  {/* Outer glow ring */}
                  <circle cx={c.x} cy={c.y} r="8" fill="rgba(20, 184, 166, 0.1)" stroke="#2dd4bf" strokeWidth="1" />
                  <circle cx={c.x} cy={c.y} r="4.5" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
                  
                  {/* Score text label */}
                  <text x={c.x} y={c.y - 12} textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">
                    {c.score}/10
                  </text>

                  {/* Stage title label */}
                  <text x={c.x} y={svgHeight - 2} textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">
                    {c.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Journey Stages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {list.map((stg: any, idx: number) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-teal-300 transition-colors shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-slate-400">Stage {idx + 1}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${getEmotionBadge(stg.emotion)}`}>
                    Score: {stg.emotion}
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-slate-800 mb-2 uppercase tracking-wide">{stg.name}</h4>
                
                {stg.actions && (
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                    <strong className="text-slate-450 block font-semibold uppercase text-[9px] tracking-wider mb-0.5">Core Actions:</strong>
                    {stg.actions.join(', ')}
                  </p>
                )}
              </div>

              {stg.painPoints && stg.painPoints.length > 0 && (
                <div className="border-t border-slate-100 pt-2 text-[10px] text-rose-600 leading-relaxed">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">Pain Point:</span>
                  {stg.painPoints[0]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBusinessCanvas = (data: any) => {
    const canvas = data.canvas || {};
    return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm text-xs animate-fade-in-up">
        {/* Row 1 spanning 2 vertical blocks */}
        <div className="md:col-span-1 md:row-span-2 p-5 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between bg-teal-50/10">
          <div>
            <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider mb-3">Key Partners</h4>
            <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
              {canvas.keyPartners?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col divide-y divide-slate-200 bg-teal-50/5">
          <div className="p-5 flex-1 space-y-2.5">
            <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider">Key Activities</h4>
            <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
              {canvas.keyActivities?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
          <div className="p-5 flex-1 space-y-2.5">
            <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider">Key Resources</h4>
            <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
              {canvas.keyResources?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-2 p-5 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between bg-teal-50/10">
          <div>
            <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider mb-3">Value Propositions</h4>
            <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
              {canvas.valuePropositions?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col divide-y divide-slate-200 bg-teal-50/5">
          <div className="p-5 flex-1 space-y-2.5">
            <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider">Customer Relationships</h4>
            <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
              {canvas.customerRelationships?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
          <div className="p-5 flex-1 space-y-2.5">
            <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider">Channels</h4>
            <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
              {canvas.channels?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-2 p-5 border-b border-slate-200 md:border-b-0 flex flex-col justify-between bg-teal-50/10">
          <div>
            <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider mb-3">Customer Segments</h4>
            <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
              {canvas.customerSegments?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>

        {/* Cost and Revenue Bottom Row */}
        <div className="md:col-span-2 p-5 border-t border-slate-200 border-r bg-slate-50/60">
          <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider mb-3">Cost Structure</h4>
          <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
            {canvas.costStructure?.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
        </div>

        <div className="md:col-span-3 p-5 border-t border-slate-200 bg-slate-50/60">
          <h4 className="font-extrabold text-teal-700 text-[11px] uppercase tracking-wider mb-3">Revenue Streams</h4>
          <ul className="list-disc pl-4 space-y-2 text-slate-600 leading-relaxed">
            {canvas.revenueStreams?.map((x: string, i: number) => <li key={i}>{x}</li>)}
          </ul>
        </div>
      </div>
    );
  };

  const renderFeatures = (data: any) => {
    const list = data.features || [];
    if (list.length === 0) return null;

    const sortedFeatures = [...list].sort((a: any, b: any) => {
      let valA: any = a[featureSortBy];
      let valB: any = b[featureSortBy];

      if (featureSortBy === 'impact') {
        valA = getImpactWeight(a.impact);
        valB = getImpactWeight(b.impact);
      } else if (featureSortBy === 'effort') {
        valA = getEffortWeight(a.effort);
        valB = getEffortWeight(b.effort);
      } else {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      }

      if (valA < valB) return featureSortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return featureSortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    const handleSort = (field: 'name' | 'impact' | 'effort') => {
      if (featureSortBy === field) {
        setFeatureSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setFeatureSortBy(field);
        setFeatureSortOrder('desc');
      }
    };

    const plotWidth = 440;
    const plotHeight = 280;
    const centerX = plotWidth / 2;
    const centerY = plotHeight / 2;

    const plottedPoints = list.map((feat: any, idx: number) => {
      const effortStr = feat.effort.toLowerCase();
      let baseX = centerX;
      if (effortStr.includes('s')) baseX = plotWidth * 0.22;
      else if (effortStr.includes('l')) baseX = plotWidth * 0.78;
      else baseX = centerX;

      const impactStr = feat.impact.toLowerCase();
      let baseY = centerY;
      if (impactStr.includes('high')) baseY = plotHeight * 0.22;
      else if (impactStr.includes('low')) baseY = plotHeight * 0.78;
      else baseY = centerY;

      const jitterOffset = ((idx * 14) % 31) - 15;
      return {
        x: baseX + jitterOffset,
        y: baseY + jitterOffset,
        name: feat.name,
        num: idx + 1,
        impact: feat.impact,
        effort: feat.effort
      };
    });

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* SVG Scatter Plot & Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Chart Display (col-span-2) */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow-sm">
            <div className="w-full text-left mb-3">
              <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center gap-1.5">
                <LayersIcon className="w-4 h-4 text-teal-500" />
                Effort vs. Impact 2x2 Matrix
              </h4>
            </div>

            <div className="relative w-full flex justify-center py-2 overflow-x-auto">
              <svg width={plotWidth} height={plotHeight} className="overflow-visible select-none bg-slate-50 border border-slate-200/80 rounded-lg">
                {/* 2x2 grid lines */}
                <line x1={centerX} y1="0" x2={centerX} y2={plotHeight} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3" />
                <line x1="0" y1={centerY} x2={plotWidth} y2={centerY} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3" />

                {/* Grid Quadrant Label Texts */}
                <text x={10} y={18} fill="#94a3b8" fontSize="8" fontWeight="bold">QUICK WINS (High Impact, Low Effort)</text>
                <text x={plotWidth - 10} y={18} textAnchor="end" fill="#94a3b8" fontSize="8" fontWeight="bold">STRATEGIC BETS (High Impact, High Effort)</text>
                <text x={10} y={plotHeight - 10} fill="#94a3b8" fontSize="8" fontWeight="bold">FILL-INS (Low Impact, Low Effort)</text>
                <text x={plotWidth - 10} y={plotHeight - 10} textAnchor="end" fill="#94a3b8" fontSize="8" fontWeight="bold">THANKLESS TASK (Low Impact, High Effort)</text>

                {/* Plot points */}
                {plottedPoints.map((pt: any, i: number) => (
                  <g key={i} className="group cursor-pointer">
                    <circle cx={pt.x} cy={pt.y} r="10" fill="rgba(20, 184, 166, 0.1)" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <circle cx={pt.x} cy={pt.y} r="7.5" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
                    <text x={pt.x} y={pt.y + 2.5} textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="black">
                      {pt.num}
                    </text>
                    <title>{`#${pt.num}: ${pt.name} (Impact: ${pt.impact}, Effort: ${pt.effort})`}</title>
                  </g>
                ))}
              </svg>
            </div>
            
            <p className="text-[10px] text-slate-400 mt-2">
              Numbered nodes map directly to the feature recommendations list.
            </p>
          </div>

          {/* Table display (col-span-3) */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50 text-slate-550">
                    <th className="py-3 px-4 font-bold select-none cursor-pointer hover:text-slate-800" onClick={() => handleSort('name')}>
                      <div className="flex items-center gap-1">
                        Feature Name
                        {featureSortBy === 'name' ? (featureSortOrder === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />) : null}
                      </div>
                    </th>
                    <th className="py-3 px-4 font-bold select-none cursor-pointer hover:text-slate-800 text-center w-28" onClick={() => handleSort('impact')}>
                      <div className="flex items-center justify-center gap-1">
                        Impact
                        {featureSortBy === 'impact' ? (featureSortOrder === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />) : null}
                      </div>
                    </th>
                    <th className="py-3 px-4 font-bold select-none cursor-pointer hover:text-slate-800 text-center w-28" onClick={() => handleSort('effort')}>
                      <div className="flex items-center justify-center gap-1">
                        Effort
                        {featureSortBy === 'effort' ? (featureSortOrder === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />) : null}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedFeatures.map((feat: any, index: number) => {
                    const originalIndex = list.findIndex((x: any) => x.name === feat.name) + 1;
                    return (
                      <tr key={index} className="hover:bg-slate-50/30 transition-colors group">
                        <td className="py-3.5 px-4 text-slate-700">
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded bg-slate-100 border border-slate-200 text-slate-500 font-semibold text-[10px] flex items-center justify-center shrink-0">
                              {originalIndex}
                            </span>
                            <div>
                              <div className="font-bold text-slate-800 group-hover:text-teal-700 transition-colors">{feat.name}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{feat.rationale}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block ${
                            feat.impact?.toLowerCase().includes('high')
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                              : feat.impact?.toLowerCase().includes('med')
                              ? 'bg-teal-50 text-teal-700 border border-teal-100'
                              : 'bg-slate-100 text-slate-500 border border-slate-200'
                          }`}>
                            {feat.impact}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block ${
                            feat.effort?.toLowerCase().includes('l')
                              ? 'bg-rose-50 text-rose-700 border border-rose-100'
                              : feat.effort?.toLowerCase().includes('m')
                              ? 'bg-amber-50 text-amber-700 border border-amber-100'
                              : 'bg-slate-100 text-slate-500 border border-slate-200'
                          }`}>
                            {feat.effort}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPrd = (data: any) => {
    const prd = data.prd || {};
    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Problem Statement & Goals */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-teal-700 mb-2">1.0 Problem Statement</h4>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50/50 p-3.5 rounded-xl border border-slate-100">{prd.problem}</p>
          </div>
          <div className="border-t border-slate-100 pt-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-teal-700 mb-2">2.0 Core Value Goal</h4>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50/50 p-3.5 rounded-xl border border-slate-100">{prd.goal}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Stories */}
          {prd.userStories && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-teal-700 mb-3.5 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <HelpCircle className="w-4 h-4 text-teal-500" />
                3.0 User Stories
              </h4>
              <ul className="space-y-3">
                {prd.userStories.map((story: string, i: number) => (
                  <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                    <input type="checkbox" readOnly checked className="mt-0.5 accent-teal-500 rounded border-slate-250 text-teal-500 shrink-0" />
                    <span>{story}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Success Metrics */}
          {prd.metrics && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-teal-700 mb-3.5 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <TrendingUp className="w-4 h-4 text-teal-500" />
                4.0 Key Performance Indicators (KPIs)
              </h4>
              <ul className="space-y-3">
                {prd.metrics.map((metric: string, i: number) => (
                  <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-teal-50 border border-teal-100 text-teal-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Scope Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50/20 border border-emerald-100 rounded-2xl p-5 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3 flex items-center gap-1.5 border-b border-emerald-100/50 pb-2">
              <Activity className="w-4 h-4" />
              5.0 Scope boundaries: In Scope
            </h4>
            <ul className="list-disc pl-4 space-y-2 text-xs text-slate-600 leading-relaxed">
              {prd.inScope?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
          <div className="bg-rose-50/20 border border-rose-100 rounded-2xl p-5 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-rose-700 mb-3 flex items-center gap-1.5 border-b border-rose-100/40 pb-2">
              <ShieldAlert className="w-4 h-4" />
              6.0 Scope boundaries: Out of Scope
            </h4>
            <ul className="list-disc pl-4 space-y-2 text-xs text-slate-600 leading-relaxed">
              {prd.outOfScope?.map((x: string, i: number) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>

        {/* Risks & Mitigations */}
        {prd.risks && prd.risks.length > 0 && (
          <div className="bg-rose-50/40 border border-rose-100/60 rounded-2xl p-5 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-rose-700 mb-3 flex items-center gap-1.5 border-b border-rose-100/40 pb-2">
              <ShieldAlert className="w-4.5 h-4.5" />
              7.0 Risks & Mitigations
            </h4>
            <ul className="space-y-2.5">
              {prd.risks.map((risk: string, i: number) => (
                <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const renderHistory = (data: any) => {
    const list = data.timeline || [];
    return (
      <div className="relative pl-6 border-l border-slate-200 space-y-6 ml-2 py-2 animate-fade-in-up">
        {list.map((item: any, idx: number) => (
          <div key={idx} className="relative group">
            {/* Timeline track node circle */}
            <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-teal-600 group-hover:bg-teal-400 group-hover:border-teal-300 transition-all shadow-sm"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
              <span className="flex items-center gap-1 text-[10px] font-black text-teal-700 bg-teal-50 px-2 py-0.5 rounded tracking-widest uppercase shrink-0 border border-teal-100/60">
                <Calendar className="w-3.5 h-3.5 text-teal-500" />
                {item.year}
              </span>
              <h4 className="text-xs font-bold text-slate-800 leading-tight group-hover:text-teal-700 transition-colors">{item.event}</h4>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 animate-fade-in-up">
      
      {/* Top dashboard summary header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800 flex items-center gap-2">
            Teardown Report: <span className="text-teal-600">{companyName}</span>
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            Generated Document • {selectedModules.length} Active Modules
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopyReport}
            className="flex items-center gap-1.5 text-xs px-4.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-350 text-slate-650 hover:text-slate-800 transition-all cursor-pointer font-medium shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied Full Report' : 'Copy Full JSON'}
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-xs px-4.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-350 text-slate-650 hover:text-slate-800 transition-all cursor-pointer font-medium shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            Export as PDF
          </button>
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs px-4.5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white transition-all cursor-pointer font-medium shadow-md shadow-teal-100"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            New Search
          </button>
        </div>
      </div>

      {/* Dynamic 2-column workspace layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sticky left sidebar index locator */}
        <div className="lg:col-span-1" id="document-index-sidebar">
          <div className="sticky top-24 space-y-2">
            <h4 className="text-[10px] font-extrabold text-slate-450 uppercase tracking-widest pl-3 mb-3">
              Document Index
            </h4>
            <div className="space-y-1">
              {tabs.map((tab: ModuleOption) => {
                const tabState = modulesState[tab.id];
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleScrollToSection(tab.id)}
                    className="flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl text-left transition-all duration-200 cursor-pointer w-full text-slate-550 hover:text-slate-800 hover:bg-slate-100/50 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <tab.icon className="w-4 h-4 shrink-0 text-slate-450 group-hover:text-teal-500 transition-colors" />
                      <span className="text-xs font-semibold truncate">{tab.title}</span>
                    </div>

                    {/* Status markers */}
                    {tabState?.loading && (
                      <Loader2 className="w-3 h-3 text-teal-500 animate-spin shrink-0" />
                    )}
                    {tabState?.error && (
                      <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                    )}
                    {tabState?.data && !tabState.loading && !tabState.error && (
                      <Check className="w-3 h-3 text-emerald-600 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stacked Single-Page Main Document Content */}
        <div className="lg:col-span-3 space-y-10">
          {tabs.map((tab: ModuleOption) => {
            const tabState = modulesState[tab.id];
            
            return (
              <section
                key={tab.id}
                id={tab.id}
                className="scroll-mt-24 bg-white border border-slate-200 rounded-2xl p-6 relative shadow-sm"
              >
                {/* Section header block */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                  <div className="pr-4">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <tab.icon className="w-5 h-5 text-teal-600 shrink-0" />
                      {tab.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {tabState?.data && !tabState.loading && !tabState.error && (
                      <button
                        onClick={() => handleCopySection(tab.id, tabState.data)}
                        className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors"
                        title="Copy Section JSON"
                      >
                        {copiedSection === tab.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </div>

                {/* Content area based on fetch state */}
                {tabState?.loading && (
                  <SkeletonLoader moduleId={tab.id} />
                )}

                {tabState?.error && !tabState.loading && (
                  <div className="flex flex-col items-center justify-center py-8 text-center max-w-sm mx-auto space-y-3">
                    <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-100 text-rose-700">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Failed to generate</h4>
                      <p className="text-xs text-slate-550 leading-relaxed mt-0.5">{tabState.error}</p>
                    </div>
                    <button 
                      onClick={() => onRetryModule(tab.id)}
                      className="text-xs text-teal-650 hover:text-teal-500 font-semibold underline cursor-pointer"
                    >
                      Click here to retry
                    </button>
                  </div>
                )}

                {tabState?.data && !tabState.loading && !tabState.error && (
                  <div>
                    {tab.id === 'personas' && renderPersonas(tabState.data)}
                    {tab.id === 'jtbd' && renderJtbd(tabState.data)}
                    {tab.id === 'journey' && renderJourney(tabState.data)}
                    {tab.id === 'business' && renderBusinessCanvas(tabState.data)}
                    {tab.id === 'features' && renderFeatures(tabState.data)}
                    {tab.id === 'prd' && renderPrd(tabState.data)}
                    {tab.id === 'history' && renderHistory(tabState.data)}
                  </div>
                )}
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
};

// Internal replacement component representing Layers for the scatter plot title
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 3-10 9 10 9 10-9-10-9Z" />
    <path d="m2 17 10 9 10-9" />
    <path d="m2 12 10 9 10-9" />
  </svg>
);
