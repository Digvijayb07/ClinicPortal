import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";

const ReviewModal = ({ open, onClose, name, review, rating, date }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="bg-white max-w-xl w-full rounded-2xl p-6 relative shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Full review */}
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                {review}
              </p>

              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReviewModal;
