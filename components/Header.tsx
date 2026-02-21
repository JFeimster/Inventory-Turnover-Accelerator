// components/Header.tsx
import siteData from '@/data/site.json';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gold p-1.5 rounded-lg">
            <Zap size={20} className="text-slate-950" fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">{siteData.brand_name}</span>
        </div>
        <a 
          href={siteData.cta_url}
          className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 border border-gold/30 rounded-full hover:bg-gold hover:text-slate-950 transition-all"
        >
          Check Eligibility
        </a>
      </div>
    </header>
  );
}
