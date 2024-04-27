import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden flex items-center px-6 h-[50px] bg-green-600 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};
