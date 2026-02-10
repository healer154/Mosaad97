import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects preview />
      </main>
    </div>
  );
};

export default Index;
