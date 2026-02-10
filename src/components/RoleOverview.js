function Row({ title, text }) {
  return (
    <div className="bg-gray-300 text-black p-3 rounded flex justify-between">
      <strong>{title}</strong>
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default function RoleOverview() {
  return (
    <section className="border border-gray-700 rounded-lg p-5 space-y-4">
      <h2 className="text-xl font-semibold">Role Overview</h2>

      <Row
        title="What the role does"
        text="Build and maintain user-facing parts of websites and web apps"
      />
      <Row
        title="Typical Work"
        text="Develop features using HTML, CSS, JavaScript frameworks"
      />
      <Row
        title="Not For"
        text="Those who dislike coding or attention to detail"
      />
    </section>
  );
}
