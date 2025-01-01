import Link from "next/link";
import { FC } from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-base font-medium hover:text-primary transition-all ease-linear"
    >
      {label}
    </Link>
  );
};

export default NavLink;
