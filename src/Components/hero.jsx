import Homeimage from "../assets/images/homepage.jpg";
import { MoveDown } from "lucide-react";
function Herosection() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${Homeimage})`,
        backgroundAttachment: "fixed",
      }}
      className="flex  flex-col gap-8 justify-center items-center
                 min-h-screen w-full pt-20 pb-20
                 bg-cover bg-center bg-no-repeat "
    >
      <div className="w-200 max-sm:w-100  flex justify-center">
        <h1 className="text-7xl  max-sm:text-5xl flex justify-center items-center max-sm:w-[90%] font-bold">
          Explore Homes that fit your dreams
        </h1>
      </div>
      <div className="flex gap-6 mt-6 max-sm:flex-col max-sm:gap-4 ">
        <a href="#reviews" 
          data-aos="fade-up">
          <button className="cosmic-button">Reviews</button>
        </a>{" "}
        <a
          href="tel:+918058339867"
          target="_blank"
          data-aos="fade-up"
        >
          <button className="cosmic-button">Free Call </button>
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform mt-4 -translate-x-1/2 flex flex-col items-center justify-center animate-bounce ">
        <span className="text-sm mb-1 text-accent">Scroll</span>
        <MoveDown className="h-4 w-6 text-accent transition-transform duration-700 ease-in-out" />
      </div>
    </section>
  );
}
export default Herosection;
