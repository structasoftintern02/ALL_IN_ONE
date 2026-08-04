import React from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { Palette, Sparkles, Building2, Layers } from 'lucide-react';

export const VariationBar = () => {
  const { variation, setVariation, activeConfig, themeConfigs } = useTheme();

  return (
    <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 select-none sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-extrabold text-slate-200 tracking-wide">
          EMPLOYERHUB DESIGN VARIATION SWITCHER:
        </span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto">
        {Object.keys(VARIATIONS).map((key) => {
          const vKey = VARIATIONS[key];
          const cfg = themeConfigs[vKey];
          const isSelected = variation === vKey;

          return (
            <button
              key={vKey}
              onClick={() => setVariation(vKey)}
              className={`px-3 py-1 rounded-full font-extrabold text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-400'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{cfg.badge}</span>
              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
