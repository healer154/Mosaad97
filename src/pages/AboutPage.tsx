import Navigation from "@/components/Navigation";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
    </div>
  );
};

export default AboutPage;
