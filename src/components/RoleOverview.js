import { Code2, Monitor, Users, Database, Layout, Search, BarChart, Server, PenTool, Brain, AlertCircle, Bug, CheckCircle } from 'lucide-react';
import Skills from './Skills';

export default function RoleOverview({ selectedRole, setSelectedRole }) {
  const roleImages = {
    'Frontend Development': '/images/frontend.jpg',
    'Product Design': '/images/product_design.jpg',
    'Backend Development': '/images/backend.jpg',
    'Data Science': '/images/datascience.jpg',
  };

  const roleData = {
    'Frontend Development': {
      overview: [
        { icon: Code2, text: "Coding user interfaces with HTML, CSS, and JavaScript." },
        { icon: Monitor, text: "Ensuring websites are responsive across all devices." },
        { icon: Users, text: "Collaborating with designers and backend developers." }
      ],
      responsibilities: [
        { icon: Layout, text: "Create and maintain UI components" },
        { icon: PenTool, text: "Translate design mockups into interactive web pages" },
        { icon: CheckCircle, text: "Optimize applications for performance and speed" }
      ],
      hardSkills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      softSkills: ["Collaboration", "Attention to Detail", "Problem Solving"],
    },
    'Backend Development': {
      overview: [
        { icon: Server, text: "Building server-side logic and APIs." },
        { icon: Database, text: "Designing and managing databases." },
        { icon: Code2, text: "Ensuring application security and scalability." }
      ],
      responsibilities: [
        { icon: Server, text: "Design and implement RESTful APIs" },
        { icon: Database, text: "Optimize database queries and schema" },
        { icon: CheckCircle, text: "Manage server deployment and architecture" }
      ],
      hardSkills: ["Node.js", "Express", "SQL/NoSQL", "API Design", "Security"],
      softSkills: ["Analytical Thinking", "Debugging", "System Design"],
    },
    'Product Design': {
      overview: [
        { icon: PenTool, text: "Creating user flows and wireframes." },
        { icon: Users, text: "Conducting user research and testing." },
        { icon: Layout, text: "Designing high-fidelity UI mockups." }
      ],
      responsibilities: [
        { icon: PenTool, text: "Design intuitive user interfaces" },
        { icon: Users, text: "Collaborate with developers on implementation" },
        { icon: CheckCircle, text: "Iterate designs based on user feedback" }
      ],
      hardSkills: ["User Research", "Wireframing", "Prototyping", "UI Design"],
      softSkills: ["Creativity", "Empathy", "Communication"],
    },
    'Data Science': {
      overview: [
        { icon: Brain, text: "Building predictive models using machine learning." },
        { icon: BarChart, text: "Analyzing complex datasets for insights." },
        { icon: Code2, text: "Visualizing data to communicate findings." }
      ],
      responsibilities: [
        { icon: Brain, text: "Develop machine learning algorithms" },
        { icon: Database, text: "Clean and process large datasets" },
        { icon: BarChart, text: "Create data visualizations and reports" }
      ],
      hardSkills: ["Python", "Machine Learning", "Data Cleaning", "Statistical Analysis"],
      softSkills: ["Critical Thinking", "Storytelling", "Domain Knowledge"],
    },
  };

  const currentRole = roleData[selectedRole] || roleData['Frontend Development'];
  const imageSrc = roleImages[selectedRole] || roleImages['Frontend Development'];

  const roles = Object.keys(roleData);

  return (
    <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 transition-all duration-300">
      {/* Horizontal Nav Menu */}
      <nav className="flex justify-center space-x-4 mb-8">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedRole === role ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            {role}
          </button>
        ))}
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Overview */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedRole}</h2>
          <p className="text-gray-600 mb-6">What the role does in real companies</p>
          <div className="grid gap-4">
            {currentRole.overview.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mt-1 p-2 bg-teal-50 rounded-lg text-teal-600">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex flex-col items-center">
          <img src={imageSrc} alt={selectedRole} className="w-full h-48 object-cover rounded-2xl mb-4" />
        </div>
      </div>

      {/* Three Cards: Hard Skills, Soft Skills, Responsibilities */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Hard Skills */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Hard Skills</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {currentRole.hardSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        {/* Soft Skills */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {currentRole.softSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        {/* Responsibilities */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Typical Responsibilities</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {currentRole.responsibilities.map((item, i) => (
              <li key={i}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
