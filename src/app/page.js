import Hero from "@/components/Hero";
import RoleOverview from "@/components/RoleOverview";
import Skills from "@/components/Skills";
import CareerProgression from "@/components/CareerProgression";
import SalaryRange from "@/components/SalaryRange";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="space-y-10 px-6 pb-20">
      <Hero />
      <RoleOverview />
      <Skills />
      <CareerProgression />
      <SalaryRange />
      <Tools />
    </main>
  );
}
