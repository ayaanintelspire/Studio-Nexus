import React from 'react';
import { motion } from 'framer-motion';

const AboutStudio = ({ data }) => {
    return (
        <section id="studio" className="py-24 bg-studio-navy border-t border-white/5 relative">
            {/* Decorative vertical blueprint line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left: Heading & Small Label */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 text-studio-lime font-mono text-xs tracking-[0.4em]">
                        <span className="w-8 h-[1px] bg-studio-lime"></span>
                        {data.title}
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight uppercase italic">
                        {data.heading}
                    </h2>
                </div>

                {/* Right: Description & Technical Stats */}
                <div className="flex flex-col justify-between">
                    <p className="text-studio-slate text-xl leading-relaxed mb-16 max-w-lg">
                        {data.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
                        {data.stats.map((stat, i) => (
                            <div key={i} className="group">
                                <div className="text-studio-lime text-3xl font-black mb-2 group-hover:translate-x-2 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStudio;