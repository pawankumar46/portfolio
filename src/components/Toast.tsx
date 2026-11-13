import { AnimatePresence, motion } from "framer-motion";

type ToastProps = {
  message: string | null;
};

const Toast = ({ message }: ToastProps) => (
  <div
    role="status"
    aria-live="polite"
    className="pointer-events-none fixed inset-x-0 bottom-6 z-[90] flex justify-center px-4"
  >
    <AnimatePresence>
      {message && (
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-full px-5 py-3 text-sm font-medium text-white"
        >
          <span className="mr-2 text-lime" aria-hidden="true">
            ●
          </span>
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

export default Toast;
