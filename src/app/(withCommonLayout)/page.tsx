import Banner from "@/components/Shared/Banner/Banner";
import AboutPage from "./about/page";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";

const HomePage = async () => {
  // Data fetching
  // const res = await fetch("http://localhost:5000/products")

  return (
    <div>
      <Banner />
      <AboutPage />
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
