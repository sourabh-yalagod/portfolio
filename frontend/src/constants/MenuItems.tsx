import { Contact, Github, Home, Linkedin, Projector, User } from "lucide-react";

const menuItems = [
  { id: 1, label: "Home", redirect: "/", icon: <Home /> },
  { id: 2, label: "About", redirect: "/about", icon: <User /> },
  { id: 3, label: "Projects", redirect: "/projects", icon: <Projector /> },
  { id: 5, label: "Contact", redirect: "/contact", icon: <Contact /> },
  { id: 4, label: "GitHub", redirect: "/social-sites", icon: <Github /> },
  { id: 6, label: "LinkedIn", redirect: "/social-sites", icon: <Linkedin /> },
];

const useMenuItems = () => {
  return menuItems;
};

export default useMenuItems;
