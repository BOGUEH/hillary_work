import { Code, Layout, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Frontend Development</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Frontend developers build the parts of a website or web application that users interact with, making sure sites look great and work smoothly.
          </p>
        </div>

        {/* Illustration Area - simplified representation */}
        <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Monitor */}
          <div className="relative bg-white p-2 rounded-xl shadow-lg border border-gray-200 w-full max-w-sm">
            <div className="flex gap-1.5 mb-2 border-b border-gray-100 pb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="bg-gray-900 rounded h-32 flex flex-col p-3 space-y-2">
              <div className="h-2 w-1/3 bg-gray-700 rounded"></div>
              <div className="flex gap-2">
                <div className="h-16 w-3/4 bg-gray-800 rounded"></div>
                <div className="h-16 w-1/4 bg-gray-800 rounded"></div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-4 top-10 bg-white p-2 rounded-lg shadow-md border border-gray-100 text-xs font-mono text-blue-600 font-bold transform -rotate-6">
              Tag-3
            </div>
            <div className="absolute -right-2 bottom-8 bg-white p-2 rounded-lg shadow-md border border-gray-100 text-xs font-mono text-purple-600 font-bold transform rotate-3">
              CSS &gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
