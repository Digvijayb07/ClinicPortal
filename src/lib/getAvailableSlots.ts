import { fetchAvailabilityData } from "@/lib/availabilityService";
import { generateAvailableSlots, Slot } from "@/lib/slotGenerator";

export async function getAvailableSlots(date: string): Promise<Slot[]> {
  const { schedule, unavailable, appointments } =
    await fetchAvailabilityData(date);


  if (!schedule) return [];

 
  const isFullDayBlocked = unavailable.some(
    (block) => !block.start_time && !block.end_time
  );

  if (isFullDayBlocked) return [];

 
  const timeBlocks = unavailable.filter(
    (block) => block.start_time && block.end_time
  );

  
  return generateAvailableSlots(
    {
      start_time: schedule.start_time,
      end_time: schedule.end_time,
      slot_duration: schedule.slot_duration,
    },
    timeBlocks,
    appointments,
    date 
  );
}
