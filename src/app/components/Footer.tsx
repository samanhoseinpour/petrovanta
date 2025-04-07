import Link from 'next/link';
import { footerLinks } from '../constants';

const FooterContent = () => {
  const updatedDate = new Date().getFullYear();

  return (
    <footer className="bg-[#111184] p-12 h-full w-full flex flex-col justify-between">
      {/* Sections */}
      <div className="flex shrink-0 gap-20 border-b border-[#fff] pb-10">
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h3 className="mb-2 uppercase text-[#ffffff80]">{section.title}</h3>

            {section.links.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative inline-block text-white group"
                >
                  <span className="cursor-pointer flex items-center gap-1">
                    {link.label}
                  </span>
                  <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-700 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block text-white group"
                >
                  <span className="flex items-center gap-1">{link.label}</span>
                  <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-700 group-hover:w-full" />
                </a>
              )
            )}
          </div>
        ))}
      </div>

      <div className="border-b border-[#fff] pb-10">
        <h3 className="text-4xl uppercase font-bold">beyond the boundaries</h3>
        <p className="mt-2">
          Beyond Boundaries captures the essence of Perseus—an identity rooted
          in resilience, transformation, and relentless forward motion. Like its
          mythological namesake, Perseus represents the ability to confront the
          impossible and emerge stronger, not by following paths already taken,
          but by forging new ones. It stands as a symbol of leadership that
          moves past limitations, challenges the status quo, and redefines
          what's achievable. At its core, Perseus is about crossing
          thresholds—of thought, of design, of impact—driven by a purpose that
          doesn't stop at boundaries, but begins where they end.
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-end border-b border-[#fff] pb-10">
        <h2 className="text-[14vw] leading-[0.8] mt-10 uppercase tracking-tight">
          Perseus
        </h2>
        <p>Copyright © {updatedDate} Perseus Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Footer = () => {
  return (
    <footer
      className="relative h-[800px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
