import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LANGUAGES {
  id: number;
  name: string;
  img: string;
}
const Languages: LANGUAGES[] = [
  { id: 1, name: "Chinese", img: "/CN.svg" },
  { id: 3, name: "France", img: "/FR.svg" },
  { id: 4, name: "Indonesian", img: "/ID.svg" },
  { id: 5, name: "Japanese", img: "/JP.svg" },
  { id: 6, name: "Korean", img: "/KS.svg" },
  { id: 7, name: "English", img: "/UK.svg" },
];
export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {Languages.map((lang) => (
          <Button size="lg" variant="ghost" className="w-full" key={lang.id}>
            <Image
              src={lang.img}
              alt={lang.name}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />{" "}
            {lang.name.toUpperCase()}
          </Button>
        ))}
      </div>
    </footer>
  );
};
