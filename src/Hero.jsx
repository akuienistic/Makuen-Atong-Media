import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div
      className="
   py-16 flex flex-col md:justify-start justify-center items-center text-center text-black"
    >
      <h1 className="md:text-[4rem] text-4xl mx-5 font-extrabold pb-5 md:w-5xl font-Outfit">
        Telling Our Stories. Shaping Our Future.
      </h1>
      <p className="md:text-2xl text-[1.5rem] mx-3 md:w-5xl leading-[2] opacity-75">
        From the heart of our communities to the eyes of the world, we bring you
        stories that honor our heritage, confront our challenges, and celebrate
        our triumphs.{" "}
      </p>
      <div className="flex justify-center items-center py-10">
        <Link to="/about">
          {" "}
          <button className="bg-black text-white px-4 py-2 rounded-full hover:cursor-pointer ml-4">
            Learn More
          </button>
        </Link>
        <Link to="/contact">
          {" "}
          <button className="bg-transparent border border-black text-black px-4 py-2 rounded-full hover:cursor-pointer ml-4">
            Reach Out
          </button>
        </Link>
      </div>
      {/* <div className="flex justify-center items-center gap-3">
        <span>
          <a
            href="https://web.facebook.com/kuchlongMk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-9 w-9 inline-block mr-1 text-blue-700" />
          </a>
        </span>
        <span>
          <a
            href="https://youtube.com/channel/UCrCEXwPyBiP1UDtsPSAz8Cw?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExUDJ1OHZJalNtMmNnazVNZAEeRmkfCrNNgp9pkaPrERmSiXxxDqurczWD9j49x9biRGabl_Qr5QxZQyDWtNA_aem_zlOtOO4G-JbRacvfD_D9eQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="h-9 w-9 inline-block mr-1 text-red-600" />
          </a>
        </span>
      </div> */}
    </div>
  );
}
export default Hero;
