import React from 'react';
import { motion } from 'framer-motion';

const PortfolioStudio = ({ data }) => {
    return (
        <section id="portfolio" className="py-24 bg-studio-navy">
            <div className="max-w-7xl mx-auto px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {data.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden bg-studio-dark ${index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5'
                                }`}
                        >
                            <div className="aspect-[16/10] md:aspect-auto md:h-[500px] w-full relative">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />

                                {/* Technical Overlay */}
                                <div className="absolute inset-0 bg-studio-royal/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <span className="text-studio-lime font-mono text-xs tracking-widest bg-studio-navy/80 px-3 py-1">
                                            {project.id}
                                        </span>
                                        <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest hidden lg:block">
                                            {project.location} // HI
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">
                                            {project.title}
                                        </h3>
                                        <p className="text-studio-lime text-xs font-bold uppercase tracking-[0.3em]">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PortfolioStudio;