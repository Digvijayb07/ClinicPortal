type Schedule = {
  start_time: string; // "10:00"
  end_time: string;   // "17:00"
  slot_duration: number; // minutes
};

type TimeBlock = {
  start_time: string;
  end_time: string;
};

type Appointment = {
  start_time: string;
  end_time: string;
};

export type Slot = {
  start: string; // "10:00"
  end: string;   // "10:30"
  label: string; // "10:00 AM – 10:30 AM"
};

// ---------- Helpers ----------

function timeToMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function overlaps(
  aStart: number,
  aEnd: number,
  bStart: number,
  bEnd: number
) {
  return aStart < bEnd && bStart < aEnd;
}

function formatTo12Hour(time: string) {
  const [hourStr, minute] = time.split(":");
  let hour = Number(hourStr);
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${period}`;
}

// ---------- MAIN FUNCTION ----------

export function generateAvailableSlots(
  schedule: Schedule,
  unavailable: TimeBlock[],
  appointments: Appointment[],
  date: string
): Slot[] {
  const slots: Slot[] = [];

  const startMinutes = timeToMinutes(schedule.start_time);
  const endMinutes = timeToMinutes(schedule.end_time);
  const duration = schedule.slot_duration;

  const now = new Date();
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const selectedDate = new Date(date);
  selectedDate.setHours(0, 0, 0, 0);

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (selectedDate < todayDate) return [];

  for (
    let current = startMinutes;
    current + duration <= endMinutes;
    current += duration
  ) {
    const slotStart = current;
    const slotEnd = current + duration;

    if (
      selectedDate.getTime() === todayDate.getTime() &&
      slotEnd <= currentMinutes
    ) {
      continue;
    }

    const blocked =
      unavailable.some((b) =>
        overlaps(
          slotStart,
          slotEnd,
          timeToMinutes(b.start_time),
          timeToMinutes(b.end_time)
        )
      ) ||
      appointments.some((a) =>
        overlaps(
          slotStart,
          slotEnd,
          timeToMinutes(a.start_time),
          timeToMinutes(a.end_time)
        )
      );

    if (blocked) continue;

    const start = minutesToTime(slotStart);
    const end = minutesToTime(slotEnd);

    slots.push({
      start,
      end,
      label: `${formatTo12Hour(start)} – ${formatTo12Hour(end)}`,
    });
  }

  return slots;
}

