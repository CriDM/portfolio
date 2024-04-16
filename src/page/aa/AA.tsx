import { useRef } from "react";

function AA({ num }: { num: number }) {
  const slideRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: slideRef,
  //   offset: ["end start", "start end"],
  // });
  // const y = useParallax(scrollYProgress, -300);
  // const yBg = useParallax(scrollYProgress, 300);
  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0.25, 0.5, 0.5, 0.75],
  //   [0, 1, 1, 0]
  // );
  // const opacityBG = useTransform(scrollYProgress, [1], [1]);

  return (
    <section ref={slideRef} data-slide={num}>
      <div className="w-screen  h-screen  relative flex flex-col bg-dark-blue"></div>
    </section>
  );
}

export default AA;
