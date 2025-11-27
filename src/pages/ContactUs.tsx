import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { BigCTA } from "../components/BigCTA";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll be in touch soon.");
    setFormData({ fullName: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-black text-white pt-40 pb-24 px-4 relative overflow-hidden">
      
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-black opacity-90"></div>
           
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform rotate-12"></div>
            <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent transform -rotate-6"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
           <div>
             <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gray-500"></div>
                <span className="text-sm font-bold tracking-wide text-gray-300">Premier Digital Marketing Agency</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Contact us</h1>
           </div>
       
           <div className="hidden md:block mb-4">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
                <p className="uppercase text-xs font-bold tracking-widest text-gray-500 mb-3">CONTACT US</p>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-800">We will get back to you</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
                {/* Left Column: Contact Details */}
                <div className="space-y-12 pt-4">
                    <div className="group flex items-start gap-6">
                        <div className="mt-1">
                             <MapPin className="w-8 h-8 text-black" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900">Address</h3>
                            <p className="text-gray-600 text-lg font-medium">Infopark TBC Kochi, Kerala.</p>
                        </div>
                    </div>
                    
                    <div className="group flex items-start gap-6">
                        <div className="mt-1">
                             <Phone className="w-8 h-8 text-black" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900">Phone</h3>
                            <p className="text-gray-600 text-lg font-medium">+91 62821 13506</p>
                        </div>
                    </div>

                    <div className="group flex items-start gap-6">
                        <div className="mt-1">
                             <Mail className="w-8 h-8 text-black" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900">Email</h3>
                            <p className="text-gray-600 text-lg font-medium">info@mantraitsolutions.in</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div>
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Send Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-2">
                            <label className="block text-sm text-gray-500 font-medium">Full Name</label>
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName} 
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors bg-transparent text-lg"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm text-gray-500 font-medium">Phone</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors bg-transparent text-lg"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm text-gray-500 font-medium">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors bg-transparent text-lg"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your Message..."
                                rows={4}
                                className="w-full bg-gray-50 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-black text-gray-700 resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-black text-white py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition shadow-lg"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      <BigCTA />
    </div>
  );
};