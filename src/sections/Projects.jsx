import { motion } from "framer-motion";
import { href } from "react-router";

const projects = [
  {
    name: "Branditars",
    tag: "React • Tailwind • Framer motion • GSAP",
    blurb: "Website for Dubai's Marketing agency",
    href: "/wip"
  },
  {
    name: "KitchenOps Dashboard",
    tag: "React • Node",
    blurb: "Real-time ops & analytics.",
    href: "/wip"
  },
  {
    name: "Delivery Flow",
    tag: "Next.js • Stripe",
    blurb: "Checkout + subscriptions.",
    href: "/wip"
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-tertiary overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-7xl sm:text-5xl font-extrabold text-primary hover:text-secondary transition-all duration-500">
          House Specials <span className="text-black">(Projects)</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-primary border-2 border-secondary p-6 shadow-xl"
            >
              <p className="text-md tracking-wider uppercase text-secondary">
                {p.tag}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-black">
                {p.name}
              </h3>
              <p className="mt-2 text-md text-tertiary">{p.blurb}</p>
              <motion.a
                href={p.href}
                className="inline-block mt-4 text-md border rounded-xl px-2 py-1 border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
                whileHover={{ x: 4, y: 4 }}
              >
                View →
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
