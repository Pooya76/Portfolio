import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full flex flex-col justify-evenly items-center bg-slate-800 rounded-[20px] py-5 px-12 min-h-[280px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card flex flex-col"
        style={{ transform: "translateZ(60px)" }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col"
        >
          <motion.img
            variants={textVariant()}
            src={icon}
            alt={title}
            className="w-15 h-16 object-contain"
          />
          <motion.h3
            className="text-white text-[15px] font-bold text-center"
            variants={textVariant()}
          >
            {title}
          </motion.h3>
        </div>
      </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Inturduction</p>
        <h2 className={styles.sectionHeadText}> Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my web developer portfolio! I am an enthusiastic and
        motivated intern-level developer eager to build my skills through
        hands-on experience. This portfolio showcases some of the projects I've
        completed as part of my learning journey, highlighting my growing
        expertise in web development and my ability to adapt to new
        technologies.{" "}
        <p className="text-red-700">
          As of now (October 2024), they are all placeholders, as I'm just
          starting my journey.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
