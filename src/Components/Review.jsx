import { ArrowDown } from "lucide-react";
import review1 from "../Assets/review images/review1.webp";
import review2 from "../Assets/review images/review2.webp";
import review3 from "../Assets/review images/review3.webp";
import review4 from "../Assets/review images/review4.webp";
import review5 from "../Assets/review images/review5.avif";
function Review() {
  const reviews = [
    {
      name: "Alex Carter",
      rating: "Reating",
      stars: "⭐⭐⭐⭐⭐",
      comment:
        "Excellent service with clear communication and professional guidance. The entire home buying journey felt smooth, well managed, and completely stress free from start to finish.",
      image: review1,
    },
    {
      name: "Emma Wilson",
      rating: "Reating",
      stars: "⭐⭐⭐⭐⭐",
      comment:
        "A highly professional team that understands client needs very well. They provided reliable property options and helped me make a confident and informed decision easily.",
      image: review2,
    },
    {
      name: "Daniel Brooks",
      rating: "Reating",
      stars: "⭐⭐⭐⭐⭐",
      comment:
        "From property search to final paperwork, everything was handled efficiently. The process was transparent, quick, and supported by helpful and responsive experts.",
      image: review3,
    },
    {
      name: "Sophia Miller",
      rating: "Reating",
      stars: "⭐⭐⭐⭐⭐",
      comment:
        "Great experience overall. Verified listings, honest advice, and timely updates made finding the right home simple, comfortable, and completely hassle free.",
      image: review4,
    },
    {
      name: "Liam Anderson",
      rating: "Reating",
      stars: "⭐⭐⭐⭐⭐",
      comment:
        "Outstanding support and prompt responses throughout the process. A trustworthy real estate brand that truly values customer satisfaction and long term relationships.",
      image: review5,
    },
  ];

  return (
    <section id="reviews" 
     className="flex flex-col gap-8 justify-center items-center w-full pt-20 pb-2 bg-background min-h-screen"
    >
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl w-80"  data-aos="fade-down" data-aos-offset="100">
          <span className="text-primary font-bold">What </span>
          <span className="underline text-foreground">Our Clients Say</span>{" "}
        </h1>
        <h2 className="w-80 text-foreground mt-2 max-sm:w-[90%]"  data-aos="fade-up" data-aos-offset="100">
          Real experiences from people who found their perfect home with us</h2>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2  max-sm:grid-cols-1 gap-6"  >
        {/* Reviews grid */}
        {reviews.map((review, index) => (
          <div key={index} className="flex p-5 rounded-2xl flex-col bg-card w-80 items-center gap-4" data-aos="fade-currel" data-aos-offset="250">
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-center">
              <h3 className="font-bold">{review.name}</h3>
              <p className="text-accent flex justify-center ">{review.rating} <ArrowDown className="animate-bounce size-3 mt-2"/></p>
              <p className="text-accent">{review.stars}</p>
              <p className="text-sm text-foreground tracking-wide  ">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Review;
