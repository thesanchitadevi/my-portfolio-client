import Banner from "@/components/Shared/Banner/Banner";
import AboutPage from "./about/page";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ContactPage from "./contact/page";
import Testimonials from "@/components/Testimonials/Testimonials";

const HomePage = async () => {
  // Data fetching
  // const res = await fetch("http://localhost:5000/products")

  return (
    <div>
      <Banner />
      <AboutPage />
      <FeaturedProjects />
      <Testimonials />
      <ContactPage />
    </div>
  );
};

export default HomePage;
