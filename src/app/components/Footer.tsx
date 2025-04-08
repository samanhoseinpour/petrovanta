import Link from 'next/link';
import { footerLinks } from '../constants';

const FooterContent = () => {
  const updatedDate = new Date().getFullYear();

  return (
    <footer
      className="bg-[#111184] p-12 h-full w-full flex flex-col justify-between"
      role="contentinfo"
    >
      {/* Navigation Sections */}
      <nav
        aria-label="Footer Navigation"
        className="flex shrink-0 gap-20 border-b border-[#fff] py-10"
      >
        {footerLinks.map((section) => (
          <section
            key={section.title}
            className="flex flex-col gap-2"
            aria-labelledby={`footer-heading-${section.title}`}
          >
            <h3
              id={`footer-heading-${section.title}`}
              className="mb-2 uppercase text-[#ffffff80]"
            >
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
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
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block text-white group"
                    >
                      <span className="flex items-center gap-1">
                        {link.label}
                      </span>
                      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-700 group-hover:w-full" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>

      {/* Brand Philosophy */}
      <section
        className="border-b border-[#fff] py-10"
        aria-labelledby="footer-about-heading"
      >
        <h3 id="footer-about-heading" className="text-4xl uppercase font-bold">
          Beyond the boundaries
        </h3>
        <p className="mt-2">
          Beyond Boundaries captures the essence of Perseus—an identity rooted
          in resilience, transformation, and relentless forward motion. Like its
          mythological namesake, Perseus represents the ability to confront the
          impossible and emerge stronger, not by following paths already taken,
          but by forging new ones...
        </p>
      </section>

      {/* Branding and Copyright */}
      <section className="flex justify-between items-end border-b border-[#fff] py-5">
        <h2 className="text-[14vw] leading-[0.8] mt-10 uppercase tracking-tight">
          Perseus
        </h2>
        <address className="not-italic">
          <p>
            © {updatedDate} Perseus Creative Studio Inc. All rights reserved.
          </p>
        </address>
      </section>
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
