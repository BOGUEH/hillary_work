'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CareerProgression({ selectedRole }) {
  const [level, setLevel] = useState('junior');

  const progressionData = {
    'Frontend Development': {
      junior: {
        scope: ['Implement UI components', 'Fix simple bugs', 'Learn React basics'],
        expectations: ['Write clean HTML/CSS/JS', 'Follow design guidelines'],
        autonomy: 'Minimal, work under supervision',
        salary: '$20k–$55k (regional)',
        localizedSalary: '$15k–$25k',
        regionalSalary: '$20k–$55k'
      },
      mid: {
        scope: ['Build complex features', 'Mentor juniors', 'Optimize performance'],
        expectations: ['Architect components', 'Ensure accessibility'],
        autonomy: 'Moderate, own feature areas',
        salary: '$55k–$80k (regional)',
        localizedSalary: '$25k–$45k',
        regionalSalary: '$55k–$80k'
      },
      senior: {
        scope: ['Lead frontend strategy', 'Define tech stack', 'Drive UI/UX vision'],
        expectations: ['Set standards', 'Review code', 'Collaborate cross‑team'],
        autonomy: 'High, strategic decisions',
        salary: '$80k–$120k (regional)',
        localizedSalary: '$45k–$70k',
        regionalSalary: '$80k–$120k'
      }
    },
    'Backend Development': {
      junior: {
        scope: ['Write API endpoints', 'Fix bugs', 'Learn Node.js'],
        expectations: ['Write clean server code', 'Handle basic DB queries'],
        autonomy: 'Minimal, under guidance',
        salary: '$25k–$60k (regional)',
        localizedSalary: '$18k–$30k',
        regionalSalary: '$25k–$60k'
      },
      mid: {
        scope: ['Design services', 'Optimize queries', 'Mentor juniors'],
        expectations: ['Maintain scalability', 'Implement security'],
        autonomy: 'Moderate, own services',
        salary: '$60k–$90k (regional)',
        localizedSalary: '$30k–$55k',
        regionalSalary: '$60k–$90k'
      },
      senior: {
        scope: ['Define backend architecture', 'Lead performance tuning', 'Guide team'],
        expectations: ['Set standards', 'Review designs'],
        autonomy: 'High, strategic backend decisions',
        salary: '$90k–$130k (regional)',
        localizedSalary: '$55k–$80k',
        regionalSalary: '$90k–$130k'
      }
    },
    'Product Design': {
      junior: {
        scope: ['Create wireframes', 'Assist senior designers', 'Learn design tools'],
        expectations: ['Follow brand guidelines', 'Iterate on feedback'],
        autonomy: 'Minimal, under direction',
        salary: '$20k–$45k (regional)',
        localizedSalary: '$15k–$25k',
        regionalSalary: '$20k–$45k'
      },
      mid: {
        scope: ['Design high‑fidelity mockups', 'Conduct user research', 'Mentor juniors'],
        expectations: ['Ensure usability', 'Collaborate with devs'],
        autonomy: 'Moderate, own projects',
        salary: '$45k–$70k (regional)',
        localizedSalary: '$25k–$45k',
        regionalSalary: '$45k–$70k'
      },
      senior: {
        scope: ['Define design system', 'Lead product vision', 'Strategic research'],
        expectations: ['Set design standards', 'Drive innovation'],
        autonomy: 'High, strategic design decisions',
        salary: '$70k–$100k (regional)',
        localizedSalary: '$45k–$65k',
        regionalSalary: '$70k–$100k'
      }
    },
    'Data Science': {
      junior: {
        scope: ['Clean data', 'Run basic analyses', 'Learn Python'],
        expectations: ['Document findings', 'Support senior models'],
        autonomy: 'Minimal, under guidance',
        salary: '$30k–$55k (regional)',
        localizedSalary: '$20k–$35k',
        regionalSalary: '$30k–$55k'
      },
      mid: {
        scope: ['Build predictive models', 'Feature engineering', 'Mentor juniors'],
        expectations: ['Validate models', 'Communicate insights'],
        autonomy: 'Moderate, own projects',
        salary: '$55k–$85k (regional)',
        localizedSalary: '$35k–$55k',
        regionalSalary: '$55k–$85k'
      },
      senior: {
        scope: ['Define data strategy', 'Lead ML initiatives', 'Guide team'],
        expectations: ['Set standards', 'Drive research'],
        autonomy: 'High, strategic data decisions',
        salary: '$85k–$130k (regional)',
        localizedSalary: '$55k–$85k',
        regionalSalary: '$85k–$130k'
      }
    }
  };

  const roleData = progressionData[selectedRole] || progressionData['Frontend Development'];
  const current = roleData[level];

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
            : 'text-gray-500 hover:text-gray-900'}`}
        >
          Junior
        </button>
        <button
          onClick={() => setLevel('mid')}
          className={`px-6 py-1.5 text-sm font-medium rounded-md transition-all ${level === 'mid'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-900'}`}
        >
          Mid
        </button>
        <button
          onClick={() => setLevel('senior')}
          className={`px-6 py-1.5 text-sm font-medium rounded-md transition-all ${level === 'senior'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-900'}`}
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
              {current.scope.map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-gray-400">•</span>{item}</li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mt-6 mb-3">Expectations</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {current.expectations.map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-gray-400">•</span>{item}</li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <span className="font-semibold text-gray-900">Autonomy:</span> {current.autonomy}
            </div>
          </div>

          {/* Salary */}
          <div>
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-lg font-bold text-gray-900">Salary</h3>
              <span className="text-xs text-gray-500">{current.salary}</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">Localized</span>
                <span className="font-bold text-gray-900">{current.localizedSalary}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">Regional</span>
                <span className="font-bold text-gray-900">{current.regionalSalary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
