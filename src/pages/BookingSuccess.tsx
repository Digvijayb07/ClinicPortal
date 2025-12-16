import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

type BookingState = {
  name: string;
  date: string;
  start_time: string;
  end_time: string;
};

const BookingSuccess = () => {
  const location = useLocation();
  const state = location.state as BookingState | null;

  if (!state) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">No booking found</h1>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 bg-gradient-subtle flex items-center justify-center">
      <div className="bg-card rounded-2xl border shadow-card p-8 max-w-md w-full text-center space-y-6">
        <div className="text-3xl">✅</div>

        <h1 className="font-serif text-2xl font-bold">
          Appointment Confirmed
        </h1>

        <p className="text-muted-foreground">
          Thank you, <span className="font-medium">{state.name}</span>.
          Your appointment has been successfully booked.
        </p>

        <div className="bg-muted/40 rounded-xl p-4 text-sm space-y-2">
          <div>
            <span className="text-muted-foreground">Date</span>
            <div className="font-medium">{state.date}</div>
          </div>

          <div>
            <span className="text-muted-foreground">Time</span>
            <div className="font-medium">
              {state.start_time} – {state.end_time}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link to="/book-appointment">Book Another Appointment</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default BookingSuccess;
