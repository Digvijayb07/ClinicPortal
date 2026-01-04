import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Appointment = {
  id: string;
  patient_name: string;
  patient_phone: string | null;
  patient_email: string | null;
  date: string;
  start_time: string;
  end_time: string;
  status: string;
};

function getWeekDates(base: Date) {
  const start = new Date(base);
  start.setDate(base.getDate() - ((base.getDay() + 6) % 7));
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

const Dashboard = () => {
  const [tab, setTab] = useState<"appointments" | "calendar">("appointments");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selected, setSelected] = useState<Appointment | null>(null);
  const [weekStart, setWeekStart] = useState(new Date());

  const loadAppointments = async () => {
    const { data } = await supabase
      .from("appointments")
      .select(
        "id, patient_name, patient_phone, patient_email, date, start_time, end_time, status"
      )
      .order("date", { ascending: true })
      .order("start_time", { ascending: true });

    setAppointments(data || []);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("appointments").update({ status }).eq("id", id);
    setSelected(null);
    loadAppointments();
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <main className="min-h-screen pt-20 bg-gradient-subtle">
      <div className="container-custom py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Appointments and calendar
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant={tab === "appointments" ? "default" : "outline"}
              onClick={() => setTab("appointments")}
            >
              Appointments
            </Button>
            <Button
              variant={tab === "calendar" ? "default" : "outline"}
              onClick={() => setTab("calendar")}
            >
              Calendar
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {tab === "appointments" && (
              <div className="bg-card rounded-2xl border shadow-card divide-y">
                {appointments.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelected(a)}
                    className="w-full text-left p-5 hover:bg-muted/40 transition"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{a.patient_name}</div>
                        <div className="text-sm text-muted-foreground">
                          {a.date} • {a.start_time} – {a.end_time}
                        </div>
                      </div>
                      <div
                        className={cn(
                          "text-xs px-3 py-1 rounded-full",
                          a.status === "completed" &&
                            "bg-green-100 text-green-700",
                          a.status === "cancelled" &&
                            "bg-red-100 text-red-700",
                          a.status === "booked" &&
                            "bg-primary/10 text-primary"
                        )}
                      >
                        {a.status}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {tab === "calendar" && (
              <div className="bg-card rounded-2xl border shadow-card p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setWeekStart(
                        new Date(
                          weekStart.setDate(weekStart.getDate() - 7)
                        )
                      )
                    }
                  >
                    Prev
                  </Button>
                  <div className="font-medium">Weekly Calendar</div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setWeekStart(
                        new Date(
                          weekStart.setDate(weekStart.getDate() + 7)
                        )
                      )
                    }
                  >
                    Next
                  </Button>
                </div>

                <div className="grid grid-cols-7 gap-3">
                  {getWeekDates(weekStart).map((day) => {
                    const dateStr = day.toLocaleDateString("en-CA");
                    const dayAppointments = appointments.filter(
                      (a) => a.date === dateStr
                    );

                    return (
                      <div
                        key={dateStr}
                        className={cn(
                          "border rounded-xl p-2 min-h-[150px]",
                          dateStr === today && "border-primary"
                        )}
                      >
                        <div className="text-sm font-medium mb-2">
                          {day.toLocaleDateString(undefined, {
                            weekday: "short",
                            day: "numeric",
                          })}
                        </div>

                        <div className="space-y-2">
                          {dayAppointments.map((a) => (
                            <button
                              key={a.id}
                              onClick={() => setSelected(a)}
                              className="w-full text-left bg-muted/40 hover:bg-muted px-2 py-1 rounded-lg text-xs"
                            >
                              <div className="font-medium">{a.start_time}</div>
                              <div className="truncate">
                                {a.patient_name}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {selected && (
            <div className="bg-card rounded-2xl border shadow-card p-6 space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="font-serif text-xl font-semibold">
                  Appointment Details
                </h2>
                <button onClick={() => setSelected(null)}>✕</button>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-muted-foreground">Name</div>
                  <div className="font-medium">
                    {selected.patient_name}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Phone</div>
                  <div className="font-medium">
                    {selected.patient_phone || "—"}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Email</div>
                  <div className="font-medium">
                    {selected.patient_email || "—"}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Date</div>
                  <div className="font-medium">{selected.date}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Time</div>
                  <div className="font-medium">
                    {selected.start_time} – {selected.end_time}
                  </div>
                </div>
              </div>

              {selected.status === "booked" && (
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() =>
                      updateStatus(selected.id, "cancelled")
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      updateStatus(selected.id, "completed")
                    }
                  >
                    Mark Completed
                  </Button>
                </div>
              )}

              <Button
                variant="outline"
                onClick={() => setSelected(null)}
                className="w-full"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
