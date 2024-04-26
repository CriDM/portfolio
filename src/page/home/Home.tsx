import { m, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useParallax } from "../../App";
import avatar from "../../assets/avatar.png";

function Home({ num }: { num: number }) {
  const words = [
    "a Web Developer!",
    "a Frontend Developer!",
    "a ReactJs Developer!",
    "a IT Student!",
    "Italian!",
  ];

  const typed = useRef(null);

  useEffect(() => {
    const typedFn = new Typed(typed.current, {
      strings: words, // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 600,
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typedFn.destroy();
    };
  }, []);

  const slideRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["end start", "start end"],
  });
  const y = useParallax(scrollYProgress, 500);
  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.5, 0.75],
    [0, 1, 1, 0]
  );

  return (
    <section ref={slideRef} data-slide={num}>
      <>
        <div className="w-screen h-screen flex justify-between  items-center bg-[url('./assets/home.svg')] bg-cover md:bg-center bg-left text-2xl font-bold m-0  z-30 relative">
          <m.div
            className="hidden md:flex flex-col justify-center absolute z-40 right-52  h-4/5"
            style={{ y, opacity }}
          >
            <img
              src={avatar}
              alt="avatar"
              className="h-5/6 rounded-3xl hover:scale-110 transition "
            ></img>
          </m.div>

          <div className="absolute z-40 md:right-1/2  right-40vw top-full -mt-20">
            <svg
              onClick={() => {
                const element = document.getElementById("aboutSection");
                if (element)
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-16 h-16 text-white cursor-pointer animate-bounce transition-colors hover:text-orange-home  "
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
          <div className="md:ml-12 h-5/6 lg:w-3/6">
            <div className="w-auto flex flex-col justify-top">
              <h1 className=" mt-10 text-4xl text-center font-tech text-white  text-shadow  shadow-dark-blue selection:text-dark-blue selection:bg-white">
                Hi! I'm Cristian Della Monica
              </h1>
            </div>
            <div className=" mt-24 w-full flex flex-col justify-top max-w-screen-md md:max-w-full">
              <h1 className=" select-none md:text-7xl text-5xl text-center font-tech bg-gradient-to-l from-pink-600 via-red-600 to-orange-home inline-block text-transparent bg-clip-text ">
                I'm <span ref={typed} />
              </h1>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default Home;
