import { motion } from "framer-motion";

const socials = [
  { label: "Email", href: "mailto:adnanbasha786@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/humblekidpasha" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adnanpasha7/" },
  { label: "X (Twitter)", href: "https://x.com/adnanpasha_" },
];

export default function Contact() {
  return (
    <section className="py-20 bg-primary overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary)] text-center">
          Order Up (Contact)
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Social panel */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-secondary p-6 border border-primary/20"
          >
            <p className="text-sm uppercase tracking-wider text-[var(--primary)]/80">Find me</p>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="font-semibold text-[var(--primary)] hover:underline"
                    target="_blank" rel="noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-tertiary p-6 border border-primary/20 shadow"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm">Name</span>
                <input className="mt-1 w-full rounded-lg border border-[var(--primary)]/20 px-3 py-2 bg-white" />
              </label>
              <label className="block">
                <span className="text-sm">Email</span>
                <input type="email" className="mt-1 w-full rounded-lg border border-[var(--primary)]/20 px-3 py-2 bg-white" />
              </label>
            </div>
            <label className="block mt-4">
              <span className="text-sm">Message</span>
              <textarea rows="4" className="mt-1 w-full rounded-lg border border-[var(--primary)]/20 px-3 py-2 bg-white" />
            </label>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98, rotate: [-1, 1, 0] }}
              className="mt-4 px-5 py-3 rounded-xl bg-[var(--primary)] text-[var(--secondary)] font-semibold"
              type="submit"
            >
              Send to Kitchen
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
