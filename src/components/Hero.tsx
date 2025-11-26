import React, { useState } from "react";

export const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-24 md:pt-0"
    >
      {/* Background Images / Gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10 py-12 md:py-20">
        {/* Video Section - Left (Swapped order on mobile usually, but keeping layout) */}
        <div className="order-2 md:order-1">
          <div
            className="relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
            onClick={() => setShowVideo(true)}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition blur-xl"></div>

            {!showVideo ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Video Banner"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition duration-300 shadow-2xl">
                     <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-l-[16px] border-l-black border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                     </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative bg-black rounded-2xl p-2 border border-white/10 shadow-2xl animate-in fade-in zoom-in-95">
                 <button 
                  onClick={(e) => { e.stopPropagation(); setShowVideo(false); }}
                  className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 z-20 shadow-lg"
                 >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                 </button>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9TH73IODdnY?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section - Right */}
        <div className="space-y-8 order-1 md:order-2">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider text-blue-400 uppercase mb-4">
              Premier Digital Marketing Agency
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Accelerate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Your Digital</span> <br />
              Success
            </h1>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Do you know what it takes to grow your business online? We do!
            Let's take your brand to the next level with our powerful digital
            marketing strategies.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/6282113506"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Let's Talk
            </a>
          </div>

          {/* Bottom Info Section */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">5.0</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-1 text-yellow-400 mb-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  Rated by 24K+ Clients
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-gray-900 flex items-center justify-center text-sm shadow-md">👨</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-gray-900 flex items-center justify-center text-sm shadow-md">👩</div>
                <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-gray-900 flex items-center justify-center text-sm shadow-md">👨</div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">100+</span>
                </div>
                <p className="text-xs text-gray-400">
                  Experts Driving Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
