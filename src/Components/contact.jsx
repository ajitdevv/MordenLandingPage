import { ArrowRight,Calendar  } from "lucide-react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsTelephone,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="contact">
      <div className=" flex flex-col justify-around  pt-20">
        <div className="w-full flex felx-row justify-center items-center max-sm:flex-col max-sm:gap-10  ">
          <div
            /* form container*/ className="w-[40%] max-sm:w-full flex flex-col items-start text-forground max-sm:justify-center max-sm:items-center"
          >
            <h1
              data-aos="fade-up"
              data-aos-offset="150"
              className="text-primary text-5xl font-bold pb-10 "
            >
              Contact <span className="text-foreground"> Me</span>
            </h1>
            <form
               action="https://formspree.io/f/mzzaewzd"
              method="POST"
              className="flex flex-col gap-4 w-[80%] p-6 bg-card rounded-lg shadow-md "
            >
              <input
                type="number"
                name="number"
                placeholder="Your Number"
                required
                className="bg-background p-2 text-primary w-full rounded-2xl shadow-md"
              />
              <input
                type="date"
                name="date"
                placeholder="Select Date"
                required
                className="bg-background p-2 text-primary w-full rounded-2xl shadow-md"
              />
                <input
                  type="time"
                  name="time"
                  required
                  placeholder="select Date"
                  className="bg-background p-2 text-primary w-full rounded-2xl shadow-md "
                />
               
              <textarea
                name="message"
                placeholder="Call purpose"
                className="bg-background p-2 text-primary rounded-2xl shadow-md "
              ></textarea>
              <button type="submit" className="cosmic-button">
                Schedule Call
              </button>
            </form>
          </div>
          <div className="w-[35%] max-sm:w-[90%] max-sm:justify-center flex flex-col gap-7">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ajitdevv/"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-card text-foreground py-5  rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className=" px-6 flex gap-2">
                  <BsInstagram className="size-8 text-pink-500" />
                  Connect on Instagram
                </h1>
                <ArrowRight className="text-primary mr-2" />
              </div>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/918058339867"
              target="_blank"
              data-aos="fade-up"
              data-aos-offset="150"
            >
              <div className="flex flex-row justify-between bg-card text-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className="px-6 flex gap-2">
                  <BsWhatsapp className="size-8 text-green-500" />
                  Connect on whatsapp
                </h1>
                <ArrowRight className="text-primary mr-2" />
              </div>
            </a>
            {/* Phone */}
            <a
              href="tel:+918058339867"
              target="_blank"
              data-aos="fade-up"
            >
              <div className="flex flex-row justify-between bg-card text-foreground py-5 rounded-2xl hover:scale-110 transition-transform duration-300">
                <h1 className=" px-6 flex gap-2">
                  <BsTelephone className="size-8 text-indigo-500" />
                  Call Us
                </h1>
                <ArrowRight className="text-primary mr-2" />
              </div>
            </a>
            <div className="flex gap-6 justify-center max-sm:flex-row mt-8 w-full max-sm:gap-4 ">
              <div
                data-aos="fade-right"
                data-aos-offset="150"
                className="cosmic-button h-10 w-[50%]"
              >
                <a href="#">
                  <button>Buy Tocken</button>
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="150"
                className="cosmic-button h-10  w-[50%]"
              >
                <a href="#">
                  <button> Buy Now </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
