import { motion } from "framer-motion";

const items = [
  { title: "Appetizers (MVPs)", desc: "Rapid prototypes, landing pages, quick validations." },
  { title: "Main Course (Full-stack)", desc: "React + APIs + DB, auth, payments, dashboards." },
  { title: "Chef’s Special (AI)", desc: "Automation, AI copilots, content workflows, RAG." },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#FFECA9] overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary)] text-center">
          Today’s Menu
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: [-0.4, 0.4, 0], transition: { duration: 0.35 } }}
              className="rounded-2xl p-6 bg-[var(--secondary)] border border-[var(--primary)]/20 shadow-md"
            >
              <h3 className="text-xl font-bold text-[var(--primary)]">{card.title}</h3>
              <p className="mt-2 text-[15px]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
