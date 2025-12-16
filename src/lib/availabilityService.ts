import { supabase } from "@/lib/supabase";

export async function fetchAvailabilityData(date: string) {
 

  const dayOfWeek = new Date(date).getDay(); 
  
  const { data: schedule, error: scheduleError } = await supabase
    .from("therapist_schedule")
    .select("*")
    .eq("day_of_week", dayOfWeek)
    .single();

  if (scheduleError) throw scheduleError;

  const { data: unavailable, error: unavailableError } = await supabase
    .from("unavailable_blocks")
    .select("start_time, end_time")
    .eq("date", date);

  if (unavailableError) throw unavailableError;

  
  const { data: appointments, error: appointmentsError } = await supabase
    .from("appointments")
    .select("start_time, end_time")
    .eq("date", date)
    .eq("status", "booked");

  if (appointmentsError) throw appointmentsError;

  return {
    schedule,
    unavailable,
    appointments,
  };
}
