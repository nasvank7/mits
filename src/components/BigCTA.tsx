import React from "react";

export const BigCTA: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="w-full h-full absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-50"></div>
      
      <div className="w-full relative z-10">
        <div
          className="relative flex items-center justify-center py-20"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div
              className="flex items-center justify-center gap-4 text-gray-100/10 font-bold tracking-tighter"
              style={{
                fontSize: "clamp(6rem, 20vw, 24rem)",
                lineHeight: 0.8,
              }}
            >
              <span className="inline-block">LET'S</span>
              <span className="inline-block">TALK</span>
            </div>
          </div>

      
          <div className="relative flex items-center justify-center z-10">
            <a
              href="https://wa.me/6282113506"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-full bg-white text-black font-bold text-xl md:text-2xl overflow-hidden transition-transform duration-300 hover:scale-110"
            >
            
              <span className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></span>

              <span className="relative z-10 group-hover:text-white transition-colors">Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
