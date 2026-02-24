import { Code, Layout, Smartphone } from 'lucide-react';

export default function Hero({ selectedRole, setSelectedRole }) {
  const roles = [
    { id: 'Frontend Development', label: 'Frontend Development' },
    { id: 'Product Design', label: 'Product Design' },
    { id: 'Backend Development', label: 'Backend Development' },
    { id: 'Data Science', label: 'Data Science' }
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
      {/* Horizontal Nav Menu */}
      <nav className="flex justify-center space-x-4 mb-8 relative z-10 w-full flex-wrap gap-y-2">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedRole === role.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            {role.label}
          </button>
        ))}
      </nav>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{selectedRole}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {selectedRole === 'Frontend Development' && "Frontend developers build the parts of a website or web application that users interact with, making sure sites look great and work smoothly."}
            {selectedRole === 'Product Design' && "Product designers define the user experience and visual style of digital products, ensuring they are intuitive and beautiful."}
            {selectedRole === 'Backend Development' && "Backend developers build the server-side logic and databases that power web applications, ensuring data is secure and accessible."}
            {selectedRole === 'Data Science' && "Data scientists analyze complex data to help organizations make better decisions and build predictive models."}
          </p>
        </div>

        {/* Illustration Area */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow-lg border border-gray-100">
          <img
            src={`/images/${selectedRole === 'Frontend Development' ? 'frontend.jpg' :
                selectedRole === 'Backend Development' ? 'backend.jpg' :
                  selectedRole === 'Product Design' ? 'product_design.jpg' :
                    'datascience.jpg'
              }`}
            alt={`${selectedRole} Illustration`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
