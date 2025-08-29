import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import sendingImg from "../assets/sending.png";
import sentImg from "../assets/sent.png";
import failedImg from "../assets/failed.png";

const socials = [
  { label: "Email", href: "mailto:adnanbasha786@gmail.com", icon: faEnvelope },
  {
    label: "Instagram",
    href: "https://instagram.com/humblekidpasha",
    icon: faInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adnanpasha7/",
    icon: faLinkedin,
  },
  { label: "X (Twitter)", href: "https://x.com/adnanpasha_", icon: faXTwitter },
  { label: "Phone", href: "tel:+919108811142", icon: faPhone },
];

const fadeUp = {
  initial: { y: 16, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setStatus("sent");
            formRef.current.reset();
            setTimeout(() => setStatus(""), 5000);
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setStatus("failed");
        }
      );
  };
  return (
    <section
      id="contact"
      className="relative py-24 overflow-x-clip
                 bg-gradient-to-b from-primary via-primary/95 to-primary"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="font-extrabold text-tertiary drop-shadow text-7xl sm:text-5xl">
          Order Up <span className="text-secondary">(Contact)</span>
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2 ">
          {/* Social panel */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-secondary backdrop-blur
                       p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,.15)]"
          >
            <ul className="mt-5 space-y-3.5">
              {socials.map((s, i) => (
                <motion.li
                  key={s.href}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-center justify-between rounded-xl border border-white/10
                   bg-primary px-4 py-3 transition
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                   focus-visible:ring-white/60 focus-visible:ring-offset-primary overflow-hidden"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid place-items-center size-9 rounded-lg bg-tertiary group-hover:scale-110 transition-all duration-700">
                        <FontAwesomeIcon
                          icon={s.icon}
                          className="text-primary"
                        />
                      </span>

                      {/* container for label + username */}
                      <span className="relative w-40">
                        {/* default label */}
                        <span
                          className="block text-md text-secondary
                             transition-all duration-300 group-hover:translate-x-16 opacity-100 group-hover:opacity-0"
                        >
                          {s.label}
                        </span>
                        <span
                          className="absolute left-0 top-0 block text-tertiary
                             translate-x-[-100%] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        >
                          {s.label === "Email" && "adnanbasha786@gmail.com"}
                          {s.label === "Instagram" && "@humblekidpasha"}
                          {s.label === "LinkedIn" && "adnanpasha7"}
                          {s.label === "X (Twitter)" && "@adnanpasha_"}
                          {s.label === "Phone" && "+91 91088 11142"}
                        </span>
                      </span>
                    </span>

                    <span className="opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-tertiary backdrop-blur
                       p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,.15)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-lg text-secondary">Name</span>
                <input
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg bg-primary
                             px-3 py-2 text-secondary placeholder:opacity-60 placeholder:text-tertiary
                             focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </label>

              <label className="block">
                <span className="text-lg text-secondary">Email</span>
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg bg-primary
                             px-3 py-2 text-secondary placeholder:opacity-60 placeholder:text-tertiary
                             focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-lg text-secondary">Message</span>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="What's cooking?"
                className="mt-1 w-full rounded-lg bg-primary
                           px-3 py-2 text-secondary placeholder:opacity-60 placeholder:text-tertiary
                           focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </label>

            <button
              type="submit"
              className="mt-12 mx-auto flex items-center gap-2 rounded-xl
             bg-secondary text-primary font-semibold
             px-5 py-3 shadow hover:shadow-lg hover:scale-110 transition duration-500"
            >
              {status === "" ? (
                <>
                  Place Order <span aria-hidden>🍽️</span>
                </>
              ) : (
                <motion.div
                  className="flex gap-1"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                >
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </motion.div>
              )}
            </button>
            <AnimatePresence mode="wait">
              {!status && <div className="h-24 mt-6" />}
              {status && (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="mt-6 flex justify-center"
                >
                  {status === "sending" && (
                    <motion.img
                      src={sendingImg}
                      alt="Sending..."
                      className="w-24 h-24"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    />
                  )}
                  {status === "sent" && (
                    <motion.img
                      src={sentImg}
                      alt="Sent!"
                      className="w-24 h-24"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    />
                  )}
                  {status === "failed" && (
                    <motion.img
                      src={failedImg}
                      alt="Failed!"
                      className="w-24 h-24"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
