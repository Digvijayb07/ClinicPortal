export type Slot = {
  start: string;
  end: string;
  label: string;
  isPast: boolean;
};

function timeToMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function format12(time: string) {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${period}`;
}

export function generateStaticSlots(date: string): Slot[] {
  const day = new Date(date).getDay();
  if (day === 0) return [];

  const todayStr = new Date().toLocaleDateString("en-CA");
  const isToday = date === todayStr;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const sessions = [
    { start: "10:30", end: "13:30" },
    { start: "17:00", end: "21:00" },
  ];

  const slots: Slot[] = [];

  for (const session of sessions) {
    let current = timeToMinutes(session.start);
    const end = timeToMinutes(session.end);

    while (current + 30 <= end) {
      const slotStart = current;
      const slotEnd = current + 30;

      const isPast = isToday && slotEnd <= currentMinutes;

      const start = minutesToTime(slotStart);
      const endTime = minutesToTime(slotEnd);

      slots.push({
        start,
        end: endTime,
        label: `${format12(start)} – ${format12(endTime)}`,
        isPast,
      });

      current += 30;
    }
  }

  return slots;
}
