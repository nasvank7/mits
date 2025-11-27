import React from "react";
import { BigCTA } from "../components/BigCTA";
import { DetailedServices } from "../components/DetailedServices";
import { CaseStudies } from "../components/CaseStudies";
import { FAQ } from "../components/FAQ";
import { SERVICES_PAGE_FAQS } from "../constants";

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
     
      <section className="bg-black text-white pt-40 pb-24 px-4 relative overflow-hidden">
     
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-black opacity-90"></div>
           
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px]"></div>
          
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform rotate-12"></div>
            <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent transform -rotate-6"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
           <div>
             <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gray-500"></div>
                <span className="text-sm font-bold tracking-wide text-gray-300">Premier Digital Marketing Agency</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Our services</h1>
           </div>
           
          
           <div className="hidden md:block mb-4">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
           </div>
        </div>
      </section>

 
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
             <div className="mb-8">
                <p className="text-sm font-bold text-gray-500 mb-2 tracking-widest uppercase">OUR SERVICES</p>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
                    Finding the right digital marketing team to deliver measurable success can be challenging but we make it easy
                </h2>
             </div>
             <div className="grid md:grid-cols-2 gap-12 mt-12">
                 <div className="space-y-4">
                     {["Increased Website Traffic", "Higher Search Rankings", "Better Conversion Rates"].map((item, i) => (
                         <div key={i} className="text-sm font-bold text-gray-600">{item}</div>
                     ))}
                 </div>
                 <div>
                     <p className="text-gray-600 leading-relaxed">
                        We specialize in SEO, social media marketing, content strategy, and performance-based digital solutions.
                     </p>
                 </div>
             </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <DetailedServices />

    
      <section className="relative h-[600px] flex items-center px-4 text-white overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              Innovate, Design, A<br />
              mplify
            </h2>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* FAQ */}
      <FAQ items={SERVICES_PAGE_FAQS} />

      <BigCTA />
    </div>
  );
};