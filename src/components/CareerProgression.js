'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CareerProgression() {
  const [level, setLevel] = useState('junior');

  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Career Progression</h2>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>

      <div className="bg-gray-100 p-1 rounded-lg inline-flex mb-6">
        <button
          onClick={() => setLevel('junior')}
          className={`px-6 py-1.5 text-sm font-medium rounded-md transition-all ${level === 'junior'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
            }`}
        >
          Junior
        </button>
        <button
          onClick={() => setLevel('mid')}
          className={`px-6 py-1.5 text-sm font-medium rounded-md transition-all ${level === 'mid'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
            }`}
        >
          Mid
        </button>
        <button
          onClick={() => setLevel('senior')}
          className={`px-6 py-1.5 text-sm font-medium rounded-md transition-all ${level === 'senior'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
            }`}
        >
          Senior
        </button>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Scope */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Scope</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                Work on simple UI tasks, assist seniors, fix bugs, learn core concepts
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mt-6 mb-3">Expectations:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                Write clean HTML, CSS, JavaScript
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <span className="font-semibold text-gray-900">Autonomy:</span> Minimal, Work under close supervision
            </div>
          </div>

          {/* Salary */}
          <div>
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-lg font-bold text-gray-900">Salary</h3>
              <span className="text-xs text-gray-500">$20k-55k, Regional</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">Localized</span>
                <span className="font-bold text-gray-900">$20k–50k</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">Regional</span>
                <span className="font-bold text-gray-900">$30k–50k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
