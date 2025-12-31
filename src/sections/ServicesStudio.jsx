import React from 'react';

const ServicesStudio = ({ data }) => {
    return (
        <section id="work" className="py-24 bg-studio-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-12">

                <div className="mb-20 flex justify-between items-end">
                    <h2 className="text-6xl lg:text-8xl font-black text-white opacity-10 leading-none">CAPABILITIES</h2>
                    <div className="text-studio-lime text-xs font-mono tracking-widest">[ SELECTION // 06 ]</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
                    {data.map((service) => (
                        <div
                            key={service.id}
                            className="group border-b border-white/10 py-10 flex justify-between items-center hover:bg-studio-lime/5 px-4 transition-all"
                        >
                            <div className="flex gap-8 items-center">
                                <span className="text-studio-slate text-xs font-mono">{service.id}</span>
                                <div>
                                    <h3 className="text-2xl font-black text-white group-hover:text-studio-lime transition-colors uppercase">
                                        {service.title}
                                    </h3>
                                    <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase mt-2">
                                        {service.category}
                                    </p>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-studio-lime group-hover:text-studio-lime transition-all rotate-45 group-hover:rotate-90">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesStudio;