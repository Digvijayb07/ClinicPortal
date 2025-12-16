import { supabase } from "@/lib/supabase";
import { getAvailableSlots } from "@/lib/getAvailableSlots";

type BookingInput = {
  date: string;
  start_time: string;
  end_time: string;
  patient_name: string;
  patient_email?: string;
  patient_phone?: string;
};

export async function bookAppointment(input: BookingInput) {
  const {
    date,
    start_time,
    end_time,
    patient_name,
    patient_email,
    patient_phone,
  } = input;

  // Re-check availability
  const availableSlots = await getAvailableSlots(date);

  const slotStillAvailable = availableSlots.some(
    (slot) => slot.start === start_time && slot.end === end_time
  );

  if (!slotStillAvailable) {
    throw new Error("Selected slot is no longer available");
  }

  // Insert appointment
  const { error } = await supabase.from("appointments").insert({
    patient_name,
    patient_email,
    patient_phone,
    date,
    start_time,
    end_time,
    status: "booked",
  });

  if (error) throw error;

  return { success: true };
}
