import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useMenuItems from "@/constants/MenuItems";
import { ModeToggle } from "@/utils/ToggleTheme";
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const menuItems = useMenuItems();
export function SideMenuBar() {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-56">
        <div className="w-full mt-8 flex justify-between items-center">
          <SheetTitle>Menu Bar</SheetTitle>
          <ModeToggle />
        </div>
        <SheetClose asChild>
          <ul className="grid w-full place-content-center space-y-3 mt-8">
            {menuItems.map((menuItem) => {
              return (
                <li
                  onClick={() => navigate(menuItem?.redirect)}
                  className="hover:scale-95 transition-all hover:bg-blue-700 hover:text-white p-2 px-8 rounded-lg flex w-full gap-4"
                  key={menuItem.id}
                >
                  <p>{menuItem.icon}</p>
                  <p>{menuItem.label}</p>
                </li>
              );
            })}
          </ul>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
