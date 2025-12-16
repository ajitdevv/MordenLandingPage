import NotfoundImage from "../assets/404page.jpg";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <>
      <div>
        <div className="w-full flex justify-center items-center relative">
          <img
            className="w-full h-full flex justify-center items-center "
            src={NotfoundImage}
            alt="404 - Page Not Found"
          />

          <Link to="/" className="cosmic-button absolute bottom-10 right-10">
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
