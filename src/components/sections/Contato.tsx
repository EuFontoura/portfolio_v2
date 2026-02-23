import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<"success" | "error" | "">("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const hideFeedback = () => {
    setTimeout(() => {
      setFeedback("");
      setFeedbackType("");
    }, 3000);
  };

  const validate = (): boolean => {
    const formData = new FormData(form.current!);
    const newErrors: Record<string, string> = {};

    if (!formData.get("user_name")?.toString().trim()) {
      newErrors.user_name = t("contact.validationRequired");
    }

    const email = formData.get("user_email")?.toString().trim() || "";
    if (!email) {
      newErrors.user_email = t("contact.validationRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.user_email = t("contact.validationEmail");
    }

    if (!formData.get("message")?.toString().trim()) {
      newErrors.message = t("contact.validationRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setFeedback(t("contact.success"));
        setFeedbackType("success");
        form.current?.reset();
        setErrors({});
      })
      .catch(() => {
        setFeedback(t("contact.error"));
        setFeedbackType("error");
      })
      .finally(() => {
        setIsLoading(false);
        hideFeedback();
      });
  };

  return (
    <section
      id="contato"
      className="min-h-screen bg-gray-50 dark:bg-black pt-12 md:pt-36 text-gray-900 dark:text-white px-6 py-0 selection:bg-gray-400 selection:text-black"
    >
      <motion.div
        id="main-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10">{t("contact.title")}</h2>

        <form ref={form} onSubmit={handleFormSubmit} className="flex flex-col gap-5" noValidate>
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">
              {t("contact.name")}
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder={t("contact.namePlaceholder")}
              className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label={t("contact.name")}
              onChange={() => setErrors((prev) => ({ ...prev, user_name: "" }))}
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              {t("contact.email")}
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder={t("contact.emailPlaceholder")}
              className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label={t("contact.email")}
              onChange={() => setErrors((prev) => ({ ...prev, user_email: "" }))}
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm">
              {t("contact.message")}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder={t("contact.messagePlaceholder")}
              rows={4}
              className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label={t("contact.message")}
              onChange={() => setErrors((prev) => ({ ...prev, message: "" }))}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isLoading}
            className={`w-full font-semibold py-2 rounded transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200"
            }`}
          >
            {isLoading ? t("contact.sending") : t("contact.send")}
          </motion.button>
        </form>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`mt-6 p-4 rounded text-center flex items-center gap-2 justify-center text-white ${
                feedbackType === "success" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {feedbackType === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span>{feedback}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          {t("contact.directEmail")}{" "}
          <a
            href="mailto:gabrielFMendonca@gmail.com"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            gabrielFMendonca@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
