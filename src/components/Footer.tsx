import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS } from "../constants";

export const Footer: React.FC = () => {
  return (
    <>
      <section id="contact" className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6">Social Media</h3>
              <div className="space-y-4 text-gray-600">
                {['Facebook', 'X', 'Instagram', 'Youtube', 'Whatsapp', 'Linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex items-center gap-2 hover:text-black hover:translate-x-1 transition-all duration-300"
                  >
                    <span>{social}</span>
                    {social !== 'Whatsapp' && social !== 'Youtube' && <span className="text-sm">↗</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <div className="space-y-4">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 hover:text-black transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Important Link */}
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 hover:text-black transition">Email Marketing</a>
                <a href="#" className="block text-gray-600 hover:text-black transition">Seo Marketing</a>
                <a href="#" className="block text-gray-600 hover:text-black transition">Content Marketing</a>
                <a href="#" className="block text-gray-600 hover:text-black transition">Web Development</a>
              </div>
            </div>

            {/* Help Center */}
            <div>
              <h3 className="text-xl font-bold mb-6">Help Center</h3>
              <div className="space-y-4">
                <a href="tel:+916282113506" className="flex items-center gap-3 text-gray-600 hover:text-black transition group">
                  <span className="p-2 bg-gray-200 rounded-full group-hover:bg-black group-hover:text-white transition"><Phone size={16}/></span>
                  <span>+91 62821 13506</span>
                </a>
                <a href="mailto:info@mantraitsolutions.in" className="flex items-center gap-3 text-gray-600 hover:text-black transition group">
                  <span className="p-2 bg-gray-200 rounded-full group-hover:bg-black group-hover:text-white transition"><Mail size={16}/></span>
                  <span>info@mantraitsolutions.in</span>
                </a>
                <div className="flex items-start gap-3 text-gray-600 group cursor-default">
                  <span className="p-2 bg-gray-200 rounded-full mt-1 group-hover:bg-black group-hover:text-white transition"><MapPin size={16}/></span>
                  <span>Infopark TBC Kochi, Kerala.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-sm">
              © Copyright 2025. All Rights Reserved.
            </div>

            <div className="text-3xl font-bold">mits</div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-600 hover:text-black transition">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-black transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
