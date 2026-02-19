import { Code2, Monitor, Users } from 'lucide-react';

export default function RoleOverview() {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Role Overview</h2>
            <h3 className="text-lg font-medium text-gray-800 mb-4">What the role does in real companies</h3>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="mt-1 p-1 bg-gray-100 rounded text-gray-600">
                <Code2 className="w-4 h-4" />
              </div>
              <p className="text-gray-600">
                Coding user interfaces like complex examples as HTML / CSS, JavaScript.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-1 p-1 bg-gray-100 rounded text-gray-600">
                <Monitor className="w-4 h-4" />
              </div>
              <p className="text-gray-600">
                Ensuring websites are responsive across all devices
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <div className="mt-1 p-1 bg-gray-100 rounded text-gray-600">
                <Users className="w-4 h-4" />
              </div>
              <p className="text-gray-600">
                Collaborating with designers and backend developer go to create a seamless user experiences
              </p>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:col-span-1 bg-emerald-50 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          {/* Simple Person Illustration Placeholder */}
          <div className="relative">
            <div className="w-24 h-24 bg-emerald-200 rounded-full flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
