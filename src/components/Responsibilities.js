import { Code, Palette, Zap, AlertCircle, Bug } from 'lucide-react';

export default function Responsibilities() {
    return (
        <div className="space-y-6">
            {/* Typical Responsibilities */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Typical responsibilities</h2>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                            <Code className="w-5 h-5" />
                        </div>
                        <p className="text-gray-700">Create and maintain UI components</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg">
                            <Palette className="w-5 h-5" />
                        </div>
                        <p className="text-gray-700">Translate design mockups into interactive, visually appealing web pages</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="p-1.5 bg-green-50 text-green-600 rounded-lg">
                            <Zap className="w-5 h-5" />
                        </div>
                        <p className="text-gray-700">Optimize web applications for performance and loading speed</p>
                    </div>
                </div>
            </section>

            {/* Who this is not for */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Who this role is not for</h2>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <div className="p-1.5 bg-yellow-50 text-yellow-600 rounded-lg">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                        <p className="text-gray-700">Individuals who don't enjoy interface or design</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="p-1.5 bg-red-50 text-red-600 rounded-lg">
                            <Bug className="w-5 h-5" />
                        </div>
                        <p className="text-gray-700">Individuals who prefer backend logic / database architecture / workflows</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
