import Navbar from "./component/navbar";
import Hero from "./component/HomePage/Hero";
import AboutUs from "./component/HomePage/AboutUs";
import Contact from "./component/HomePage/Contact";
import Services from "./component/HomePage/Services";
import Footer from "./component/HomePage/Footer";

export default function Home() {

  return (
    <>
      <div className="bg-primary ">
        {/*NavBar */}
        <Navbar />
        {/**Hero Section */}
        <Hero />
        {/*About Us */}
        <AboutUs />
        {/*Services Section */}
        <Services />
        {/*Contact Section */}
        <Contact />
        {/*Footer*/}
        <Footer />
        {/*Temp Div */}
        {/* <div className="h-[3000px]"></div> */}
      </div>
    </>
  );
}
