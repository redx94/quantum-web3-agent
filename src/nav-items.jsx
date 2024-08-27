import { HomeIcon, AtomIcon, BoxIcon, GlobeIcon, CodeIcon } from "lucide-react";
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
    title: "Quantum Computing",
    to: "/quantum",
    icon: <AtomIcon className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Blockchain",
    to: "/blockchain",
    icon: <BoxIcon className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Web3",
    to: "/web3",
    icon: <GlobeIcon className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Code Generator",
    to: "/generator",
    icon: <CodeIcon className="h-4 w-4" />,
    page: <Resources />,
  },
];
