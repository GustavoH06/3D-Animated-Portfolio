import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div 
      className='bubbleContainer'
      animate={{opacity: [0,1]}}
      transition={{duration: 1}}
    >
        <div className="bubble">
          <TypeAnimation
            sequence={[
              1000,
              "Seja bem vindo a meu portfolio",
              1000,
              "Lorem ipsum dolor sit amet lerinat consectetur adipisicing. ",
              1000,
            ]}
            wrapper="span"
            speed={40}
            deletionSpeed={50}
            repeat={Infinity}
          />
        </div>
        <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech
