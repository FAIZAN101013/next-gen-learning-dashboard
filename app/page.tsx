import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = createSupabaseServerClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-10">
        Failed to load courses.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-8">
        Next-Gen Learning Dashboard
      </h1>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl border border-zinc-800 p-4"
          >
            <h2 className="font-semibold">{course.title}</h2>

            <p className="text-zinc-400">
              Progress: {course.progress}%
            </p>

            <p className="text-zinc-500">
              Icon: {course.icon_name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}