function Salary({ level, amount }) {
  return (
    <div className="flex-1 bg-gray-300 text-black p-4 rounded text-center">
      <span className="inline-block bg-green-700 text-white px-4 py-1 rounded mb-3">
        {level}
      </span>
      <p className="font-semibold">{amount}</p>
    </div>
  );
}

export default function SalaryRange() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Salary Range</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <Salary level="Junior" amount="$50,000 – $100,000" />
        <Salary level="Mid-Level" amount="$70,000 – $150,000" />
        <Salary level="Senior" amount="$100,000 – $250,000" />
      </div>
    </section>
  );
}
