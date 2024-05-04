import { getCourses } from "@/db/queries";
import { ListCourses } from "./list";

const CoursesPage = async () => {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-5xl px-6 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Course</h1>
      <ListCourses courses={courses} activeCourseId={2} />
    </div>
  );
};

export default CoursesPage;
