function Card({ level, text }) {
  return (
    <div className="flex-1 bg-gray-300 text-black p-4 rounded">
      <span className="inline-block bg-green-700 text-white px-4 py-1 rounded mb-3">
        {level}
      </span>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default function CareerProgression() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Career Progression</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <Card level="Junior" text="Focus on learning and best practices." />
        <Card level="Mid-Level" text="Solve problems independently and mentor juniors." />
        <Card level="Senior" text="Drive architecture and innovation." />
      </div>
    </section>
  );
}
