import React from "react";
import { TEAM_MEMBERS } from "../constants";

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
        <div className="lg:sticky lg:top-32">

            <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">
              TEAM
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              The Minds Behind Your <br />
              <span className="text-gray-400">Digital Growth</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
              A dynamic team of creative strategists and digital experts
              committed to delivering innovative solutions, driving brand
              growth, and achieving impactful results.
            </p>

            <div className="mt-12">
              <p className="text-8xl font-bold text-gray-200 mb-2">60+</p>
              <p className="text-gray-900 font-bold text-xl">
                Industry Specialists
              </p>
            </div>
          </div>

          {/* Right - Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 lg:pt-0">
            {TEAM_MEMBERS.map((member, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${index === 1 ? 'mt-12 sm:mt-24' : ''} ${index === 2 ? 'sm:-mt-24' : ''}`}
              >
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{member.role}</p>
                </div>
              </div>
            ))}
             
             {/* Join Us Card */}
             <div className="bg-black rounded-2xl overflow-hidden shadow-lg flex items-center justify-center aspect-[3/4] sm:-mt-12 text-center p-6 group cursor-pointer hover:bg-gray-900 transition">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Join Us</h3>
                    <p className="text-gray-400 mb-6">We are hiring!</p>
                    <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto text-xl font-bold group-hover:scale-125 transition">→</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
