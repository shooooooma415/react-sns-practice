import { Button } from "@heroui/button";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type NavBarItemProps = {
  icon: ReactNode;
  title: string;
  to: string;
};

const NavBarItem = (prop: NavBarItemProps) => {
  return (
    <div>
      <Link to={prop.to}>
        <Button
          className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-14 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-primary data-[hover=true]:bg-primary/20 w-full"
          color="primary"
          startContent={prop.icon}
          variant="light"
        >
          {prop.title}
        </Button>
      </Link>
    </div>
  );
};

export default NavBarItem;
