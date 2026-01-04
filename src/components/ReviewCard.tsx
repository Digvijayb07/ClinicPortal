import { useState } from "react";
import { Star } from "lucide-react";
import ReviewModal from "./ReviewModal";

const ReviewCard = ({ name, review, rating, date }) => {
  const [open, setOpen] = useState(false);

  const isLong = review.length > 160;
  const googleLogo =
    "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png";

  return (
    <>
      <div className="p-6 bg-white rounded-2xl border border-border h-full flex flex-col justify-between">
        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                }`}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="text-sm text-muted-foreground line-clamp-4">
          {review}
        </p>

        {isLong && (
          <button
            onClick={() => setOpen(true)}
            className="text-primary text-sm font-medium mt-2 self-start hover:underline"
          >
            Read more
          </button>
        )}

        {/* Footer */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>

          <img
            src={googleLogo}
            alt="Google review"
            className="w-8 h-8 opacity-100"
          />
        </div>

      </div>

      {/* Modal */}
      <ReviewModal
        open={open}
        onClose={() => setOpen(false)}
        name={name}
        review={review}
        rating={rating}
        date={date}
      />
    </>
  );
};

export default ReviewCard;
