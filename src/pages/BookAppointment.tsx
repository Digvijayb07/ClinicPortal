import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { getAvailableSlots } from "@/lib/getAvailableSlots";
import { bookAppointment } from "@/lib/bookAppointment";
import { useToast } from "@/hooks/use-toast";
import { Slot } from "@/lib/slotGenerator";

const BookAppointment = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [booking, setBooking] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  useEffect(() => {
    if (!date) return;

    const loadSlots = async () => {
      setLoading(true);
      setSelectedSlot(null);

      try {
        const availableSlots = await getAvailableSlots(date);
        setSlots(availableSlots);
      } catch {
        setSlots([]);
      } finally {
        setLoading(false);
      }
    };

    loadSlots();
  }, [date]);

  const handleConfirm = async () => {
    if (!date || !selectedSlot || !name || !phone) {
      toast({
        title: "Missing details",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setBooking(true);

    try {
      await bookAppointment({
        date,
        start_time: selectedSlot.start,
        end_time: selectedSlot.end,
        patient_name: name,
        patient_phone: phone,
        patient_email: email,
      });

      navigate("/booking-success", {
        state: {
          name,
          date,
          start_time: selectedSlot.start,
          end_time: selectedSlot.end,
        },
      });
    } catch (error: unknown) {
      toast({
        title: "Booking failed",
        description:
          error instanceof Error
            ? error.message
            : "This slot is no longer available",
        variant: "destructive",
      });
    } finally {
      setBooking(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-subtle">
      <div className="container-custom py-10 max-w-4xl space-y-10">
        <div>
          <h1 className="font-serif text-3xl font-bold">
            Book an Appointment
          </h1>
          <p className="text-muted-foreground">
            Choose a date and available time slot
          </p>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-border shadow-card">
          <label className="text-sm font-medium">Select Date</label>
          <Input
            type="date"
            min={today}
            className="mt-2 max-w-xs"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="bg-card p-6 rounded-2xl border border-border shadow-card">
          <h2 className="font-serif text-xl font-semibold mb-4">
            Available Slots
          </h2>

          {!date && (
            <p className="text-muted-foreground text-sm">
              Select a date to view available slots
            </p>
          )}

          {loading && (
            <p className="text-muted-foreground text-sm">
              Loading available slots...
            </p>
          )}

          {!loading && date && slots.length === 0 && (
            <p className="text-muted-foreground text-sm">
              {date === today
                ? "No slots available for today. Please select another date."
                : "No slots available for this date."}
            </p>
          )}

          {!loading && slots.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {slots.map((slot) => (
                <button
                  key={`${slot.start}-${slot.end}`}
                  onClick={() => setSelectedSlot(slot)}
                  className={cn(
                    "px-4 py-3 rounded-xl border text-sm transition-all",
                    selectedSlot?.start === slot.start
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card hover:border-primary"
                  )}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedSlot && (
          <div className="bg-card p-6 rounded-2xl border border-border shadow-card space-y-4">
            <h2 className="font-serif text-xl font-semibold">
              Patient Details
            </h2>

            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              className="w-full mt-4"
              onClick={handleConfirm}
              disabled={booking}
            >
              {booking ? "Booking..." : "Confirm Appointment"}
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookAppointment;
