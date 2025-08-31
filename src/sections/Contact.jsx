import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import sendingImg from "../assets/sending.png";
import sentImg from "../assets/sent.png";
import failedImg from "../assets/failed.png";
import { socialLinks } from "../constants";
import InputField from "../components/InputField";

import pop2 from "../assets/audio/pop2.mp3";
import ding from "../assets/audio/ding.mp3";

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
  const popAudioRef = useRef();
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
            playDing();
            formRef.current.reset();
            setTimeout(() => setStatus(""), 5000);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          setStatus("failed");
          setTimeout(() => {
            setStatus("");
            formRef.current.reset();
          }, 5000);
        }
      );
  };

  const handlePopHover = (start) => {
    if (popAudioRef.current) {
      popAudioRef.current.currentTime = 0;
      start ? popAudioRef.current.play() : popAudioRef.current.pause();
    }
  };

  const playDing = () => {
    const audio = new Audio(ding);
    audio.volume = 0.5; // adjust volume
    audio.play().catch(() => {}); // prevent errors if autoplay is blocked
  };
  return (
    <section
      id="contact"
      className="relative py-24 overflow-x-clip
                 bg-gradient-to-b from-primary via-primary/95 to-primary"
    >
      <audio ref={popAudioRef} src={pop2} preload="auto" />
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
              {socialLinks.map((s, i) => (
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
                    onMouseEnter={() => handlePopHover(true)}
                    onMouseLeave={() => handlePopHover(false)}
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
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Name"
                name="from_name"
                placeholder="Your name"
                required
              />
              <InputField
                label="Email"
                type="email"
                name="reply_to"
                placeholder="you@example.com"
                required
              />
            </div>

            <InputField
              label="Message"
              name="message"
              placeholder="What's cooking?"
              required
              textarea
              rows={4}
            />
            <AnimatePresence mode="wait">
              {/* Default Button */}
              {status === "" && (
                <motion.button
                  key="button"
                  type="submit"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} // faster fade
                  className="mt-12 mx-auto flex items-center gap-2 rounded-xl
                 bg-secondary text-primary text-xl
                 px-5 py-3 shadow hover:shadow-lg 
                 transition-transform duration-700 hover:scale-110 
                 transform-gpu will-change-transform"
                >
                  Place Order <span aria-hidden>🍔</span>
                </motion.button>
              )}

              {/* Sending */}
              {status === "sending" && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-3 flex justify-center"
                >
                  <motion.img
                    src={sendingImg}
                    alt="Sending..."
                    className="w-20 h-20 md:w-24 md:h-24"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }} // quicker bounce
                  />
                </motion.div>
              )}

              {/* Sent */}
              {status === "sent" && (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: [1, 1.1, 1] }} // pop effect
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-3 flex justify-center"
                >
                  <motion.img src={sentImg} alt="Sent!" className="w-20 h-20 md:w-24 md:h-24" />
                </motion.div>
              )}

              {/* Failed */}
              {status === "failed" && (
                <motion.div
                  key="failed"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: [1, 1.05, 1] }} // subtle pop
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-3 flex justify-center"
                >
                  <motion.img
                    src={failedImg}
                    alt="Failed!"
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
