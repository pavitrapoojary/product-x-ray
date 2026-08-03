import { useState } from 'react';
import { CompanySearch } from './components/CompanySearch/CompanySearch';
import { ModuleSelector, MODULE_OPTIONS } from './components/ModuleSelector/ModuleSelector';
import { ResultsView } from './components/ResultsView/ResultsView';
import { getMockTeardown } from './services/mockData';
import { Sparkles, ChevronRight } from 'lucide-react';

type Screen = 'search' | 'select' | 'results';

interface ModuleState {
  data: any;
  loading: boolean;
  error: string | null;
}

function App() {
  const [screen, setScreen] = useState<Screen>('search');
  const [companyName, setCompanyName] = useState<string>('');
  const [selectedModules, setSelectedModules] = useState<string[]>(
    MODULE_OPTIONS.map(opt => opt.id)
  );

  // Loading states per module
  const [modulesState, setModulesState] = useState<Record<string, ModuleState>>({});

  const handleSelectCompany = (selectedName: string) => {
    setCompanyName(selectedName);
    setScreen('select');
  };

  // Triggers mock loading and fetches data locally
  const fetchModule = async (moduleId: string, nameToQuery: string) => {
    setModulesState(prev => ({
      ...prev,
      [moduleId]: { data: null, loading: true, error: null }
    }));

    try {
      // Simulate randomized loading latency to display shimmering skeleton loaders (2000ms - 2800ms)
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 800));
      
      const parsedData = getMockTeardown(moduleId, nameToQuery);

      if (!parsedData) {
        throw new Error(`Data generation failed for ${moduleId}.`);
      }

      setModulesState(prev => ({
        ...prev,
        [moduleId]: { data: parsedData, loading: false, error: null }
      }));
    } catch (err: any) {
      console.error(`Error loading module ${moduleId}:`, err);
      setModulesState(prev => ({
        ...prev,
        [moduleId]: { 
          data: null, 
          loading: false, 
          error: err?.message || 'Failed to fetch teardown details.' 
        }
      }));
    }
  };

  const handleConfirmModules = () => {
    setScreen('results');
    
    // Clear old state & fire request simulations for selected modules
    const newState: Record<string, ModuleState> = {};
    MODULE_OPTIONS.forEach(opt => {
      if (selectedModules.includes(opt.id)) {
        newState[opt.id] = { data: null, loading: true, error: null };
      }
    });
    setModulesState(newState);

    selectedModules.forEach(id => {
      fetchModule(id, companyName);
    });
  };

  const handleRetryModule = (moduleId: string) => {
    fetchModule(moduleId, companyName);
  };

  const handleBackToSearch = () => {
    setScreen('search');
  };

  const handleReset = () => {
    setCompanyName('');
    setSelectedModules(MODULE_OPTIONS.map(opt => opt.id));
    setModulesState({});
    setScreen('search');
  };

  return (
    <div className="min-h-screen bg-[#f3f4f8] text-slate-800 flex flex-col font-sans selection:bg-teal-500/10 selection:text-teal-900">
      {/* Top Navbar */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleReset}>
            <div className="p-2 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 shadow-sm">
              <Sparkles className="w-5 h-5 text-teal-500" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-base tracking-tight">Product X-Ray</span>
            </div>
          </div>

          {/* Simple breadcrumbs indicators */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span className={`transition-colors font-medium ${screen === 'search' ? 'text-teal-600 font-bold' : 'text-slate-500'}`}>Search</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className={`transition-colors font-medium ${screen === 'select' ? 'text-teal-600 font-bold' : 'text-slate-500'}`}>Configure</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className={`transition-colors font-medium ${screen === 'results' ? 'text-teal-600 font-bold' : 'text-slate-500'}`}>Teardown</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleReset}
              className="text-xs px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-350 text-slate-650 hover:text-slate-800 transition-all cursor-pointer font-medium shadow-sm"
            >
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {screen === 'search' && (
          <CompanySearch 
            onSelectCompany={handleSelectCompany} 
            initialValue={companyName}
          />
        )}

        {screen === 'select' && (
          <ModuleSelector
            companyName={companyName}
            selectedModules={selectedModules}
            onChangeSelection={setSelectedModules}
            onConfirm={handleConfirmModules}
            onBack={handleBackToSearch}
          />
        )}

        {screen === 'results' && (
          <ResultsView
            companyName={companyName}
            selectedModules={selectedModules}
            modulesState={modulesState}
            onRetryModule={handleRetryModule}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Product X-Ray. Developed by **Pavitra Poojary**.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
