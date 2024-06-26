import Image from "next/image";
import { cn } from "@/lib/utils";

import { challenges } from "@/db/schema";

type Props = {
  id: number;
  text: string;
  imageSrc: string | null;
  audioSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean
  status?: "correct" | "wrong" | "none";
  type: typeof challenges.$inferSelect["type"];
}

export const Card = ({
  id,
  text,
  imageSrc,
  audioSrc,
  shortcut,
  selected,
  onClick,
  disabled,
  status,
  type
}: Props) => {
  return (
    <div
      onClick={() => { }}
      className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-5 lg:p-6 cursor-pointer active:border-b-2 active:translate-y-[2px]",
        selected && "border-sky-300 bg-sky-100 active:bg-sky-100",
        selected && status === "correct" && "border-green-300 bg-green-100 active:bg-green-100",
        selected && status === "wrong" && "border-rose-300 bg-rose-100 active:bg-rose-100",
        disabled && "hover:bg-white pointer-events-none",
        type === "ASSIST" && "w-full lg:p-3"
      )}>
      {imageSrc && (
        <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
          <Image
            src={imageSrc}
            fill
            alt={text}
          />
        </div>
      )}
      <div className={cn("flex justify-between items-center",
        type === "ASSIST" && "flex row-reverse"
      )}>
        {type === "ASSIST" && <div />}
        <p className={cn("text-neutral-600 text-sm lg:text-base",
          selected && "text-sky-500",
          selected && status === "correct" && "text-green-500",
          selected && status === "wrong" && "text-rose-500",
        )}>
          {text}
        </p>
        <div className={cn("lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] flex justify-center items-center border-2 text-neutral-400 lg:text-base text-xs font-semibold rounded-lg",
          selected && "border-sky-300 text-sky-500 ",
          selected && status === "correct" && "border-green-300 text-green-500",
          selected && status === "wrong" && "border-rose-300 text-rose-500",
        )}>
          {shortcut}
        </div>

      </div>
    </div>
  )
}