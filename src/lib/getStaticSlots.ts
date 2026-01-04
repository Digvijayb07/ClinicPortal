import { generateStaticSlots, Slot } from "@/lib/staticSlotGenerator";

export async function getStaticSlots(date: string): Promise<Slot[]> {
  return generateStaticSlots(date);
}
