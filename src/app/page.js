"use client";
import { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoleOverview from "@/components/RoleOverview";

import CareerProgression from "@/components/CareerProgression";
import Tools from "@/components/Tools";

export default function Home() {
  const [selectedRole, setSelectedRole] = useState('Frontend Development');

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mt-8">
        <Hero selectedRole={selectedRole} setSelectedRole={setSelectedRole} />

        <RoleOverview selectedRole={selectedRole} setSelectedRole={setSelectedRole} />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CareerProgression selectedRole={selectedRole} />
          </div>
          <div className="md:col-span-1">
            <Tools />
          </div>
        </div>
      </main>
    </div>
  );
}
