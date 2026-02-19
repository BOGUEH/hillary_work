
export default function Tools() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Typical Tools & Environment</h2>

      <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        {/* Abstract representation of tools */}
        <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          {/* Creating simple tool icons with CSS/Imgs if possible, or just placeholders */}
          <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center p-2 text-2xl" title="VS Code">
            📝
          </div>
          <div className="w-12 h-12 bg-gray-900 rounded-xl shadow-md flex items-center justify-center p-2 text-white text-2xl" title="GitHub">
            🐈
          </div>
          <div className="w-12 h-12 bg-orange-500 rounded-xl shadow-md flex items-center justify-center p-2 text-white font-bold" title="Git">
            Git
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-xl shadow-md flex items-center justify-center p-2 text-white font-bold" title="Jira">
            Ji
          </div>
        </div>

        <div className="absolute bottom-2 left-2 text-xs text-gray-500 font-mono">
          Rap and dance ass framework dest.
        </div>
      </div>
    </section>
  );
}
