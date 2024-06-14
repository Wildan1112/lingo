import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values(DATA);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 5, // Spanish
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the Basics)
        title: "Verbs",
        order: 1,
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the Basics)
        title: "Verbs",
        order: 2,
      },
      {
        id: 3,
        unitId: 1, // Unit 1 (Learn the Basics)
        title: "Verbs",
        order: 3,
      },
      {
        id: 4,
        unitId: 1, // Unit 1 (Learn the Basics)
        title: "Verbs",
        order: 4,
      },
      {
        id: 5,
        unitId: 1, // Unit 1 (Learn the Basics)
        title: "Verbs",
        order: 5,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man" ?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1, // Which one of these is the "the man"?
        correct: true,
        text: "el hombre",
        imageSrc: "/man.svg",
        audioSrc: "/sp_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        correct: false,
        text: "la mujer",
        imageSrc: "/women.svg",
        audioSrc: "/sp_women.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        correct: false,
        text: "el robot",
        imageSrc: "/robot.svg",
        audioSrc: "/sp_robot.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed database");
  }
};

main();

const DATA = [
  { id: 1, title: "Indonesia", imageSrc: "/ID.svg" },
  { id: 2, title: "English", imageSrc: "/UK.svg" },
  { id: 3, title: "Japanese", imageSrc: "/JP.svg" },
  { id: 4, title: "Chinese", imageSrc: "/CN.svg" },
  { id: 5, title: "Spanish", imageSrc: "/SP.svg" },
];
