# Next-Gen Learning Dashboard

A futuristic, animated student dashboard built with **Next.js App Router**, **Supabase**, **Tailwind CSS**, and **Framer Motion**. This project was developed as part of a Frontend Intern Challenge focused on modern frontend architecture, performant animations, and server-rendered data fetching.

## Live Demo

**Vercel Deployment:** [Add your deployed URL here]

## GitHub Repository

**Repository:** [Add your GitHub repository URL here]

---

## Features

* 🌙 Dark-mode-only futuristic UI
* 📦 Bento Grid dashboard layout
* ⚡ Server-side data fetching using Next.js Server Components
* 🗄️ Supabase PostgreSQL integration
* 📊 Dynamic course cards fetched from the database
* 🎯 Animated progress indicators
* ✨ Framer Motion staggered entrance animations
* 🚀 Spring-based hover interactions
* 📱 Responsive design for desktop, tablet, and mobile devices
* 🎨 Dynamic Lucide icons rendered from database values

---

## Tech Stack

### Framework

* Next.js 16 (App Router)

### Database / Backend

* Supabase
* PostgreSQL

### Styling

* Tailwind CSS

### Animations

* Framer Motion

### Icons

* Lucide React

### Language

* TypeScript

---

## Database Schema

### `courses`

| Column     | Type               |
| ---------- | ------------------ |
| id         | uuid (Primary Key) |
| title      | text               |
| progress   | integer            |
| icon_name  | text               |
| created_at | timestamp          |

---

## Architecture Decisions

### Server Components for Data Fetching

Course data is fetched using **Next.js Server Components**. This approach was chosen to:

* Reduce client-side JavaScript
* Improve initial page performance
* Keep database access logic on the server
* Provide a better user experience through faster page loads

---

### Component Structure

The application was divided into reusable components to improve maintainability and scalability.

```text
app/
components/
  dashboard/
  layout/
  ui/
lib/
  supabase/
types/
```

This separation ensures:

* Routing concerns remain within `app/`
* UI components remain reusable
* Utility functions are centralized
* Type definitions stay consistent across the application

---

### Animation Strategy

Framer Motion was used for all interactive animations.

Key principles followed:

* Use of **transform** properties (`scale`, `translateY`)
* Opacity-based entrance animations
* Spring physics for natural interactions
* Avoidance of layout-shifting animations

This helps maintain smooth performance while satisfying the assignment requirements.

---

## Responsive Design

### Desktop (>1024px)

* Sidebar navigation
* Multi-column Bento Grid layout

### Tablet (768px–1024px)

* Collapsed navigation
* Two-column dashboard layout

### Mobile (<768px)

* Stacked dashboard layout
* Navigation adapted for smaller screens

---

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd next-gen-learning-dashboard
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

### Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

The following environment variables are required:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

An example configuration is included in:

```text
.env.example
```

---

## Challenges Faced

* Designing a Bento Grid layout that remained visually balanced across breakpoints.
* Integrating Supabase with Server Components while maintaining a clean separation between server and client logic.
* Implementing performant animations without introducing layout shifts.
* Dynamically rendering icons from database values using Lucide React.

---

## Future Improvements

* Sidebar layout animations using Framer Motion `layoutId`
* Skeleton loading states for Suspense boundaries
* Bottom navigation for mobile devices
* Enhanced activity analytics visualizations

---

## Author

**Mohammed Faizan Patel**

Portfolio: https://faziansportfolio.netlify.app/

LinkedIn: https://www.linkedin.com/in/mohammed-faizan-p-6939821b5
