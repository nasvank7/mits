import React from "react";

const capabilities = [
  {
    id: "01",
    title: "Data-Driven Strategies",
    description: "Leveraging analytics and market insights, we implement digital marketing solutions that drive growth and ROI."
  },
  {
    id: "02",
    title: "Higher Search Rankings",
    description: "Our SEO techniques improve search engine rankings and ensure better visibility & organic traffic."
  },
  {
    id: "03",
    title: "Increased Organic Traffic",
    description: "We optimize your website and content to attract quality visitors and turn them into customers."
  },
  {
    id: "04",
    title: "Improved Conversion Rates",
    description: "By improving user experience, we boost lead generation and maximize conversions."
  }
];

export const About: React.FC = () => {
  return (
    <section  className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">
              Capabilities
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Digital Strategies <br />
              <span className="text-gray-400">That Drive Results</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Mantra Infotech, we craft powerful market strategies that
              boost visibility and drive conversions. As the{" "}
              <span className="font-bold text-gray-900">
                Best Digital Marketing Agency Kochi
              </span>
              , we deliver tailored solutions through SEO, social media
              marketing, web development, video production, and targeted
              performance marketing campaigns.
            </p>

            {/* Progress Bar */}
            <div className="mt-12 bg-gray-50 p-6 rounded-2xl">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  Success rate
                </span>
                <span className="text-sm font-bold text-gray-900">90%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: "90%" }}
                >
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content*/}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {capabilities.map((item, index) => (
                <div key={item.id} className="relative pl-8 group">
                
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 overflow-hidden">
                    <div
                      className="w-full h-20 bg-black animate-marquee-line"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    ></div>
                  </div>

                  <span className="text-sm font-bold text-gray-400 group-hover:text-black transition-colors">{item.id}</span>
                  <h3 className="text-2xl font-bold mb-3 mt-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-line {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
        .animate-marquee-line {
          animation: marquee-line 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
