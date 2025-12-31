import React from 'react';
import { motion } from 'framer-motion';
import { X, Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';

const MenuOverlay = ({ isOpen, onClose, socials }) => {
    const menuLinks = [
        { name: "Portfolio", href: "#portfolio", sub: "Selected Commissions" }, // Updated Name & Link
        { name: "Studio", href: "#studio", sub: "Philosophy & Team" },
        { name: "Capabilities", href: "#work", sub: "Technical Services" },
        { name: "Methodology", href: "#process", sub: "Process" },
        { name: "Inquiry", href: "#contact", sub: "Start Project" },
    ];

    const socialPlatforms = [
        { icon: Instagram, href: socials?.instagram },
        { icon: Twitter, href: socials?.twitter },
        { icon: Linkedin, href: socials?.linkedin },
        { icon: Youtube, href: socials?.youtube },
        { icon: Facebook, href: socials?.facebook },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : "-100%",
                pointerEvents: isOpen ? "auto" : "none"
            }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[100] bg-studio-dark/98 backdrop-blur-2xl flex flex-col justify-center px-12 lg:px-40"
        >
            <div className="absolute top-0 left-0 w-full p-10 lg:p-16 flex justify-between items-center">
                <div className="text-sm font-black tracking-[0.4em] text-white opacity-40 uppercase">
                    Studio Nexus // Navigation
                </div>
                <button
                    onClick={onClose}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-studio-lime hover:text-studio-navy transition-all duration-500 group cursor-pointer"
                >
                    <X size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <nav className="lg:col-span-8 flex flex-col space-y-3">
                    {menuLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            onClick={onClose}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="group flex items-center gap-10 py-1 cursor-pointer"
                        >
                            <span className="text-studio-lime font-mono text-[9px] tracking-widest opacity-40">
                                [ 0{i + 1} ]
                            </span>
                            <div className="relative">
                                <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight transition-all duration-500 group-hover:text-studio-lime group-hover:pl-4 group-hover:italic">
                                    {link.name}
                                </h2>
                                <div className="text-[9px] font-mono text-studio-slate uppercase tracking-[0.3em] mt-1 opacity-0 group-hover:opacity-100 transition-all ml-4">
                                    → {link.sub}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </nav>

                <div className="lg:col-span-4 hidden lg:flex flex-col space-y-12 border-l border-white/5 pl-20 py-10">
                    <div className="space-y-4">
                        <span className="text-studio-lime text-[10px] font-mono tracking-[0.5em] uppercase opacity-40">[ LOCATION ]</span>
                        <p className="text-white/80 text-sm font-bold leading-relaxed tracking-wide">
                            Honolulu, Hawaii <br />
                            <span className="text-studio-slate font-medium text-xs tracking-widest uppercase">999 Design Way, Studio 4A</span>
                        </p>
                    </div>

                    <div className="space-y-4">
                        <span className="text-studio-lime text-[10px] font-mono tracking-[0.5em] uppercase opacity-40">[ INQUIRIES ]</span>
                        <a href="mailto:studio@nexus.arch" className="text-white text-lg font-black tracking-tight hover:text-studio-lime transition-colors block border-b border-white/5 pb-2 w-fit cursor-pointer">
                            studio@nexus.arch
                        </a>
                    </div>

                    <div className="space-y-4">
                        <span className="text-studio-lime text-[10px] font-mono tracking-[0.5em] uppercase opacity-40">[ SOCIAL SYSTEMS ]</span>
                        <div className="flex gap-6">
                            {socialPlatforms.map((platform, index) => (
                                <a key={index} href={platform.href || "#"} target="_blank" rel="noreferrer" className="text-white/20 hover:text-studio-lime transition-all hover:-translate-y-1 cursor-pointer">
                                    <platform.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 text-[18vw] font-black text-white/[0.01] select-none pointer-events-none uppercase italic leading-none">
                NXS.
            </div>
        </motion.div>
    );
};

export default MenuOverlay;