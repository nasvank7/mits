import React from "react";
import { SERVICES_DATA } from "../constants";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">
            OUR SERVICES
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Finding the right digital marketing team to deliver measurable
                success can be challenging but we make it easy
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-gray-600 mb-6 text-lg">
                We specialize in SEO, social media marketing, content strategy,
                and performance-based digital solutions.
              </p>
              <div className="space-y-3">
                {[
                  "Increased Website Traffic",
                  "Higher Search Rankings",
                  "Improved Conversion Rates",
                  "Sales",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-gray-400">→</span>
                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1">
                  <span className="text-2xl font-bold text-gray-300 group-hover:text-black transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="md:col-span-3 flex justify-end items-center gap-6">
                  <div className="w-32 h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition duration-300">
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex -space-x-3">
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
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg hover:shadow-xl">
            Contact us Now
          </button>
        </div>
      </div>
    </section>
  );
};
