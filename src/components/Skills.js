'use client';

import { useState } from 'react';
import { FileCode, Globe, Layout, Palette, Code2, GitBranch, Gauge, Database, Users } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('hard');

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Required Skills</h2>
      </div>

      <div className="bg-gray-100 p-1 rounded-lg flex mb-6">
        <button
          onClick={() => setActiveTab('hard')}
          className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'hard'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-900'
            }`}
        >
          Hard Skills
        </button>
        <button
          onClick={() => setActiveTab('soft')}
          className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'soft'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-900'
            }`}
        >
          Soft Skills
        </button>
      </div>

      <div className="space-y-3">
        {activeTab === 'hard' ? (
          <>
            <SkillItem icon={<FileCode className="w-5 h-5 text-orange-500" />} title="HTML & CSS" />
            <SkillItem icon={<Code2 className="w-5 h-5 text-yellow-500" />} title="JavaScript (ES6+)" />
            <SkillItem icon={<Layout className="w-5 h-5 text-blue-500" />} title="Responsive Design" />
            <SkillItem icon={<Globe className="w-5 h-5 text-sky-500" />} title="React" />
            <SkillItem icon={<GitBranch className="w-5 h-5 text-red-500" />} title="Version Control (Git)" />
            <SkillItem icon={<Gauge className="w-5 h-5 text-green-500" />} title="Web Performance Optimization" />
            <SkillItem icon={<Database className="w-5 h-5 text-gray-600" />} title="RESTful APIs" />
          </>
        ) : (
          <>
            <SkillItem icon={<Users className="w-5 h-5 text-purple-500" />} title="Communication" />
            <SkillItem icon={<Users className="w-5 h-5 text-pink-500" />} title="Teamwork" />
            <SkillItem icon={<Users className="w-5 h-5 text-blue-500" />} title="Problem Solving" />
          </>
        )}
      </div>
    </section>
  );
}

function SkillItem({ icon, title }) {
  return (
    <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-gray-200 hover:bg-gray-50 transition">
      <div className="bg-white p-2 rounded-lg shadow-sm">{icon}</div>
      <span className="font-medium text-gray-700">{title}</span>
    </div>
  );
}
