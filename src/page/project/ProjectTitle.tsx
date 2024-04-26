import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "../../App";

function ProjectTitle({ num }: { num: number }) {
  const slideRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["end start", "start end"],
  });
  const y = useParallax(scrollYProgress, -300);
  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.5, 0.75],
    [0, 1, 1, 0]
  );

  return (
    <section ref={slideRef} data-slide={num}>
      <div className="w-screen  h-screen  relative flex flex-col bg-dark-blue">
        <m.div
          style={{ y, opacity }}
          className=" w-full h-full flex relative justify-center items-center z-40 font-bold"
        >
          <h1 className="text-white  md:text-12xl  text-center text-7xl relative font-tech  text-shadow-lg shadow-dark-blue mt-40">
            My Projects
          </h1>
        </m.div>
      </div>
    </section>
  );
}

export default ProjectTitle;
