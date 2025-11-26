import React from "react";
import { FAQS } from "../constants";

interface FAQProps {
  items?: { q: string; a: string }[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const faqData = items || FAQS;

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">
            FREQUENTLY ASKED QUESTIONS (FAQS)
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Frequently As<br />ked<br />Questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, idx) => (
            <details key={idx} className="bg-white p-6 rounded-none border-b border-gray-200 group cursor-pointer transition duration-300">
              <summary className="font-bold text-lg list-none flex justify-between items-center text-gray-900">
                <span className="pr-8">{faq.q}</span>
                <span className="text-xl group-open:rotate-180 transition-transform duration-300 text-gray-400">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed overflow-hidden transition-[max-height] duration-500 ease-in-out">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};