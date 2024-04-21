import { useRef } from "react";

import ipp from "../../assets/ipp.png";
import polecheck from "../../assets/polecheck.mov";

function Project({ num }: { num: number }) {
  const slideRef = useRef(null);

  return (
    <section ref={slideRef} data-slide={num}>
      <div className="w-screen  h-screen z-50 relative  justify-around flex  flex-col bg-dark-blue bg-[url('./assets/project.svg')] bg-cover bg-top  items-center">
        {/* FIRST PANNEL */}
        <div className="h-2/5 w-5/6 flex flex-row items-center  justify-around backdrop-blur-sm  shadow-minimal  shadow-black rounded-3xl">
          <video
            src={polecheck}
            autoPlay={true}
            muted
            loop
            className="rounded-3xl shadow-lg  h-5/6"
          />
          <div className="flex flex-col ml-6">
            <a
              href="https://www.polecheck.de"
              target="_blank"
              className="text-white text-5xl font-bold relative font-tech  text-shadow-lg shadow- "
            >
              Polecheck.de
            </a>
            <p className="text-white  relative font-tech  text-shadow-lg shadow-dark-blue ">
              A basic website with a small quiz and a contact area<br></br>{" "}
              Created with React.js and Tailwindcss
            </p>
          </div>
        </div>
        {/* SECOND PANNEL */}
        <div className="h-2/5 w-5/6 flex flex-row items-center  justify-around backdrop-blur-sm  shadow-minimal  shadow-black rounded-3xl">
          <div className="flex flex-col ml-6">
            <a
              href="https://www.npmjs.com/package/@digasystems/ipp-browser"
              target="_blank"
              className="text-white text-5xl font-bold relative font-tech  text-shadow-lg shadow- "
            >
              IPP-Browser
            </a>
            <p className="text-white  relative font-tech  text-shadow-lg shadow-dark-blue  mr-5">
              IPP-browser is a powerful library that brings the power of
              Internet Printing Protocol (IPP) directly into the browser. This
              library extends the use of IPP to the browser. With this library,
              you can easily integrate printing to IPP-compatible network
              devices directly from your web applications without having to rely
              on additional plugins or software.
            </p>
          </div>
          <img src={ipp} className="rounded-3xl shadow-lg  h-5/6 mr-5" />
        </div>
      </div>
    </section>
  );
}

export default Project;
