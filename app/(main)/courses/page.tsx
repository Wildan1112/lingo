import { getCourses, getUserProgress } from "@/db/queries";

import { ListCourses } from "./list";

const CoursesPage = async () => {
<<<<<<< HEAD
  const courses = await getCourses();
=======
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
>>>>>>> 4-User_progress

  return (
    <div className="h-full max-w-5xl px-6 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Course</h1>
      <ListCourses
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
