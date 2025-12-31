import React, { useState, useEffect } from 'react';
import MenuOverlay from './MenuOverlay';
import { studioData } from '../data/studioData';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 px-8 lg:px-16 flex justify-between items-center transition-all duration-700 ${isScrolled
                ? 'py-6 bg-studio-navy/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
                : 'py-12 bg-transparent'
                }`}>

                {/* 1. BIG LOGO */}
                <div className="flex flex-col leading-none cursor-pointer group">
                    <span className="text-2xl lg:text-3xl font-black tracking-tighter text-white">
                        STUDIO <span className="text-studio-lime italic">NEXUS</span>
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase mt-1 group-hover:text-studio-lime transition-colors">
                        Architectural Engineering
                    </span>
                </div>

                {/* 2. BIG BOLD NAV LINKS (Added Home) */}
                <div className="hidden xl:flex gap-12 items-center">
                    {[
                        { name: 'Home', hr: '#home' },
                        { name: 'Portfolio', hr: '#portfolio' },
                        { name: 'Studio', hr: '#studio' },
                        { name: 'Process', hr: '#process' },
                        { name: 'Inquire', hr: '#contact' }
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.hr}
                            className="group relative text-sm font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all"
                        >
                            <span className="relative z-10">{link.name}</span>
                            {/* Animated thick underline */}
                            <span className="absolute bottom-[-8px] left-0 w-0 h-[3px] bg-studio-lime transition-all duration-500 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* 3. SUBSTANTIAL MENU TRIGGER */}
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="group flex items-center gap-4 cursor-pointer"
                    >
                        <div className="hidden sm:flex flex-col gap-2 items-end">
                            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-studio-lime group-hover:text-white transition-colors">
                                Open Menu
                            </div>
                            <div className="w-12 h-[2px] bg-white/20 group-hover:w-16 group-hover:bg-studio-lime transition-all duration-500"></div>
                        </div>

                        <div className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-white group-hover:border-studio-lime group-hover:text-studio-lime transition-all duration-500 bg-white/5 backdrop-blur-sm">
                            <span className="text-xl font-light font-mono">//</span>
                        </div>
                    </button>
                </div>
            </nav>

            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                socials={studioData.socialLinks}
            />
        </>
    );
};

export default Navbar;