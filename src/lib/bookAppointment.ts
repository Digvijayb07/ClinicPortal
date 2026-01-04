import { supabase } from "@/lib/supabase";
import { getStaticSlots } from "@/lib/getStaticSlots";

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

  const slots = await getStaticSlots(date);

  const slot = slots.find(
    (s) => s.start === start_time && s.end === end_time
  );

  if (!slot) {
    throw new Error("Invalid slot selected");
  }

  if (slot.isPast) {
    throw new Error("This time slot has already passed");
  }

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
