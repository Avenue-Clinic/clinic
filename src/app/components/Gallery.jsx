"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = ({ dictionary }) => {
  const [selectedTab, setSelectedTab] = useState("images");
  const [buttonsVisible, setButtonsVisible] = useState(false);

  // Make buttons visible after component mounts
  useEffect(() => {
    setButtonsVisible(true);
  }, []);

  const images = Array(12).fill("/images/gallery-example1.jpg");
  const videos = Array(12).fill({
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    title: "Video Title"
  });

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation variants for individual gallery items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="py-[100px]">
      <div className="container px-4 mx-auto">
        <AnimatePresence>
          {buttonsVisible && (
            <motion.div 
              className="flex justify-center gap-[10px] mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.button
                variants={buttonVariants}
                onClick={() => setSelectedTab("images")}
                className={`px-[35px] py-[15px] rounded-[20px] font-bold text-[16px] leading-[19px] transition-transform hover:scale-95 ${
                  selectedTab === "images"
                    ? "bg-[var(--secondary)] text-white"
                    : "bg-[var(--primary)] text-white"
                }`}
              >
                {dictionary?.gallery?.images || "Images"}
              </motion.button>
              <motion.button
                variants={buttonVariants}
                onClick={() => setSelectedTab("videos")}
                className={`px-[35px] py-[15px] rounded-[20px] font-bold text-[16px] leading-[19px] transition-transform hover:scale-95 ${
                  selectedTab === "videos"
                    ? "bg-[var(--secondary)] text-white"
                    : "bg-[var(--primary)] text-white"
                }`}
              >
                {dictionary?.gallery?.videos || "Videos"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {selectedTab === "images" ? (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
            key="images"
          >
            {images.map((src, index) => (
              <motion.div 
                key={index} 
                className="relative aspect-square"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "100px 0px" }}
                variants={itemVariants}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  className="object-cover rounded-[40px]"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
            key="videos"
          >
            {videos.map((_, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "100px 0px" }}
                variants={itemVariants}
              >
                <div className="w-[410px] h-[500px] relative">
                  <Image
                    src="/images/test1.jpg"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    style={{ objectFit: 'cover' }}
                    alt={`Video thumbnail ${index + 1}`}
                    className="rounded-2xl"
                  />
                  <div className="absolute -translate-x-1/2 translate-y-1/2 left-1/2 bottom-1/4">
                    <div className="relative w-[60px] h-[60px] bg-red-500 rounded-full flex items-center justify-center">
                      <Image
                        src="/images/play.svg"
                        width={41}
                        height={41}
                        alt="Play button"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;