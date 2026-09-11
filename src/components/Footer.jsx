import {Coffee,Mail,Phone,MapPin,ArrowRight,} from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#1e140f] text-white">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#c68b59]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#806d61]/10 blur-3xl" />

      <div className="relative mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ perspective: 1000 }}
          >
            <motion.a
              href="#home"
              whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c68b59] shadow-lg shadow-[#c68b59]/30">
                <Coffee size={22} />
              </div>

              <div>
                <h2 className="font-bold">
                  Dina<span className="text-[#c68b59]">&</span>Cafe
                </h2>

                <p className="text-[9px] uppercase tracking-widest text-[#a99487]">
                  Brew • Relax • Enjoy
                </p>
              </div>
            </motion.a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#a99487]">
              Great coffee, great conversations, and great memories.
              Your favorite coffee house, made with love.
            </p>

            <div className="mt-6 flex gap-3">
              <motion.a
                href="#footer"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border border-white/10 p-2.5 text-[#cdbbb0] transition hover:bg-[#c68b59] hover:text-white shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </motion.a>
              <motion.a
                href="#footer"
                aria-label="Facebook"
                whileHover={{ scale: 1.15, y: -4, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border border-white/10 p-2.5 text-[#cdbbb0] transition hover:bg-[#c68b59] hover:text-white shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </motion.a>
              <motion.a
                href="#footer"
                aria-label="Twitter"
                whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border border-white/10 p-2.5 text-[#cdbbb0] transition hover:bg-[#c68b59] hover:text-white shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold">Quick Links</h3>

            <div className="mt-5 space-y-3 text-sm text-[#a99487]">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 6, color: "#c68b59" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="block transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold">Contact</h3>

            <div className="mt-5 space-y-4 text-sm text-[#a99487]">
              <motion.div 
                whileHover={{ x: 4 }} 
                className="flex gap-3 items-center cursor-pointer"
              >
                <MapPin
                  size={18}
                  className="shrink-0 text-[#c68b59]"
                />
                <span>3/55 Coffee Street, Salem</span>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }} 
                className="flex gap-3 items-center cursor-pointer"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-[#c68b59]"
                />
                <span>+91 63697 09863</span>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }} 
                className="flex gap-3 items-center cursor-pointer"
              >
                <Mail
                  size={18}
                  className="shrink-0 text-[#c68b59]"
                />
                <span>hello@dinacafe.com</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold">Stay Connected</h3>

            <p className="mt-5 text-sm leading-6 text-[#a99487]">
              Subscribe for coffee news, special offers and café
              updates.
            </p>

            <motion.form 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-5 flex overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl"
            >
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#806d61]"
              />

              <motion.button
                type="submit"
                aria-label="Subscribe"
                whileHover={{ backgroundColor: "#d49a68", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#c68b59] px-4 transition-colors flex items-center justify-center text-white"
              >
                <ArrowRight size={18} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-t border-white/10 pt-7 text-center text-sm text-[#806d61]"
        >
          © 2026 Dina Cafe House. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;