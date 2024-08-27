import { HomeIcon, BookOpenIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Resources from "./pages/Resources.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Resources />,
  },
];
