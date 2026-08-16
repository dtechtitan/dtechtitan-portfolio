import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";

const SKILLS = {
  "Languages/Tools": ["Python", "SQL", "Excel/Power BI", "Pandas"],
  "Focus Areas": [
    "Data Analysis",
    "EDA",
    "ML Fundamentals",
    "Fraud/Risk Analytics",
  ],
  "Currently Learning": ["Agentic Engineering", "Applied ML"],
};

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 md:py-32 flex flex-col gap-10"
    >
      <Reveal>
        <p className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent">
          // about
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-text-primary mt-2">
          About Me
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="group relative w-44 h-44 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-brand-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-brand-border group-hover:border-brand-accent/60 transition-colors duration-300">
              <Image
                src="/images/projects/headshot.png"
                alt="Mayowa Daniel"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="font-sans text-base md:text-lg text-brand-text-secondary leading-relaxed flex flex-col gap-5">
            <p>
              I'm Mayowa Daniel — I go by Dani, or dtechtitan online. I'm a Data
              Science student at the University of Lagos, and most of what I
              build lives at the intersection of data, code, and things people
              actually use.
            </p>
            <p>
              My focus right now is data analysis and machine learning, with an
              eye toward Nigerian financial institutions and AI/ML long-term. I
              like projects that start messy — scraped listings, raw transaction
              logs, unstructured spreadsheets — and end up as something someone
              can actually act on.
            </p>
            <p>
              I'm currently doing an ML-track internship at FlyRank, and
              building out a portfolio of projects that range from real estate
              market analysis to fraud detection to local business dashboards.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3">
              <h3 className="font-mono-brand text-xs uppercase tracking-wider text-brand-text-secondary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-sans text-sm px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-border">
          <Counter target={5} label="Projects Shipped" />
          <Counter target={30000} suffix="+" label="Records Analyzed" />
          <Counter target={3} label="Domains Explored" />
        </div>
      </Reveal>
    </section>
  );
}
