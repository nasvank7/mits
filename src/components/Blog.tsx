import React from "react";
import { BLOG_POSTS } from "../constants";

export const Blog: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">
              BLOG
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Insights &<br />
              Innovations
            </h2>
          </div>

          <div className="lg:pt-8 flex flex-col items-start justify-end">
            <p className="text-gray-600 leading-relaxed mb-8 text-lg max-w-xl">
              Unlock the latest trends, expert strategies, and success stories
              in Digital Marketing Agency Kerala, Stay informed and ahead of
              the curve.
            </p>
            <button className="border-2 border-black px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition duration-300">
              View All Posts
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <div key={idx} className="bg-gray-900 text-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col">
              <div className="aspect-[16/10] bg-gray-800 overflow-hidden relative">
                 <img src={`https://picsum.photos/600/400?random=${idx + 10}`} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-80"/>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                     <span className="inline-block bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {post.tag}
                    </span>
                    <p className="text-xs text-gray-400">{post.readTime}</p>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-blue-400 transition flex-1">
                  {post.title}
                </h3>
                <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                    <p className="text-sm text-gray-400">{post.date}</p>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
