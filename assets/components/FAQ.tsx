import { useState } from "react";
import { FAQ_DATA } from "../types";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-transparent relative z-10 border-b border-white/5 font-display">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-950/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-indigo-400 font-bold uppercase py-1.5 px-3.5 bg-white/5 rounded-full border border-white/10 inline-block text-center shadow-inner">
            DOMANDE FREQUENTI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Hai domande su Nebula?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            Abbiamo raccolto le principali domande che i fondatori di community ci pongono, corredate da risposte esaustive.
          </p>
        </div>

        {/* Discord-styled Accordions */}
        <div className="space-y-4" id="faq-accordions">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
                  isOpen
                    ? "border-indigo-500/40 bg-white/5 shadow-md shadow-indigo-600/5"
                    : "border-white/5 hover:border-white/15"
                }`}
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-400 shrink-0">
                      <HelpCircle className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-slate-100 text-sm sm:text-base leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <span className="p-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 shrink-0">
                    {isOpen ? <Minus className="h-4 w-4 text-indigo-400" /> : <Plus className="h-4 w-4" />}
                  </span>
                </div>

                {/* Answer body with smooth height rendering */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 bg-black/20">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
