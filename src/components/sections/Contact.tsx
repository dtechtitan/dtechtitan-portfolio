import { Mail } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2h3.4l-7.4 8.5L23.5 22h-6.8l-5.3-6.9L5.3 22H1.9l7.9-9L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/dtechtitan", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dtechtitan",
    icon: LinkedinIcon,
  },
  { label: "X", href: "https://x.com/dtechtitan", icon: XIcon },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-16 md:py-32 flex flex-col items-center text-center gap-6"
    >
      <Reveal>
        <p className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent">
          // contact
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-text-primary">
          Let's talk
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="font-sans text-base md:text-lg text-brand-text-secondary max-w-xl">
          I'm currently open to internships, freelance data/analytics work, and
          collaborations in fintech or AI/ML. Reach out directly or find me on
          the links below.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:dtomisin07@gmail.com"
            className="font-sans flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-brand-bg-base font-medium transition-all duration-150 ease-out hover:opacity-90 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand-accent/30"
          >
            <Mail size={18} />
            dtomisin07@gmail.com
          </a>
          <a
            href="/cv/mayowa-daniel-cv.pdf"
            download
            className="font-sans px-8 py-4 rounded-full border border-brand-accent text-brand-accent font-medium transition-all duration-150 ease-out hover:bg-brand-accent hover:text-brand-bg-base hover:scale-[1.03]"
          >
            Download CV
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="flex items-center gap-6 mt-2">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-brand-text-secondary hover:text-brand-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg-base rounded-full"
            >
              <Icon width={22} height={22} />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
