import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { Sidebar } from "./sidebar";
import { AlignLeft } from "lucide-react";
export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignLeft className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
