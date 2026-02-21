import Header from '@/components/Header';
import InventoryCalculator from '@/components/InventoryCalculator';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-40 pb-52 px-6 text-center bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
            KILL THE <span className="text-gold">14-DAY</span> DRAG.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every day Amazon holds your cash is a day you aren't restocking. See how much faster you could be scaling.
          </p>
        </div>
      </section>
      <InventoryCalculator />
      <footer className="py-20 text-center opacity-30 text-xs font-bold tracking-widest uppercase">
        &copy; 2026 VelocityEngine &bull; Powered by the Ecosystem Factory
      </footer>
    </main>
  );
}
