import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

import { Course } from "@/types/course";
import Tile from "../ui/tile";
import ProgressBar from "./progress-bar";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
const Icon =
  (Icons[
    course.icon_name as keyof typeof Icons
  ] as LucideIcon) || Icons.BookOpen;

  return (
    <Tile className="relative overflow-hidden p-5">

      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5" />

      <div className="relative z-10">
<div className="mb-4">
         <div className="rounded-2xl bg-zinc-800/80 p-3 w-fit">
            <Icon className="h-6 w-6" />
          </div>
        </div>

      <h3 className="text-xl font-semibold">
  {course.title}
</h3>
        <ProgressBar value={course.progress} />

      </div>
    </Tile>
  );
}