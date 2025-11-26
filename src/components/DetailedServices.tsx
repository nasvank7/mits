import React from "react";
import { DETAILED_SERVICES } from "../constants";
import { Lightbulb } from "lucide-react";

export const DetailedServices: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        {DETAILED_SERVICES.map((service) => (
          <div key={service.id} className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Conditional Order based on layout prop */}
            <div className={`space-y-6 ${service.layout === 'image-left' ? 'lg:order-2' : 'lg:order-1'}`}>
              <span className="text-sm font-bold text-gray-500 tracking-widest uppercase block mb-2">{service.id}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
              
              {service.subTitle && (
                <div className="pt-4">
                  <h4 className="font-bold text-gray-800 mb-4">{service.subTitle}</h4>
                  <div className="space-y-4">
                    {service.list.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0 text-orange-500">
                          <Lightbulb size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{item.title} -</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="pt-4">
                 <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition duration-300">
                    →
                 </button>
              </div>
            </div>

            <div className={`relative ${service.layout === 'image-left' ? 'lg:order-1' : 'lg:order-2'}`}>
               <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
               </div>
               
               {/* Decorative Element */}
               <div className={`absolute -z-10 w-full h-full border-2 border-gray-100 rounded-3xl top-4 ${service.layout === 'image-left' ? '-left-4' : '-right-4'}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};