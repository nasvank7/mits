import React, { useEffect, useRef, useState } from "react";

export const BoldCreative: React.FC = () => {
  const expRef = useRef(null);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting(15); 
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (expRef.current) observer.observe(expRef.current);
  }, []);

  const startCounting = (target:number) => {
    let count = 0;
    const speed = 50; 

    const interval = setInterval(() => {
      count++;
      setYears(count);

      if (count === target) clearInterval(interval);
    }, speed);
  };

  return (
    <>
      {/* We are Bold & Creative Section */}
      <section id="about" className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Images Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl overflow-hidden aspect-square transform translate-y-8">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
                    alt="Digital Strategy"
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&q=80"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gray-800 rounded-2xl overflow-hidden aspect-square transform translate-y-8">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                    alt="Creative Work"
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80"
                    alt="Business Meeting"
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-sm font-bold text-gray-500 mb-6 tracking-widest uppercase">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                We are Bold & Creative
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-500 mb-8">
                Digital Experts
              </h3>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  At MITS Digital Infotech, we are a full-stack digital agency
                  driven by innovation and creativity. With expertise in web
                  development, SEO, social media marketing, and brand strategy,
                  we help businesses thrive in the digital world.
                </p>
                <p>
                  We blend technology, design, and marketing to craft
                  experiences that engage and convert. From SEO strategies to
                  creative branding, we deliver results that align with your
                  go-to place for tech digital growth.
                </p>
                <p>
                  Our mission is to deliver success, built and solve that not
                  only solve challenges but also unlock new opportunities.
                </p>
              </div>

              <div className="mt-10">
                <button className="border border-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-white hover:text-black transition duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <p className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-6">
                Why Choose Us
              </p>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                Why Choose Us
              </h2>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                At MITS, we bring together innovation, strategy, and execution
                to help your brand thrive in the digital world. Here's what sets
                us apart:
              </p>

              <div className="space-y-2">
                {[
                  "Full-Stack Digital Solutions",
                  "Agile, Collaborative, and Client-Centric",
                  "Proven Industry Experience",
                  "End-to-End Project Ownership",
                  "Where Creativity Meets Technology",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 py-6 flex items-center justify-between group cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold text-gray-700 group-hover:text-black transition">
                      {item}
                    </h3>
                    <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition duration-300">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stats */}
            <div className="lg:pt-32">
              <div className="space-y-12">
                {/* Expertise Teams */}
                <div>
                  <div className="flex -space-x-4 mb-6">
                    <img
                      className="w-16 h-16 rounded-full border-4 border-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                      alt="Team"
                    />
                    <img
                      className="w-16 h-16 rounded-full border-4 border-white object-cover"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80"
                      alt="Team"
                    />
                    <img
                      className="w-16 h-16 rounded-full border-4 border-white object-cover"
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80"
                      alt="Team"
                    />
                    <div className="w-16 h-16 rounded-full border-4 border-white bg-black text-white flex items-center justify-center font-bold text-sm">
                      +20
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                    Expertise teams
                  </p>
                  <p className="text-6xl font-bold text-gray-900">100+</p>
                </div>

                {/* Years of Experience */}
                <div ref={expRef}>
                  <p className="text-[10rem] leading-none font-bold text-gray-400 mb-[-2rem] select-none">
                    {years}+
                  </p>

                  <div className="bg-black text-white px-8 py-4 inline-block relative z-10 rounded-r-full">
                    <p className="text-xl font-bold">Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
