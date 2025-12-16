
import Herosection from "./Components/hero.jsx";
import Aboutbrand from "./Components/About.jsx";
// import Starbackground from "./Components/Background.jsx";
import ThemeToggle from "./Components/ThemeToggle.jsx";
import Navbar from "./Components/Navbar.jsx";
import CompletedProjects from "./Components/ComplectProjects.jsx";
import Review from "./Components/Review.jsx";
import Contact from "./Components/contact.jsx";
import Footer from "./Components/Footer.jsx";
function home() {
  return (
    <div className="min-h-screen costum-scroll bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
       <main>
        {/* <Topbutton/> */}
        <Herosection /> 
        <Aboutbrand />
        
        <CompletedProjects />
        <Review />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default home;
