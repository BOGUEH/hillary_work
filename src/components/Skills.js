'use client';

/**
 * Skills component displays hard and soft skills for a role.
 * Props:
 *  - hardSkills: array of strings
 *  - softSkills: array of strings
 */
export default function Skills({ hardSkills = [], softSkills = [] }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {/* Hard Skills */}
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
        <h4 className="text-sm font-medium text-gray-800 mb-2">Hard Skills</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          {hardSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
      {/* Soft Skills */}
      <div className="bg-green-50 p-4 rounded-lg shadow-sm">
        <h4 className="text-sm font-medium text-gray-800 mb-2">Soft Skills</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          {softSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
