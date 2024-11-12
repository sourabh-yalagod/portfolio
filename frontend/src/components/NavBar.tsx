import useMenuItems from "@/constants/MenuItems";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const menuItems = useMenuItems();

  return (
    <nav className="flex gap-5 items-center text-sm">
      {menuItems.map((menuitem) => {
        const isActivated = location?.pathname === menuitem?.redirect;
        return (
          <Link
            key={menuitem?.id}
            className={`${
              isActivated ? "text-orange-500 font-semibold text-[19px]" : ""
            } transition-all underline-offset-4 hover:scale-105`}
            to={menuitem?.redirect}
          >
            {menuitem?.label !== "GitHub" && menuitem?.label !== "LinkedIn"
              ? menuitem?.label
              : ""}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
