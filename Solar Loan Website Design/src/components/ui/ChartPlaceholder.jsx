import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const DonutChart = ({ principalAmount, interestAmount, totalAmount }) => {
  const { activeConfig } = useTheme();
  
  const principalPercent = totalAmount > 0 ? (principalAmount / totalAmount) * 100 : 50;
  const interestPercent = totalAmount > 0 ? (interestAmount / totalAmount) * 100 : 50;

  // SVG circle calculations
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const principalOffset = 0;
  const interestOffset = circumference - (interestPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 180 180">
          {/* Principal circle background */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#E2E8F0"
            strokeWidth="24"
            fill="transparent"
          />
          {/* Principal segment */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke={activeConfig.primaryColor}
            strokeWidth="24"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={(circumference * (100 - principalPercent)) / 100}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
          {/* Interest segment */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#F59E0B" // Amber
            strokeWidth="24"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={interestOffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out opacity-90"
          />
        </svg>

        {/* Center label */}
        <div className="absolute flex flex-col items-center text-center">
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Total Payable</span>
          <span className="text-base font-extrabold text-slate-900">
            ₹{(totalAmount / 100000).toFixed(2)} L
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeConfig.primaryColor }}></span>
          <span className="text-slate-700">Principal: {principalPercent.toFixed(1)}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-500"></span>
          <span className="text-slate-700">Interest: {interestPercent.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export const BarChartSavings = ({ yearlyData }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-slate-800">Cumulative Savings vs Grid Electricity Bill</h4>
        <span className="text-xs text-slate-500">25-Year Projection</span>
      </div>

      <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-200">
        {yearlyData.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
            
            {/* Tooltip */}
            <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-1 px-2 rounded shadow pointer-events-none whitespace-nowrap z-20">
              Year {item.year}: ₹{item.savings.toLocaleString('en-IN')} Saved
            </div>

            {/* Grid Bill bar (Red/Orange) */}
            <div className="w-full flex items-end justify-center gap-1">
              <div 
                className="w-1.5 bg-slate-300 rounded-t transition-all" 
                style={{ height: `${item.gridBillHeight}%` }}
                title="Grid Bill"
              />
              {/* Solar Cumulative Savings bar */}
              <div 
                className="w-2.5 rounded-t transition-all"
                style={{ 
                  height: `${item.savingsHeight}%`,
                  backgroundColor: activeConfig.primaryColor 
                }}
                title="Solar Cumulative Savings"
              />
            </div>
            
            <span className="text-[10px] text-slate-500 font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 text-[11px] font-medium text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-slate-300"></span>
          <span>Standard DISCOM Grid Electricity Cost</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded" style={{ backgroundColor: activeConfig.primaryColor }}></span>
          <span>Solar Net Savings</span>
        </div>
      </div>
    </div>
  );
};
