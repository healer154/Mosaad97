import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Experience />
      </main>
    </div>
  );
};

export default ExperiencePage;
