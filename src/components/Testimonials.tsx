import React from "react";

export const Testimonials: React.FC = () => {
  return (
    <>
      {/* Parallax / Innovate Banner */}
      <section className="relative py-40 px-4 text-white overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80")' }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Innovate, Design,
              <br />
              Amplify
            </h2>
          </div>
        </div>
      </section>

      {/* Testimonial & Stats Section */}
      <section className="relative py-24 px-4 text-white overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 z-0"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Testimonial Card */}
            <div className="bg-gray-800/50 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="absolute -top-6 -left-6 text-8xl text-blue-500 opacity-20 font-serif">"</div>
              <div className="mb-8">
                <p className="text-xl leading-relaxed font-light text-gray-200 italic">
                  "MITS has been a brilliant support team for our expert digital
                  marketing needs. With their skilled team they get results, our
                  organic traffic has increased highly recommend."
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Client" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Dr Jason Gentry</p>
                  <p className="text-blue-400 text-sm">CEO, TechCorp</p>
                </div>
              </div>

              <div className="flex gap-2 mt-8 justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer transition"></div>
                <div className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer transition"></div>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="lg:pl-12">
              <div className="mb-12">
                <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">
                  IMPACT
                </p>
                <h3 className="text-5xl font-bold mb-6">
                  What Our<br />
                  Clients Say <span className="text-gray-600">About Us</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Hear from our satisfied clients who have experienced
                  exceptional service and outstanding results.
                </p>
              </div>

              <div className="flex gap-12">
                <div>
                  <p className="text-6xl font-bold mb-2 text-white">25K+</p>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div>
                  <p className="text-6xl font-bold mb-2 text-white">98%</p>
                  <p className="text-gray-400">Retention Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
