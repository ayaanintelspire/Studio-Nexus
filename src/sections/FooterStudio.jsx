import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';

const FooterStudio = ({ data, socials }) => {
    const socialItems = [
        { icon: Instagram, href: socials?.instagram },
        { icon: Twitter, href: socials?.twitter },
        { icon: Linkedin, href: socials?.linkedin },
        { icon: Youtube, href: socials?.youtube },
        { icon: Facebook, href: socials?.facebook },
    ];

    return (
        <footer id="contact" className="bg-studio-navy pt-20 pb-12 border-t border-white/5 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.01] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start"> {/* Changed to 4 columns */}

                    {/* 1. BRAND COLUMN */}
                    <div className="space-y-4 uppercase">
                        <div className="text-2xl font-black italic tracking-tighter leading-none mb-4">
                            Studio <span className="text-studio-lime">Nexus</span>
                        </div>
                        <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.5em] leading-relaxed italic">
                            Architectural Engineering <br />
                            Selected Works // Vol. 01
                        </div>
                    </div>

                    {/* 2. NAVIGATION COLUMN (New Addition) */}
                    <div className="border-l border-white/5 pl-10">
                        <div className="text-[10px] text-studio-lime font-mono uppercase mb-4 tracking-[0.3em] opacity-60">
                            [ STUDIO ]
                        </div>
                        <ul className="space-y-2">
                            {/* Ensured Portfolio is here */}
                            <li><a href="#portfolio" className="text-white/60 hover:text-studio-lime text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer">Portfolio</a></li>
                            <li><a href="#studio" className="text-white/60 hover:text-studio-lime text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer">Philosophy</a></li>
                            <li><a href="#work" className="text-white/60 hover:text-studio-lime text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer">Services</a></li>
                            <li><a href="#process" className="text-white/60 hover:text-studio-lime text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer">Process</a></li>
                        </ul>
                    </div>

                    {/* 3. CONTACT SYSTEM */}
                    <div className="border-l border-white/5 pl-10">
                        <div className="group mb-8">
                            <div className="text-[10px] text-studio-lime font-mono uppercase mb-3 tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
                                [ EMAIL ]
                            </div>
                            <a href={`mailto:${data.email}`} className="text-white text-sm font-bold uppercase tracking-tight hover:text-studio-lime transition-colors cursor-pointer">
                                {data.email}
                            </a>
                        </div>
                        <div className="group">
                            <div className="text-[10px] text-studio-lime font-mono uppercase mb-3 tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
                                [ LOCATION ]
                            </div>
                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                                {data.address}
                            </p>
                        </div>
                    </div>

                    {/* 4. REFINED SOCIALS */}
                    <div className="flex flex-col items-end border-l border-white/5 pl-10 hidden lg:flex">
                        <div className="text-[10px] text-studio-lime font-mono uppercase mb-6 tracking-[0.3em] opacity-60">
                            [ SYSTEMS ]
                        </div>
                        <div className="flex gap-3">
                            {socialItems.map(({ icon: Icon, href }, idx) => (
                                <a key={idx} href={href || "#"} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-studio-lime hover:border-studio-lime hover:-translate-y-1 transition-all cursor-pointer">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px]">
                    <p className="text-white/10 uppercase tracking-[0.8em] font-black italic">
                        © 2025 Studio Nexus // Design Excellence
                    </p>
                    <div className="flex gap-10 text-white/30 uppercase tracking-widest font-bold">
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterStudio;