# 🎉 Convene

### Smart Campus Event & Club Management Platform

> **Connecting Students, Clubs, and Events in One Digital Ecosystem.**

---

## 📌 Table of Contents

- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Target Users (Personas)](#target-users-personas)
- [Vision Statement](#vision-statement)
- [Key Features](#key-features)
- [Success Metrics](#success-metrics)
- [Assumptions](#assumptions)
- [Constraints](#constraints)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Branching Strategy](#branching-strategy)
- [Quick Start – Local Development](#quick-start--local-development)
- [Development Tools](#development-tools)
- [Future Enhancements](#future-enhancements)

---

# 📖 Project Overview

Convene is a modern web platform designed to simplify campus event and club management. It provides a centralized system where students can discover events, register online, receive notifications, and track their participation, while organizers can efficiently create events, manage registrations, monitor attendance, and analyze engagement.

The platform aims to replace scattered communication methods such as WhatsApp groups, spreadsheets, emails, and paper-based registrations with a single digital solution.

---

# ❗ Problem Statement

Most educational institutions manage events through multiple disconnected platforms. Students often miss important announcements, registrations become difficult to track, attendance is recorded manually, and organizers spend significant time coordinating participants.

These challenges result in:

- Missed event opportunities
- Manual registration errors
- Inefficient attendance management
- Poor communication between clubs and students
- Lack of event performance analytics

Convene addresses these challenges through an integrated digital event management platform.

---

# 👥 Target Users (Personas)

## 🎓 Student

- Browse upcoming events
- Register for events
- Receive event reminders
- Access event certificates
- View registration history

---

## 👨‍💼 Club Organizer

- Create and publish events
- Manage registrations
- Track attendance using QR codes
- Communicate with participants
- View event analytics

---

## 👨‍💻 System Administrator

- Manage users and clubs
- Approve or reject events
- Monitor platform usage
- Generate system reports
- Ensure smooth platform operation

---

# 🌟 Vision Statement

To become the preferred digital platform for managing campus events by providing a seamless, transparent, and engaging experience for students, clubs, and administrators through an efficient and user-friendly system.

---

# 🚀 Key Features

### Student Module

- Student Registration & Login
- Browse Events
- Event Search & Filters
- Event Registration
- QR Code Attendance
- Notifications
- Digital Certificates
- Feedback Submission

---

### Organizer Module

- Create Event
- Update Event
- Delete Event
- Manage Participants
- Volunteer Management
- Attendance Dashboard
- Event Analytics

---

### Administrator Module

- User Management
- Club Management
- Event Approval
- Platform Monitoring
- Feedback Moderation

---

# 📈 Success Metrics

The success of Convene will be measured using the following indicators:

- Increase student participation in campus events
- Reduce manual registration work
- Faster event registration process
- Higher attendance tracking accuracy
- Improved organizer satisfaction
- Positive student feedback

---

# ⚙️ Assumptions

- Students possess valid institutional accounts.
- Internet connectivity is available during event registration.
- Organizers provide accurate event information.
- QR scanning devices are available during events.
- Users follow platform guidelines.

---

# 🚧 Constraints

- Initial version supports one institution.
- Continuous internet connection is required.
- Limited by institutional authentication policies.
- Mobile application is not included in Version 1.
- Email notification service depends on third-party providers.

---

# 💻 Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MongoDB |
| API Testing | Postman |
| Version Control | Git & GitHub |
| UI Design | Figma |
| Architecture | Draw.io |
| Containerization | Docker |
| Deployment | Render & Vercel |

---

# 📂 Project Structure

```
Convene/
│
├── backend/
├── frontend/
├── docs/
├── docker/
├── .github/
├── Dockerfile
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# 🌿 Branching Strategy

This project follows the **GitHub Flow** branching strategy.

- `main` contains stable code.
- Every new feature is developed in a separate feature branch.
- Changes are reviewed before merging into the main branch.

Example:

```
main
   │
   └── feature/login-page
             │
             └── Pull Request
                      │
                      └── Merge → main
```

---

# 🚀 Quick Start – Local Development

### Clone Repository

```bash
git clone https://github.com/sahunehi13/Convene.git
```

### Navigate to Project

```bash
cd Convene
```

### Build Docker Image

```bash
docker build -t Convene .
```

### Run Docker

```bash
docker compose up
```

Open your browser:

```
http://localhost:3000
```

---

# 🛠 Development Tools

- Visual Studio Code
- Git
- GitHub
- Docker Desktop
- Draw.io
- Figma
- Postman
- Node.js
- MongoDB

---

# 🚀 Future Enhancements

- AI-based event recommendations
- Mobile application
- Live event chat
- Calendar synchronization
- Multi-college support
- Online ticket payments
- Real-time notifications
- Certificate verification via QR code

---

# 📜 License

This project is developed for educational purposes as part of the **Software Engineering Digital Assignment**.
