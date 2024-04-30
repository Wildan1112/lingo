import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  id,
  title,
  imageSrc,
  onClick,
  disabled,
  active,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full p-3 pb-6 min-h-[217px] min-w-[200px] border-2 border-b-4 active:border-b-2 active:translate-y-[2px] rounded-xl hover:bg-black/5 cursor-pointer flex flex-col items-center justify-between",
        disabled && " pointer-events-none opacity-50"
      )}
    >
      <div className="min-h-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded bg-green-600 flex items-center justify-center p-1.5">
            <Check className="w-5 h-5 text-white stroke-[4]" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={70}
        height={90}
        className="rounded-lg border drop-shadow-md object-cover"
      />
      <p className="text-neutral-700 text-center font-bold mt-3">{title}</p>
    </div>
  );
};
