import { motion } from "framer-motion";

const projects = [
  { name: "AI Menu Recommender", tag: "AI • RAG", blurb: "Suggests dishes from docs & behavior." },
  { name: "KitchenOps Dashboard", tag: "React • Node", blurb: "Real-time ops & analytics." },
  { name: "Delivery Flow", tag: "Next.js • Stripe", blurb: "Checkout + subscriptions." },
];

export default function Projects() {
  return (
    <section className="py-20 bg-tertiary overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
          House Specials (Projects)
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-primary border border-secondary p-6 shadow-md"
            >
              <p className="text-xs tracking-wider uppercase text-secondary">{p.tag}</p>
              <h3 className="mt-2 text-xl font-bold text-tertiary">{p.name}</h3>
              <p className="mt-2 text-[15px]">{p.blurb}</p>
              <motion.a
                href="/wip"
                className="inline-block mt-4 text-sm font-semibold text-secondary"
                whileHover={{ x: 4 }}
              >
                See Case Study →
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
