export default function Tools() {
  return (
    <section className="border border-gray-700 rounded-lg">
      <h2 className="bg-green-700 px-5 py-3 text-xl font-semibold rounded-t">
        Typical Tools & Environments
      </h2>

      <div className="p-5 grid md:grid-cols-2 gap-6 text-gray-300">
        <ul className="space-y-2">
          <li>🧠 IDEs: VS Code, WebStorm</li>
          <li>🌐 Browser DevTools</li>
          <li>🎨 Design: Figma, Adobe XD</li>
          <li>💻 OS: macOS, Windows, Linux</li>
        </ul>

        <ul className="space-y-2">
          <li>📋 Project Management: Jira, Trello</li>
          <li>💬 Communication: Slack, Teams</li>
          <li>⌨ CLI: Bash, Zsh</li>
        </ul>
      </div>
    </section>
  );
}
