const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl max-w-[15ch] text-center">
            The Future Of Oil Well Solutions
          </h1>
          <p className="">
            Innovating Energy Solutions, Empowering a Sustainable Future.
          </p>

          <button className="">stay informed</button>
        </div>
        <div className="flex justify-between w-3/5 max-w-[900px]">
          <HighlightItem title="Drilling Power" content="Over 800 hp" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Drilling Power" content="Over 800 hp" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Drilling Power" content="Over 800 hp" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Drilling Power" content="Over 800 hp" />
        </div>
      </div>
    </section>
  );
};

const HighlightItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="uppercase text-sm">{title}</span>
      <p className="text-2xl">{content}</p>
    </div>
  );
};
export default HeroSection;
