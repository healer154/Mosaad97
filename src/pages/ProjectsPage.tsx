import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-48">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;
