import { House, PenLine } from "lucide-react";
import { ReactNode } from "react";

import NavBarItem from "./NavBarItem";

type NavBarItem = {
  icon: ReactNode;
  title: string;
  to: string;
};

const LeftSideBar = () => {
  const navBarItems: NavBarItem[] = [
    { icon: <House />, title: "Home", to: "/" },
    { icon: <PenLine />, title: "Post", to: "/post" },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      {navBarItems.map((item) => (
        <NavBarItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          to={item.to}
        />
      ))}
    </div>
  );
};

export default LeftSideBar;
