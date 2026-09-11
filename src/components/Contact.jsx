import { useState } from "react";
import { motion } from "framer-motion";
import { Mail,MapPin, Phone, Send,CheckCircle,} from "lucide-react";
import SectionTitle from "./SectionTitle";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <section id="contact" className="bg-[#eee4da] py-20 sm:py-28">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact Us"
          title="Let's Talk Coffee"
          description="Have a question, suggestion, or simply want to say hello? We'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#2b1b14] p-8 sm:p-10"
          >
            <h3 className="text-3xl font-black text-white">
              Come Say Hello
            </h3>

            <p className="mt-4 leading-7 text-[#d4c1b5]">
              Whether you are looking for your morning coffee or a
              cozy place to spend the afternoon, our doors are always
              open.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="rounded-xl bg-[#c68b59]/15 p-3 text-[#c68b59]">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-bold text-white">Visit Us</p>
                  <p className="mt-1 text-sm text-[#bca99c]">
                   3/55 Coffee Street, Salem, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-[#c68b59]/15 p-3 text-[#c68b59]">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="font-bold text-white">Call Us</p>
                  <p className="mt-1 text-sm text-[#bca99c]">
                    +91 63697 09863
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-[#c68b59]/15 p-3 text-[#c68b59]">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="font-bold text-white">Email Us</p>
                  <p className="mt-1 text-sm text-[#bca99c]">
                    hello@dinacafe.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-sm font-semibold text-white">
                Opening Hours
              </p>

              <div className="mt-3 flex justify-between text-sm text-[#bca99c]">
                <span>Monday - Friday</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>

              <div className="mt-2 flex justify-between text-sm text-[#bca99c]">
                <span>Saturday - Sunday</span>
                <span>9:00 AM - 11:00 PM</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-sm sm:p-10"
          >
            <h3 className="text-2xl font-black text-[#2b1b14]">
              Send Us a Message
            </h3>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#dfd1c7] bg-[#faf7f4] px-4 py-3 outline-none transition focus:border-[#c68b59] focus:ring-2 focus:ring-[#c68b59]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#dfd1c7] bg-[#faf7f4] px-4 py-3 outline-none transition focus:border-[#c68b59] focus:ring-2 focus:ring-[#c68b59]/20"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-[#dfd1c7] bg-[#faf7f4] px-4 py-3 outline-none transition focus:border-[#c68b59] focus:ring-2 focus:ring-[#c68b59]/20"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-[#dfd1c7] bg-[#faf7f4] px-4 py-3 outline-none transition focus:border-[#c68b59] focus:ring-2 focus:ring-[#c68b59]/20"
              />
            </div>

            <button
              type="submit"
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2b1b14] px-6 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-[#c68b59] hover:shadow-lg"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;