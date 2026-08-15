import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-16 md:py-32 flex flex-col items-center text-center gap-6"
    >
      <p className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent">
        // contact
      </p>

      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-text-primary">
        Let's talk
      </h2>

      <p className="font-sans text-base md:text-lg text-brand-text-secondary max-w-xl">
        I'm currently open to internships, freelance data/analytics work, and
        collaborations in fintech or AI/ML. Reach out directly or find me on the
        links below.
      </p>

      <a
        href="mailto:dtomisin07@gmail.com"
        className="font-sans flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-brand-bg-base font-medium mt-2 hover:opacity-90 hover:shadow-lg hover:shadow-brand-accent/30 transition-all"
      >
        <Mail size={18} />
        dtomisin07@gmail.com
      </a>
    </section>
  );
}
