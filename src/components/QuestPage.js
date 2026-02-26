"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, CheckCircle2, PlayCircle, BookOpen,
    FileText, Paperclip, CheckSquare, ChevronDown, Moon, Sun
} from 'lucide-react';

const ResourceCard = ({ icon, title, meta, isDark }) => (
    <div className={`border ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-100 bg-white'} p-3 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all`}>
        <div className="text-blue-500 mb-1">{icon}</div>
        <h4 className={`text-[10px] font-bold mb-1 leading-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{title}</h4>
        <p className="text-[8px] text-slate-400 mb-2">{meta}</p>
        <button className="w-full py-1 text-[9px] font-bold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
            Open Resource
        </button>
    </div>
);

export default function QuestPage() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDark, setIsDark] = useState(false);

    const toggleOption = (id) => {
        setSelectedOptions(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const challengeOptions = [
        { id: 1, text: "Minimum 300 words" },
        { id: 2, text: "Explain why each KPI is important" },
        { id: 3, text: "Use measurable metrics" }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-500 p-4 md:p-6 font-sans ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>

            {/* HEADER */}
            <div className={`max-w-6xl mx-auto flex justify-between items-center mb-6 px-5 py-3 rounded-xl shadow-sm border transition-colors duration-500 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-md shadow-sm">
                            <CheckSquare size={16} className="text-white" />
                        </div>
                        <h1 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>Banex AI</h1>
                    </div>
                    <nav className="hidden md:flex gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                        <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Growth Map</a>
                        <a href="#">Portfolio</a>
                    </nav>
                </div>

                <div className="flex gap-4 items-center text-[11px] font-bold">
                    <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full transition-colors ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <span className="text-green-500 hidden sm:flex items-center gap-1">🟢 42 Streak</span>
                    <span className="text-orange-500 flex items-center gap-1">42 🔥 Streak</span>
                    <div className="w-7 h-7 rounded-full bg-slate-200 border border-slate-100 overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Admin&background=random" alt="User" />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* MAIN CONTENT */}
                <div className={`lg:col-span-8 rounded-xl shadow-sm border p-6 md:p-8 transition-colors duration-500 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <h2 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>Design KPIs for a Fintech Startup</h2>
                    <div className="flex gap-4 text-[10px] text-slate-400 mb-6 font-medium">
                        <span>Skill: Data Analysis | Technical</span>
                        <span>Reward: <span className="text-green-600 font-bold">+120 XP</span> | Time: 60-90 mins</span>
                    </div>

                    <div className="mb-6">
                        <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Why This Matters</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            Product Managers must define measurable KPIs that align with business outcomes. Employers assess this skill heavily.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className={`text-sm font-bold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Recommended Resources</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <ResourceCard isDark={isDark} icon={<PlayCircle size={16} />} title="Introduction to KPIs" meta="Video · 12 min" />
                            <ResourceCard isDark={isDark} icon={<BookOpen size={16} />} title="Metrics That Matter" meta="Course · 45 min" />
                            <ResourceCard isDark={isDark} icon={<FileText size={16} />} title="Fintech KPIs Guide" meta="Article · 15 min" />
                        </div>
                    </div>

                    {/* DAY ONE ACCORDION (Everything is now inside here) */}
                    <div className={`mb-6 border rounded-lg overflow-hidden transition-colors ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                        <button
                            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                            className={`w-full flex justify-between items-center px-4 py-3 transition-colors ${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'}`}
                        >
                            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wide">Day One</h3>
                            <motion.div animate={{ rotate: isAccordionOpen ? 180 : 0 }} transition={{ duration: 0.4 }}>
                                <ChevronDown size={16} className="text-slate-400" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isAccordionOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <div className={`px-4 pb-4 pt-2 border-t ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                                        <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                                            Assume you are a Product Manager at a fintech startup offering instant loans. Define 5 KPIs that measure business health.
                                        </p>

                                        {/* Clickable checklist items */}
                                        <ul className="space-y-1.5 mb-6">
                                            {challengeOptions.map((option) => (
                                                <li
                                                    key={option.id}
                                                    onClick={() => toggleOption(option.id)}
                                                    className={`flex items-center gap-3 px-2 py-1.5 rounded-md cursor-pointer transition-all border ${selectedOptions.includes(option.id)
                                                            ? "bg-green-500/10 border-green-500/30 text-green-500 shadow-sm"
                                                            : isDark ? "bg-slate-800/40 border-transparent text-slate-400" : "bg-white border-transparent text-slate-500 hover:bg-slate-50"
                                                        }`}
                                                >
                                                    <CheckCircle2 size={13} className={selectedOptions.includes(option.id) ? "text-green-500" : "text-slate-300"} />
                                                    <span className="text-[10px] font-medium">{option.text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* MOVED: Your Response Section is now here */}
                                        <div className="mt-4 border-t pt-4 border-slate-100">
                                            <h3 className={`text-[11px] font-bold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Your Response</h3>
                                            <textarea
                                                className={`w-full h-24 p-3 border rounded-lg text-xs outline-none resize-none transition-colors ${isDark ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:ring-1 focus:ring-blue-500'}`}
                                                placeholder="Type your KPIs and justifications here..."
                                            ></textarea>
                                            <div className="flex justify-between items-center mt-3">
                                                <button className="flex items-center gap-2 text-[10px] text-slate-400 hover:text-blue-600 font-medium">
                                                    <Paperclip size={14} /> Attach File (Optional)
                                                </button>
                                                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg font-bold text-[11px] hover:bg-blue-700 shadow-sm transition-transform active:scale-95">
                                                    Submit for Evaluation
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* SIDEBAR */}
                <div className="lg:col-span-4 space-y-4">
                    <SidebarCard isDark={isDark} title="14-Day Growth Streak" icon="🔥">
                        <div className="w-full bg-slate-700 h-1 rounded-full mb-1.5 mt-2">
                            <motion.div initial={{ width: 0 }} animate={{ width: '25%' }} transition={{ duration: 1.5 }} className="bg-green-500 h-1 rounded-full" />
                        </div>
                        <p className="text-[9px] font-bold text-slate-400">Streak: 04 / 30 Days</p>
                    </SidebarCard>

                    <SidebarCard isDark={isDark} title="Skill Progress" icon="📈">
                        <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-green-500">
                            <CheckCircle2 size={13} /> Data Analysis: 45% Complete
                        </div>
                        <ul className="space-y-2 text-[10px] text-slate-500">
                            <li className="flex items-center gap-2 opacity-60"><CheckCircle2 size={12} className="text-green-500" /> Metrics Framework</li>
                            <li className="flex items-center gap-2 text-slate-400 font-bold"><CheckCircle2 size={12} className="text-green-500" /> KPI Design (Current)</li>
                            <li className="flex items-center gap-2 opacity-40"><Clock size={12} /> A/B Testing</li>
                        </ul>
                    </SidebarCard>

                    <div className={`p-4 rounded-xl border transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                        <h3 className={`font-bold text-[10px] mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>Time Remaining</h3>
                        <div className="bg-orange-500/10 text-orange-500 py-1.5 rounded-lg flex items-center justify-center font-bold text-xs border border-orange-500/20">
                            22h 14m
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const SidebarCard = ({ children, title, icon, isDark }) => (
    <div className={`p-4 rounded-xl shadow-sm border transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-500 text-xs">{icon}</span>
            <h3 className={`font-bold text-[10px] uppercase tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{title}</h3>
        </div>
        {children}
    </div>
);