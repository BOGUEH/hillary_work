import { Bell, MessageSquare, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Search */}
          <div className="flex items-center gap-8 flex-1">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">BanexAI</span>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 w-full max-w-md">
              <span className="text-gray-500 font-medium">BanexAI</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <MessageSquare className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
              {/* Placeholder for user avatar */}
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
