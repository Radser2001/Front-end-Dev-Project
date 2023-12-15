import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};
export default Home;
