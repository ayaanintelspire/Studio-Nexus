import React from 'react';

const MethodologyStudio = ({ data }) => {
    return (
        <section id="process" className="py-24 bg-studio-dark relative overflow-hidden">
            {/* Background large text */}
            <div className="absolute top-1/2 left-0 w-full text-center text-[20vw] font-black text-white/[0.02] -translate-y-1/2 pointer-events-none">
                METHOD
            </div>

            <div className="max-w-4xl mx-auto px-12 relative z-10">
                <div className="space-y-32">
                    {data.map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-12 group">
                            <div className="text-studio-lime font-mono text-xs pt-2">
                                [ {item.phase} ]
                            </div>
                            <div className="space-y-6 flex-1">
                                <h3 className="text-5xl lg:text-7xl font-black text-white italic group-hover:translate-x-4 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-studio-slate text-xl leading-relaxed max-w-lg">
                                    {item.desc}
                                </p>
                                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-studio-lime w-0 group-hover:w-full transition-all duration-1000"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MethodologyStudio;