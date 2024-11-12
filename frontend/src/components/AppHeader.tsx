import { ModeToggle } from "@/utils/ToggleTheme";
import { SideMenuBar } from "./SideNavBar";
import NavBar from "./NavBar";
const AppHeader = () => {
  return (
    <div className="w-full fixed top-0 p-4 flex justify-between">
      <div className="flex items-center gap-3">
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl">Portfolio</p>
        <div className="hidden sm:block">
          <ModeToggle />
        </div>
      </div>
      <div className="sm:hidden flex gap-4">
        <ModeToggle />
        <SideMenuBar />
      </div>
      <div className="hidden sm:block">
        <NavBar />
      </div>
    </div>
  );
};

export default AppHeader;
