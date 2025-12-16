import Aboutimage from "../assets/images/Aboutimage.jpg";
function Aboutbrand() {

  const highlight = [
    { tital: "10+", subtitle: "Years of Excellence" },
    { tital: "12+", subtitle: "Projects Completed" },
    { tital: "20+", subtitle: "Mn. Sq. ft. Delivered" },
    { tital: "25+", subtitle: "Ongoing Projects" },
  ];
  return (
    <section
      id="about"
      className="flex flex-col gap-8 justify-center items-center w-full pt-20 pb-20 bg-background min-h-screen"
    >
      <div  >
        <h1 className="text-3xl w-80" data-aos="fade-up" data-aos-offset="150">
          <span className="text-primary font-bold">About </span>
          <span className="underline text-foreground">our brand</span>{" "}
        </h1>
        <h2 className="w-80 mt-2 mb-5 text-foreground" data-aos="fade-up" data-aos-offset="150">
          Passionate About Proparties, Dedicated to your vision
        </h2>
      </div>
      <div className="w-full flex  justify-center gap-10 items-center  max-sm:flex-col max-sm:gap-10">
        <div
          className="overflow-hidden  w-[40%] max-sm:w-[80%] aspect-3/4"
          style={{
            clipPath:
              "polygon(31% 39%, 50% 10%, 65% 21%, 100% 0, 100% 100%, 43% 100%, 0 100%, 0 28%, 17% 48%, 25% 29%)",
          }}
        >
          <img
            src={Aboutimage}
            alt="building"
            data-aos="fade-right" data-aos-offset="300"
            className="w-full h-full shadow-lg object-cover"
          />
        </div>
        <div  className="w-[30%] gap-6 flex flex-col justify-center max-sm:w-[80%]">
          <div className="grid grid-cols-2 max-sm:gap-10">
            {highlight.map((item) => (
              <div
                key={item.tital}
                data-aos="fade-left" data-aos-offset="150"
                className=" flex flex-col justify-start items-start"
              >
                <h1 className="text-4xl font-bold text-accent max-sm:ml-5">{item.tital}</h1>
                <p className="text-foreground">{item.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="">
            <p data-aos="fade-left" data-aos-offset="150" className="text-justify mt-6 tracking-wide  text-lg ">
              RealEstateIndia.com is a trusted Indian property platform
              connecting buyers, sellers, and brokers. It offers verified
              listings for buying, selling, and renting residential and
              commercial properties, making real estate search simple,
              transparent, and reliable.
            </p>
          </div>
          <div>
            <button
            data-aos="fade-up" data-aos-offset="150"
              onClick={() =>
                window.open("https://www.realestateindia.com/aboutus.htm", "_blank")
              }
              className="cosmic-button h-10 w-40"
            >
              About more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Aboutbrand;
