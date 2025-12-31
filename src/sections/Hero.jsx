import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextScramble from '../components/TextScramble';

const Hero = ({ data }) => {
    const [index, setIndex] = useState(0);
    const SLIDE_DURATION = 8000; // 8 Seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.titles.length);
        }, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, [data.titles.length]);

    return (
        <section id='home' className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden bg-studio-navy">

            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-center px-12 lg:px-24 pt-32 pb-16 bg-studio-navy relative z-10 font-black uppercase italic tracking-tighter">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    className="h-[2px] bg-studio-lime mb-12"
                />

                <div className="h-[180px] lg:h-[220px]">
                    <h1 className="text-6xl lg:text-8xl leading-[0.9] mb-8 text-white">
                        <TextScramble text={data.titles[index].main} /> <br />
                        <span className="text-studio-slate">
                            <TextScramble text={data.titles[index].sub} />
                        </span>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/60 text-lg lg:text-xl font-medium mb-12 max-w-sm leading-relaxed normal-case not-italic tracking-normal"
                >
                    {data.subheading}
                </motion.p>

                <button className="bg-studio-lime text-studio-navy w-fit px-10 py-5 font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-2xl shadow-studio-lime/20 cursor-pointer">
                    {data.buttonText}
                </button>
            </div>

            {/* Right Column: Imagery Side */}
            <div className="lg:col-span-7 relative bg-studio-dark overflow-hidden group cursor-crosshair border-l border-white/5">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={data.images[index % data.images.length]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-studio-royal/20 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-0"></div>

                {/* SLOWER PROGRESS BAR */}
                <div
                    className="absolute bottom-0 left-0 h-1 bg-studio-lime z-30 transition-all linear"
                    style={{
                        width: '100%',
                        transitionDuration: `${SLIDE_DURATION}ms`
                    }}
                    key={`timer-${index}`}
                />

                {/* REFINED TECHNICAL INDEX (Replacing the 04 box) */}
                <div className="absolute bottom-16 right-16 z-20 group-hover:translate-x-[-10px] transition-all duration-700">
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <div className="text-studio-lime font-mono text-[9px] tracking-[0.5em] uppercase mb-1 opacity-50">Phase</div>
                            <div className="text-white text-4xl font-black tracking-tighter tabular-nums leading-none">
                                0{index + 1}
                            </div>
                        </div>

                        {/* Vertical Progress Line */}
                        <div className="h-10 w-[1px] bg-white/10 relative">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-studio-lime"
                                initial={{ height: "0%" }}
                                animate={{ height: "100%" }}
                                key={`line-${index}`}
                                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                            />
                        </div>

                        {/* Total Count */}
                        <div className="text-white/20 font-black text-lg leading-none self-end pb-1">
                            0{data.titles.length}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;