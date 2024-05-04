import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
}

export const Card = ({
  id,
  title,
  imageSrc,
  onClick,
  active,
  disabled,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "p-3 pb-6 min-h-56 h-full min-w-[200px] border-2 border-b-4 flex flex-col justify-between items-center rounded-xl cursor-pointer hover:bg-black/5 active:border-b-2 active:translate-y-[2px]",
        disabled && "opacity-50 pointer-events-none"
      )}
    >
      <div className="flex items-center justify-end w-full min-h-6">
        {active && (
          <div className="bg-green-500 rounded-md flex items-center justify-center p-1.5">
            <Check className="w-4 h-4 text-white stroke-[4]" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={70}
        height={90}
        className="rounded-lg drop-shadow-md object-cover"
      />
      <p className="mt-3 text-center text-neutral-700 font-bold">{title}</p>
    </div>
  );
};
