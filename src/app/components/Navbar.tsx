'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  opacity,
  height,
  translate,
  blur,
  background,
} from '../utils/animation';
import { menuLinks } from '../constants';
import { usePathname } from 'next/navigation';

// Type Definitions
interface MenuLink {
  title: string;
  href: string;
  src: string;
}

interface SelectedLink {
  isActive: boolean;
  index: number;
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <header className="fixed w-full bg-gradient-to-bl from-[#111] to black/0 backdrop-blur-xl sm:px-12 py-2 sm:py-5 z-50 box-border text-white">
      <nav className="relative flex justify-center uppercase text-xs sm:text-sm font-normal">
        <Link href="/" className="absolute left-0 font-semibold">
          Petrovanta Energy Technology
        </Link>

        <div
          onClick={() => setIsActive(!isActive)}
          className="flex items-center justify-center gap-2 cursor-pointer "
        >
          <div
            className={`w-[22.5px] pointer-events-none relative  ${
              isActive
                ? 'after:rotate-45 after:top-[-1px] before:-rotate-45 before:top-[1px]'
                : 'after:top-[-4px] before:top-[4px]'
            } after:block after:h-[1px] after:w-full after:bg-white after:relative after:transition-all after:duration-[1000ms] after:ease-[cubic-bezier(0.76,0,0.24,1)] 
            before:block before:h-[1px] before:w-full before:bg-white before:relative before:transition-all before:duration-[1000ms] before:ease-[cubic-bezier(0.76,0,0.24,1)]`}
          ></div>

          <div className="relative flex items-center h-full">
            <motion.p
              variants={opacity}
              animate={!isActive ? 'open' : 'closed'}
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? 'open' : 'closed'}
              className="absolute opacity-0"
            >
              Close
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={opacity}
          animate={!isActive ? 'open' : 'closed'}
          className="absolute right-0 flex gap-6 items-center"
        >
          <Link href="/contact" className="hidden sm:block cursor-pointer">
            Get In Touch With Petrovanta
          </Link>
        </motion.div>
      </nav>

      <motion.div
        className="bg-[#111] opacity-30 h-full w-full absolute left-0 top-full"
        variants={background}
        animate={isActive ? 'open' : 'closed'}
      />

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </header>
  );
};

const Nav = () => {
  const [selectedLink, setSelectedLink] = useState<SelectedLink>({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="flex flex-col gap-[50px] mb-20 lg:flex-row lg:justify-between lg:mb-0">
        <div className="flex flex-col justify-between">
          <NavBody
            menuLinks={menuLinks}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <NavFooter />
        </div>

        <NavImage
          imgSrc={menuLinks[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
};

interface NavBodyProps {
  menuLinks: MenuLink[];
  selectedLink: SelectedLink;
  setSelectedLink: React.Dispatch<React.SetStateAction<SelectedLink>>;
}

const NavBody = ({
  menuLinks,
  selectedLink,
  setSelectedLink,
}: NavBodyProps) => {
  const getChars = (word: string) => {
    return word.split('').map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <nav
      className="flex flex-wrap mt-10 lg:mt-20 max-w-none lg:max-w-[1200px]"
      aria-label="Main navigation"
    >
      {menuLinks.map((link, index) => {
        const { title, href } = link;

        return (
          <Link key={index} href={href} className="uppercase">
            <motion.p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? 'open'
                  : 'closed'
              }
              className="m-0 flex overflow-hidden font-light pr-[30px] pt-2 text-[32px] lg:text-[3vw] lg:pr-[2vw]"
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </nav>
  );
};

interface NavImageProps {
  imgSrc: string;
  selectedLink: SelectedLink;
}

const NavImage = ({ imgSrc, selectedLink }: NavImageProps) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={selectedLink.isActive ? 'open' : 'closed'}
      className="hidden lg:block relative w-[500px] h-[450px]"
    >
      <Image
        src={`/images/${imgSrc}`}
        alt="image"
        fill
        className="object-cover rounded-lg"
        sizes="90vw"
      />
    </motion.div>
  );
};

const NavFooter = () => {
  return (
    <div className="flex flex-wrap items-end uppercase text-[12px] mt-10 lg:justify-between">
      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 lg:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-[#ffffff80]">instagram:</span>{' '}
          <a
            href="https://www.instagram.com/perseustudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            perseustudio
          </a>
        </motion.li>
      </ul>

      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 lg:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-[#ffffff80]">Youtube:</span>{' '}
          <a
            href="https://www.youtube.com/@PerseusCreativeStudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            PerseusCreativeStudio
          </a>
        </motion.li>
      </ul>

      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 lg:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-[#ffffff80]">linkedin:</span>{' '}
          <a
            href="https://www.linkedin.com/company/perseus-creative-studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PerseusCreativeStudio
          </a>
        </motion.li>
      </ul>

      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 lg:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href="mailto:info@perseustudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@perseustudio.com
          </a>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a href="tel:+17788878363" rel="noopener noreferrer">
            (+1) 778 887 8363
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default Navbar;
