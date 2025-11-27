import React from "react";

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <p className="text-sm font-bold text-gray-500 mb-2 tracking-widest uppercase">CASE STUDIES</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Our exclusive<br/>
                    <span className="text-gray-500">case studies</span>
                </h2>
            </div>
            <div>
                 <a href="#" className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 transition">View all Stories</a>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
      
            <div className="group relative h-[500px] overflow-hidden bg-black">
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                    alt="Content Marketing" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <span className="text-5xl font-bold">03</span>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition duration-300">Content<br/>Marketing</h3>
                    </div>
                </div>
            </div>

          
            <div className="group relative h-[500px] overflow-hidden bg-black">
                <img 
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80" 
                    alt="SEO Marketing" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <span className="text-5xl font-bold">01</span>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition duration-300">SEO<br/>Marketing</h3>
                    </div>
                </div>
            </div>

            <div className="group relative h-[500px] overflow-hidden bg-black">
                <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80" 
                    alt="Email Marketing" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <span className="text-5xl font-bold">02</span>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition duration-300">Email<br/>Marketing</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};