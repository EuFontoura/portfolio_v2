import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | ''>('');
  const [isLoading, setIsLoading] = useState(false);

  const hideFeedback = () => {
    setTimeout(() => {
      setFeedback('');
      setFeedbackType('');
    }, 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFeedback('Mensagem enviada com sucesso!');
        setFeedbackType('success');
        form.current?.reset();
      })
      .catch(() => {
        setFeedback('Erro ao enviar a mensagem. Tente novamente.');
        setFeedbackType('error');
      })
      .finally(() => {
        setIsLoading(false);
        hideFeedback();
      });
  };

  return (
    <section id="contato" className="min-h-screen bg-black pt-12 md:pt-36 text-white px-6 py-0 selection:bg-gray-400 selection:text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Entre em Contato</h2>

        <form ref={form} onSubmit={handleFormSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">Nome</label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Seu nome"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label="Nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Seu email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label="Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm">Mensagem</label>
            <textarea
              name="message"
              id="message"
              placeholder="Sua mensagem"
              rows={4}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label="Mensagem"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isLoading}
            className={`w-full text-black font-semibold py-2 rounded transition-colors ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-200'
            }`}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </motion.button>
        </form>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`mt-6 p-4 rounded text-center flex items-center gap-2 justify-center ${
                feedbackType === 'success' ? 'bg-green-600' : 'bg-red-600'
              }`}
            >
              {feedbackType === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span>{feedback}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-8 text-sm text-center text-gray-400">
          Ou mande um email direto para{' '}
          <a
            href="mailto:gabrielFMendonca@gmail.com"
            className="text-blue-400 hover:underline"
          >
            gabrielFMendonca@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
