import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "../../App";
import useIsMobile from "../../hook/isMobile";

function About({ num }: { num: number }) {
  let isMobile = useIsMobile().isMobile;
  const slideRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["end start", "start end"],
  });

  const y = useParallax(scrollYProgress, -300);
  const yBg = useParallax(scrollYProgress, isMobile ? 0 : 300);
  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.5, 0.75],
    [0, 1, 1, 0]
  );
  const opacityBG = useTransform(scrollYProgress, [1], [1]);

  let text = !isMobile ? (
    <>
      Currently, I am a student enrolled in the Bachelor's degree program in
      Computer Science at the University of Salerno. I have a keen interest in
      emerging technologies and a strong foundation in scientific and
      mathematical fields. 🖥️📚
      <br />
      <br />
      Previously, I worked as a tourist animator, an experience that allowed me
      to develop interpersonal skills, time management abilities, and
      problem-solving capabilities. Additionally, it enabled me to enhance my
      communication skills and work effectively in team settings. 🎨🌴
      <br />
      <br />
      In the past year, I have been employed at a computer company, where I had
      the opportunity to expand my technical skills. Specifically, I gained
      in-depth knowledge of programming languages, software development, and
      computer project management. My experience in this field has honed my
      analytical and problem-solving abilities, as well as my ability to adapt
      quickly to new tools and technologies. 💻🛠️
      <br />
      <br />I am a proactive, determined individual with a strong drive for
      professional growth, constantly seeking new challenges and learning
      opportunities. 🚀📈
    </>
  ) : (
    <>
      With a background in both tourism and computer science, I'm a proactive
      and determined individual with a passion for emerging technologies.
      Currently pursuing a Bachelor's in Computer Science at the University of
      Salerno, I have a solid foundation in scientific and mathematical fields.
      My experience as a tourist animator equipped me with excellent
      interpersonal, time management, and problem-solving skills, while my
      recent employment at a computer company allowed me to deepen my technical
      expertise in programming languages, software development, and project
      management. I thrive on challenges and am constantly seeking opportunities
      for professional growth and learning. 🚀📈
    </>
  );
  return (
    <section ref={slideRef} data-slide={num}>
      <div className="w-screen  h-screen  relative flex flex-col bg-dark-blue">
        <div className=" w-screen h-bgMax absolute bg-[url('./assets/about2.svg')] bg-cover bg-top  z-10" />
        <div
          id={"aboutSection"}
          className="w-screen h-fit flex  flex-col bg-dark-blue bg-cover md:bg-center bg-left text-2xl font-bold m-0  z-20"
        >
          <m.div
            style={{ y, opacity }}
            className=" w-full h-fit flex relative justify-center -z-50"
          >
            <h1 className="text-white md:text-9xl text-5xl mt-6 md:mt-0 relative font-tech  text-shadow-lg shadow-dark-blue ">
              ABOUT ME
            </h1>
          </m.div>
        </div>

        <m.div
          style={{ y: yBg, opacity: opacityBG }}
          className="w-screen h-full  relative flex justify-center items-center mt-6 z-50 transition-all"
        >
          <div className="md:w-7/12  max-h-lvh  h-auto backdrop-blur-lg  font-mono transition duration-500 shadow-minimal  shadow-black rounded-3xl p-6 text-white text-md">
            {text}
          </div>
        </m.div>
      </div>
    </section>
  );
}

export default About;
