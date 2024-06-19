import { redirect } from "next/navigation";

import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";

import { lessons, units as unitsSchema } from "@/db/schema";
import {
  getCoursesProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress
} from "@/db/queries";
import { Metadata } from "next";
import { Unit } from "./unit";

export const metadata: Metadata = {
  title: 'Learn',
}

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();
  const courseProgressData = getCoursesProgress()
  const lessonPercentageData = getLessonPercentage()

  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage
  ] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  if (!courseProgress) {
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              title={unit.title}
              description={unit.description}
              order={unit.order}
              lessons={unit.lessons}
              activeLesson={courseProgress.activeLesson}
              // activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
              //   unit: typeof unitsSchema.$inferSelect;
              // } | undefined}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
