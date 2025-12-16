import logo from "../assets/realestateindia-logo.svg";
import logo2 from "../assets/realestateindia-icon.svg";
function Footer() {
  const links = [
    { name: "Privacy Policy", link: "https://www.realestateindia.com/faq.htm" },
    { name: "Terms", link: "https://www.realestateindia.com/terms-conditions.htm" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <footer className="bg-background mt-25">
        <hr className="h-[1.5px] bg-accent" />
      <div className="max-w-full mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-around gap-6">
    
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex gap-1 tracking-wide">
            <img className="size-8" src={logo} alt="Logo" />{" "}
            <img className="w-60" src={logo2} alt="logo" />{" "}
          </div>
          <p className="text-sm text-muted mt-1 max-w-xs">
            Helping you find homes that match your lifestyle, comfort, and
            future goals.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-muted">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.link} target="_blank"
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-border py-4 text-center text-sm text-muted">
        © {new Date().getFullYear()} RealEstateIndia. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
