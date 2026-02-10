const topics = [
  {
    title: "Introduction",
    items: [
      "Course Introduction",
      "Introduction to CSS",
      "Including CSS",
    ],
  },
  {
    title: "Text Styling",
    items: [
      "Text Styling",
      "Text Spacing",
      "Text Size",
      "Font",
      "Color",
      "Style",
    ],
  },
];

export default function ContentSection() {
  return (
    <section className="px-8 py-10 max-w-4xl mx-auto">
      {topics.map((topic, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {topic.title}
          </h2>

          <ul className="space-y-2 text-gray-600">
            {topic.items.map((item, i) => (
              <li
                key={i}
                className="pl-4 border-l-4 border-blue-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
