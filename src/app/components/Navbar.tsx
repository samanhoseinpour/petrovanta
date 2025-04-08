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

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <header className="fixed w-full bg-[#111] px-2 sm:px-5 py-2 sm:py-5 z-50 box-border">
      <nav className="relative flex justify-center uppercase text-xs sm:text-sm font-normal">
        <Link href="/" className="absolute left-0 font-semibold">
          Perseus Creative Studio
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
          <p className="hidden sm:block cursor-pointer">Shop</p>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p>Cart(0)</p>
          </div>
        </motion.div>
      </nav>

      <motion.div
        className="bg-[#111] opacity-50 h-full w-full absolute left-0 top-full"
        variants={background}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </header>
  );
};

const Nav = () => {
  const [selectedLink, setSelectedLink] = useState({
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

const NavBody = ({ menuLinks, selectedLink, setSelectedLink }) => {
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

// TODO: should fix the src images for dynamic rendering images
const NavImage = ({ imgSrc, selectedLink }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={selectedLink.isActive ? 'open' : 'closed'}
      className="hidden lg:block relative w-[500px] h-[350px]"
    >
      <Image
        src={'/images/perseus.png'}
        alt="image"
        fill
        className="object-cover"
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
          <span className="text-[#9f9689]">instagram:</span>{' '}
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
          <span className="text-[#9f9689]">Youtube:</span>{' '}
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
          <span className="text-[#9f9689]">linkedin:</span>{' '}
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
