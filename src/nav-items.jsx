import { HomeIcon, AtomIcon, BoxIcon, GlobeIcon, CodeIcon, BrainCircuitIcon, CloudIcon, RobotIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Resources from "./pages/Resources.jsx";
import ChatInterface from "./components/ChatInterface.jsx";

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
    page: <ChatInterface domain="Quantum Computing" />,
  },
  {
    title: "Blockchain",
    to: "/blockchain",
    icon: <BoxIcon className="h-4 w-4" />,
    page: <ChatInterface domain="Blockchain" />,
  },
  {
    title: "Web3",
    to: "/web3",
    icon: <GlobeIcon className="h-4 w-4" />,
    page: <ChatInterface domain="Web3" />,
  },
  {
    title: "AI/ML Development",
    to: "/ai-ml",
    icon: <BrainCircuitIcon className="h-4 w-4" />,
    page: <ChatInterface domain="AI/ML" />,
  },
  {
    title: "Cloud Integration",
    to: "/cloud",
    icon: <CloudIcon className="h-4 w-4" />,
    page: <ChatInterface domain="Cloud Integration" />,
  },
  {
    title: "Auto Agents & Chatbots",
    to: "/agents",
    icon: <RobotIcon className="h-4 w-4" />,
    page: <ChatInterface domain="Auto Agents & Chatbots" />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <CodeIcon className="h-4 w-4" />,
    page: <Resources />,
  },
];
