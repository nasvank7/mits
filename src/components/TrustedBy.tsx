import React from "react";

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-4xl font-bold mb-2">
              Trusted{" "}
              <span className="bg-black text-white px-3 py-1 rounded-md">
                25,000+
              </span>
            </h3>
            <p className="text-lg text-gray-700 mt-4">
              Satisfied clients are using Mits to accelerate their digital
              growth.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold mb-2">100+</h3>
            <p className="text-gray-600 font-semibold">Skilled experts</p>
            <p className="text-gray-500">crafting ideas</p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-5xl font-bold mb-2">4.9</h3>
            <div className="flex justify-center md:justify-end gap-1 text-red-500 text-2xl mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-600 font-semibold">Average Rating</p>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-gray-200 pt-12 mask-linear-fade">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
           
            <div className="flex gap-12 sm:gap-20 items-center min-w-max pr-20">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-900 transition whitespace-nowrap">
                muthoot HONDA
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-900 transition whitespace-nowrap">
                NATIONAL BUILDERS
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-900 transition whitespace-nowrap">
                oppo
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-900 transition whitespace-nowrap">
                vivo
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-900 transition whitespace-nowrap">
                AMITY UNIVERSITY
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-900 transition whitespace-nowrap">
                FRIDAY FILM HOUSE
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
