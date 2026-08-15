// src/components/sections/Hero.tsx

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 gap-6"
    >
      <p className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent">
        // currently: FlyRank ML Track
      </p>

      <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-text-primary max-w-3xl leading-tight">
        I turn raw data into decisions. I build things that find signal in noise.
      </h1>

      <p className="font-sans text-base md:text-lg text-brand-text-secondary max-w-xl">
        Currently exploring fraud analytics, ML, and dashboards that solve real problems.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        
          <a href="#projects"
          className="font-sans px-6 py-3 rounded-full bg-brand-accent text-brand-bg-base font-medium text-center hover:opacity-90 transition-opacity"
        >
          View Projects
        </a>
        
         <a href="#contact"
          className="font-sans px-6 py-3 rounded-full border border-brand-accent text-brand-accent font-medium text-center hover:bg-brand-accent hover:text-brand-bg-base transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}