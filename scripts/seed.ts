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

    await db.insert(schema.courses).values(DATA);

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
