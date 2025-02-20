import { HERO_CONTENT } from "../constants"
import profilepic from "../assets/SurekhaSalunkhe_Profile.png";
import {motion} from "motion/react";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mg-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-8 text-4xl font-thin tracking-tight lg:mt-8 lg:text-6xl'>
                        Surekha Maruti Salunkhe
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"> 
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            {/* <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{duration: 1, delay: 1.2}}
                        src={profilepic} alt="kevin Rush"></motion.img>
                </div>
                
            </div> */}
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center lg:justify-end">
                    <motion.img 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilepic} 
                        alt="Surekha Salunkhe"
                        className="rounded-full shadow-lg border-4 border-purple-300 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero