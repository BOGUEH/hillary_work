import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoleOverview from "@/components/RoleOverview";
import Responsibilities from "@/components/Responsibilities";
import Skills from "@/components/Skills";
import CareerProgression from "@/components/CareerProgression";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-8">
        <Hero />

        <RoleOverview />

        <div className="grid md:grid-cols-2 gap-8">
          <Responsibilities />
          <div className="space-y-8">
            <Skills />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CareerProgression />
          </div>
          <div className="md:col-span-1">
            <Tools />
          </div>
        </div>
      </main>
    </div>
  );
}
