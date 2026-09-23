import React from "react";
import { useEffect, useState } from "react";
import projectVideo from "./assets/projectvid1.mp4";
import pp from "./assets/pp.jpeg";
import { motion } from "framer-motion";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  ExternalLink,
  Mail,
} from "lucide-react";
import {
  personalInfo,
  projects,
  socialLinks,
  experiences,
  tools,
  goals,
  achievements,
  skills,
  certificates,
  animatedBlobs,
} from "./constants/data.jsx";

const App = () => {
  const [time, setTime] = useState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleDateString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
        {animatedBlobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${blob.className}`}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          ></motion.div>
        ))}

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          className="main-grid"
        >
          <motion.div
            variants={itemVariants}
            className="card card-cyan md:col-span-1 
            row-span-3 flex flex-col justify-center gap-3"
          >
            <img
              src={pp}
              alt="photo"
              className="w-[70px] h-[70px]
            rounded-full object-cover"
            />
            <h2>
              <User size={22} className="text-violet-400" />
              <p>{personalInfo.name}</p>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>
          {/* project card */}
          <motion.div
            variants={itemVariants}
            className="card card-violet md:col-span-1 row-span-4 flex flex-col gap-4"
          >
            <h2 className="section-title">
              <Trophy size={20} className="text-violet-400" />
              <span>Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {projects.map((i) => (
                <motion.div
                  key={i}
                  className="releative group rounded-xl overflow-hidden w-full aspect-video cursor-pointer"
                >
                  <video
                    src={projectVideo}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  ></video>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="gradient-btn">
                      Open Project
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
};

export default App;
