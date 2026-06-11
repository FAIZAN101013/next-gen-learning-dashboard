// app/page.tsx
import { Suspense } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import Sidebar from "@/layout/sidebar";
import HeroTile from "@/components/dashboard/hero-tile";
import CourseGrid from "@/components/dashboard/course-grid";
import ActivityTile from "@/components/dashboard/activity-tile";
import MotionWrapper from "@/components/ui/motion-wrapper";
import Loading from "./loading";

async function Dashboard() {
  const supabase = createSupabaseServerClient();
  const { data: courses, error } = await supabase.from("courses").select("*");

  if (error) {
    return (
      <p className="flex-1 p-10 text-red-400">Failed to load dashboard.</p>
    );
  }

  return (
    <section className="flex-1 p-6">
      <MotionWrapper className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <HeroTile />
        <ActivityTile />
        <CourseGrid courses={courses} />
      </MotionWrapper>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pb-24 md:pb-0">
      <div className="flex">
        <Sidebar />
        <Suspense fallback={<Loading />}>
          <Dashboard />
        </Suspense>
      </div>
    </main>
  );
}