import CourseCard from "@/components/dashboard/course-card";
import { Course } from "@/types/course";

interface Props {
  courses: Course[];
}

export default function CourseGrid({ courses }: Props) {
  return (
    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}