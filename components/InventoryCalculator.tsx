"use client";
import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight, Info } from 'lucide-react';
import siteData from '@/data/site.json';

export default function InventoryCalculator() {
  const [capital, setCapital] = useState(25000);
  const [turnTime, setTurnTime] = useState(30);
  const [results, setResults] = useState({ standard: 0, optimized: 0, increase: 0 });

  useEffect(() => {
    const standardTurns = 365 / (turnTime + 14);
    const optimizedTurns = 365 / (turnTime + 1);
    setResults({
      standard: standardTurns,
      optimized: optimizedTurns,
      increase: ((optimizedTurns / standardTurns) - 1) * 100
    });
  }, [capital, turnTime]);

  return (
    <section className="max-w-5xl mx-auto p-6 lg:p-12 bg-slate-900 border border-white/5 rounded-[2.5rem] shadow-2xl mt-[-6rem] relative z-10">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Inventory Capital</label>
              <span className="text-2xl font-mono text-gold">${capital.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="5000" max="250000" step="5000" 
              value={capital} onChange={(e) => setCapital(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Days to Sell Batch</label>
              <span className="text-2xl font-mono text-gold">{turnTime} Days</span>
            </div>
            <input 
              type="range" min="10" max="90" step="1" 
              value={turnTime} onChange={(e) => setTurnTime(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl flex gap-3">
            <Info className="text-blue-400 shrink-0" size={20} />
            <p className="text-sm text-slate-400 italic">Amazon adds a mandatory 14-day hold to every payout. We remove it.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-slate-950 border border-gold/20 p-10 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <TrendingUp size={20} />
              <span className="text-sm font-bold uppercase">Velocity Gain</span>
            </div>
            <h3 className="text-7xl font-black text-white mb-2">
              +{results.increase.toFixed(0)}%
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              By switching to daily payouts, you unlock an extra <span className="text-white font-bold">{(results.optimized - results.standard).toFixed(1)} inventory turns</span> per year.
            </p>
            <a 
              href={siteData.cta_url}
              className="w-full flex items-center justify-center gap-3 bg-gold text-slate-950 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-transform"
            >
              STOP WAITING. GET PAID DAILY.
              <ArrowRight size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
