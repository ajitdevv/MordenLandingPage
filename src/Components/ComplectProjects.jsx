import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import project1 from "../assets/images/project1.webp";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.webp";
import project4 from "../assets/images/project4.webp";
import project5 from "../assets/images/project5.webp";
import project6 from "../assets/images/project6.webp";
import { useRef } from "react";
function CompletedProjects() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -332 : 332,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      name: "Skyline Towers",
      description: "Modern apartments with premium amenities.",
      image: project1,
      prices: "$200,000 - $300,000",
    },
    {
      name: "Greenfield Villas",
      description: "Luxury villas surrounded by greenery.",
      image: project2,
      prices: "$150,000 - $250,000",
    },
    {
      name: "Urban Heights",
      description: "High-rise homes in the city center.",
      image: project3,
      prices: "$250,000 - $400,000",
    },
    {
      name: "Lakeside Residences",
      description: "Waterfront homes with scenic views.",
      image: project4,
      prices: "$500,000 - $700,000",
    },
    {
      name: "Palm Grove Homes",
      description: "Peaceful living in a natural setting.",
      image: project5,
      prices: "$300,000 - $450,000",
    },
    {
      name: "Elite Square",
      description: "Contemporary living with smart design.",
      image: project6,
      prices: "$60,000 - $650,000",
    },
  ];
  return (
    <section
      id="projects"
      className="flex flex-col gap-8 justify-center items-center w-full pt-20 pb-20 bg-background min-h-screen"
    >
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl w-100" data-aos="fade-up" data-aos-offset="150">
            <span className="text-primary font-bold">Projects </span>
            <span className="underline text-foreground">Completed</span>
          </h1>
          <h2 className="w-100 mt-2 mb-8 max-sm:w-[90%] text-foreground"  data-aos="fade-up" data-aos-offset="150">
            Crafting Space, Building Legacies-Explore Our Portfolio
          </h2>
        </div>
      </div>
      <div className="flex gap-3 *:p-3 *:bg-card/10 *:border *:hover:border-accent *:transition-transform *:duration-700 *:rounded-md">
        <button onClick={() => scroll("left")}  data-aos="fade-left" data-aos-offset="150">
          <ArrowLeftToLine />
        </button>
        <button onClick={() => scroll("right")} data-aos="fade-right" data-aos-offset="150">
          <ArrowRightToLine />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-10 w-[90%] border-x-2 items-start scroll-smooth no-scrollbar p-2 "
      >
        {/* Projects grid */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-75 h-80 bg-card rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative ">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <h1 className="absolute text-foreground top-0 bg-background left-0.5 mt-0.5 px-1 rounded-2xl ">
                {project.prices}
              </h1>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-foreground">
                {project.name}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CompletedProjects;
