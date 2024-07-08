import Navbar from "./component/navbar";

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
