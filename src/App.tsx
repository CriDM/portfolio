import {
  LazyMotion,
  MotionValue,
  domAnimation,
  m,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Social from "./component/social/Social";
import AA from "./page/aa/AA";
import About from "./page/about/About";
import Home from "./page/home/Home";

export default function App() {
  const imagesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imagesRef,
    offset: ["start start", "end end"],
  });
  const page = [Home, About, AA];
  let pageNumber = page.length;

  const currentSlide = useTransform(scrollYProgress, [0, 1], [1, pageNumber]);

  return (
    <LazyMotion features={domAnimation}>
      <section>
        {/* cagata al lato */}
        <div className="flex flex-col fixed gap-2 right-2 top-1/2 z-max ">
          {page.map((_, index) => (
            <Dot key={index} dotNum={index + 1} currentSlide={currentSlide} />
          ))}
        </div>

        <Social />

        {/* pagine */}
        <div ref={imagesRef} className="slides">
          {page.map((Component: any, index) => (
            <div className="snap-start snap-always ">
              <Component key={index} num={index + 1} />
            </div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}

function Dot({
  dotNum,
  currentSlide,
}: {
  dotNum: number;
  currentSlide: MotionValue<number>;
}) {
  const multiplier = useMotionValue(dotNum === 1 ? 1 : 0);
  const opacity = useTransform(multiplier, [0, 1], [0.3, 1]);
  const height = useTransform(multiplier, [0, 1], [20, 60]);

  useMotionValueEvent(currentSlide, "change", (latest) => {
    const whole = Math.floor(latest);
    const remainder = latest % 1;

    // Current dot
    if (whole === dotNum) return multiplier.set(1 - remainder);

    // Next dot
    if (whole === dotNum - 1) return multiplier.set(remainder);

    multiplier.set(0);
  });

  const styles = {
    opacity,
    height,
  };

  return (
    <m.button
      style={styles}
      className=" w-2.5 h-5 bg-white  rounded-full opacity-30 border-none cursor-pointer"
      onClick={() => {
        document?.querySelector(`[data-slide="${dotNum}"]`)?.scrollIntoView();
      }}
    />
  );
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
