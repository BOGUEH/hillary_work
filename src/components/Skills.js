function SkillBox({ title, items }) {
  return (
    <div className="flex-1 border border-gray-700 rounded-lg">
      <h3 className="bg-green-700 px-4 py-2 rounded-t font-semibold">
        {title}
      </h3>
      <ul className="p-4 space-y-2 text-gray-300">
        {items.map((item, i) => (
          <li key={i} className="border-b border-gray-700 pb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Required Skills</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <SkillBox
          title="Hard Skills"
          items={[
            "HTML5, CSS3, JavaScript (ES6+)",
            "SCSS / Tailwind CSS",
            "React & Testing Libraries",
          ]}
        />
        <SkillBox
          title="Soft Skills"
          items={[
            "Problem Solving",
            "Attention to Detail",
            "Communication",
            "Time Management",
          ]}
        />
      </div>
    </section>
  );
}
