import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Testimonials />
      </main>
    </div>
  );
};

export default TestimonialsPage;
