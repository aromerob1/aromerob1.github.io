import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDownRight } from "react-icons/fi";
import { profile } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.09, ease },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-grid -z-[1]" />
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-12 items-center gap-12 lg:gap-8">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.div
            custom={0}
            variants={rise}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--hairline)] bg-white/[0.02] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-xs text-[var(--muted)]">
              Open to full-stack & backend roles · {profile.location}
            </span>
          </motion.div>

          <motion.p
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="eyebrow mb-5"
          >
            {profile.fullName}
          </motion.p>

          <h1 className="font-display text-[11vw] sm:text-6xl lg:text-6xl xl:text-7xl font-semibold leading-[0.97] tracking-tight">
            <motion.span
              custom={2}
              variants={rise}
              initial="hidden"
              animate="show"
              className="block"
            >
              {profile.headline.before}{" "}
              <span className="font-serif-italic accent-gradient font-normal">
                {profile.headline.accent}
              </span>
            </motion.span>
            <motion.span
              custom={3}
              variants={rise}
              initial="hidden"
              animate="show"
              className="block"
            >
              {profile.headline.after}
            </motion.span>
          </h1>

          <motion.p
            custom={4}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-xl text-base sm:text-lg text-[var(--muted)] leading-relaxed text-balance"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={5}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--accent)] text-black font-medium hover:opacity-90"
            >
              View my work
              <FiArrowDownRight className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-full border border-[var(--hairline)] hover:border-white/25 hover:bg-white/[0.03]"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full text-[var(--muted)] hover:text-[var(--fg)] hover:bg-white/[0.04]"
              >
                <FiGithub className="text-lg" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full text-[var(--muted)] hover:text-[var(--fg)] hover:bg-white/[0.04]"
              >
                <FiLinkedin className="text-lg" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="lg:col-span-5 relative w-full max-w-[18rem] sm:max-w-xs lg:max-w-none mx-auto"
        >
          <div
            className="absolute -inset-6 rounded-full blur-3xl -z-10"
            style={{ background: "var(--accent)", opacity: 0.16 }}
          />
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] border border-[var(--accent)]/30 -z-10" />
          <div className="relative rounded-[1.75rem] overflow-hidden border border-[var(--hairline)] aspect-[4/5]">
            <img
              src="/andres.webp"
              alt="Andrés Romero"
              className="w-full h-full object-cover"
              width={820}
              height={1025}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg)]/70 backdrop-blur-md border border-[var(--hairline)]">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-xs text-[var(--fg)]/90">Available for work</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--faint)] text-xs font-mono-brand tracking-widest"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
