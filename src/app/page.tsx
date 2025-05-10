import { HeroSection, Section } from './components';

import bgOverview from '../../public/images/3.jpeg';
import bg2 from '../../public/images/4.jpeg';
import bg3 from '../../public/images/1.jpeg';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="grid grid-cols-1">
        <Section
          image={bgOverview}
          tag="features of services"
          title="Services Show Cases."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique quos praesentium ab eius est, a ipsa eum labore culpa aliquid accusamus quaerat error earum quasi, officia repudiandae modi laudantium."
        />
        <Section
          image={bg2}
          tag="features of services"
          title="Services Show Cases."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique quos praesentium ab eius est, a ipsa eum labore culpa aliquid accusamus quaerat error earum quasi, officia repudiandae modi laudantium."
        />
        <Section
          image={bg3}
          tag="features of services"
          title="Services Show Cases."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique quos praesentium ab eius est, a ipsa eum labore culpa aliquid accusamus quaerat error earum quasi, officia repudiandae modi laudantium."
        />
        <Section
          image={bg3}
          tag="features of services"
          title="Services Show Cases."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique quos praesentium ab eius est, a ipsa eum labore culpa aliquid accusamus quaerat error earum quasi, officia repudiandae modi laudantium."
        />
      </section>
    </main>
  );
}
