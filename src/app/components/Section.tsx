'use client';

import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section: React.FC<{
  image: StaticImageData;
  tag: string;
  title: string;
  description: string;
}> = ({ image, tag, title, description }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '10%']);

  return (
    <section ref={sectionRef} className="relative h-[50vh] overflow-hidden">
      <motion.div
        className="absolute w-full h-[120%] -z-10 "
        style={{ top: y }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="90vw"
        />
      </motion.div>

      <div className="flex flex-col gap-4 p-12 text-white">
        <span className="uppercase text-xs">{tag}</span>
        <h2 className="text-4xl max-w-[25ch]">{title}</h2>
        <p className="max-w-[50ch]">{description}</p>
      </div>
    </section>
  );
};

export default Section;
