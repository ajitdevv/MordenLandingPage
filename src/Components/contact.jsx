import { ArrowRight } from "lucide-react";
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
              className="flex flex-col rounded-2xl w-[90%] bg-card p-3 max-sm:pb-9"
            >
              <div
                data-aos="fade-left"
                data-aos-offset="150"
                className="flex flex-row w-full jestify-srart font-bold text-2xl text-primary/70"
              >
                <h1>Say hi..</h1>
              </div>
              <div className="flex flex-row w-full jestify-srart ">
                <input
                  data-aos="fade-right"
                  data-aos-offset="150"
                  name="Firstname"
                  type="text"
                  id="Firstname"
                  placeholder="First name"
                  required
                  pattern="^[A-Za-z]{2,}$"
                  title="First name should contain only letters (2–15 characters)"
                  className="w-[50%] rounded-2xl bg-background m-5 p-3"
                />
                <input
                  data-aos="fade-left"
                  data-aos-offset="150"
                  name="Lastname"
                  type="text"
                  id="Lastname"
                  placeholder="Last name"
                  required
                  pattern="^[A-Za-z]{2,}$"
                  title="First name should contain only letters (2–15 characters)"
                  className="w-[50%]  rounded-2xl bg-background m-5 p-3"
                />
              </div>
              <div>
                <input
                  data-aos="fade-left"
                  data-aos-offset="150"
                  name="contact"
                  type="contact"
                  id="contact"
                  placeholder="Enter mobile number"
                  required
                  pattern="^(?:\+91|91|0)?[6-9]\d{9}$"
                  title="Please enter a valid mobile number"
                  className=" rounded-2xl w-[91%] bg-background m-5 p-3"
                />
              </div>

              <div>
                <button
                  data-aos="fade-in"
                  data-aos-offset="50"
                  type="submit"
                  className="cosmic-button mt-5 w-[90%]"
                >
                  Sand
                </button>
              </div>
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
                  Contact on whatsapp
                </h1>
                <ArrowRight className="text-primary mr-2" />
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918058339867"
              target="_blank"
              data-aos="fade-up"
              // data-aos-offset="150"
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
                <a href="#reviews">
                  <button >Buy Tocken</button>
                </a>{" "}
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="150"
                className="cosmic-button h-10  w-[50%]"
              >
                <a href="#">
                  {" "}
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
