import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-slate-100 h-full lg:w-64 lg:fixed border-r-2 left-0 top-0 px-4",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col flex-1 gap-y-2 mt-8">
        {items.map((item) => (
          <SidebarItem
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
            key={item.label}
          />
        ))}
      </div>
      <div className="lg:mt-56 p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};

type Item = {
  label: string;
  href: string;
  iconSrc: string;
};

const items: Item[] = [
  { label: "Learn", href: "/learn", iconSrc: "/learn.svg" },
  { label: "Leaderboard", href: "/leaderboard", iconSrc: "/leaderboard.svg" },
  { label: "Quests", href: "/quests", iconSrc: "/quests.svg" },
  { label: "Shop", href: "/shop", iconSrc: "/shop.svg" },
];
