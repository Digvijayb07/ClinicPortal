# Clinic Appointment Booking System

## Problem Statement
Traditional clinic appointment systems rely heavily on manual processes such as phone calls or in-person scheduling. This often leads to issues like time consumption, poor follow-up, miscommunication, double bookings, and lack of centralized appointment management.

This project aims to design and implement a web-based appointment booking system that simplifies scheduling for patients and provides an easy-to-use dashboard for therapists to manage appointments and availability.

---

## Objectives
- To allow patients to book appointments online without login
- To prevent double booking of time slots
- To provide therapists with a centralized dashboard
- To manage therapist availability dynamically
- To improve efficiency and reduce manual workload

---

## System Overview
The application consists of two main modules:
1. Patient Module (Public)
2. Therapist Module (Admin Dashboard)

---

## Features

### Patient Module  
- View clinic information
- Select appointment date
- View available time slots dynamically
- Book an appointment
- Receive booking confirmation

### Therapist Module
- Secure therapist login
- View all booked appointments
- Weekly calendar view of appointments
- View patient details (name, phone, email)
- Mark appointments as completed or cancelled
- Manage availability by setting working hours or blocking full days

---

## Technology Stack

### Frontend
- React (Vite)
- TypeScript
- Tailwind CSS
- React Router
- shadcn/ui
- Framer Amimation 

### Backend
- Supabase (PostgreSQL database)
- Supabase Authentication
- Row Level Security (RLS)

---

## Database Design

### Appointments Table
| Field | Description |
|------|------------|
| id | Unique appointment ID |
| date | Appointment date |
| start_time | Start time |
| end_time | End time |
| patient_name | Patient name |
| patient_phone | Patient phone |
| patient_email | Patient email |
| status | booked / completed / cancelled |

### Schedule Table
| Field | Description |
|------|------------|
| date | Working date |
| start_time | Start time |
| end_time | End time |
| slot_duration | Slot duration in minutes |

### Unavailable Table
| Field | Description |
|------|------------| 
| date | Blocked date |
| start_time | Nullable |
| end_time | Nullable |

---

## Booking Logic
- Slots are generated based on therapist availability
- Existing appointments are excluded from available slots
- Double booking is prevented at database level
- Appointment status updates are reflected in real-time

---

Conclusion

This project demonstrates the practical application of full-stack web development concepts including frontend design, backend integration, database management, and real-world problem solving.
