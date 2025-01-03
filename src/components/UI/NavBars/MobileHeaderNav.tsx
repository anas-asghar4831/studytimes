import { useEffect, useRef } from "react";
import Link from "next/link";
import { createTimeline } from "../Animations/MobileHeader";

interface MobileHeaderNavProps {
  toggle: boolean;
}

const MobileHeaderNav: React.FC<MobileHeaderNavProps> = ({ toggle }) => {
  const navItems = [
    { href: "/", label: "Study Destination" },
    { href: "/", label: "Our Services" },
    { href: "/", label: "About Us" },
    { href: "/", label: "Contact Us" },
    { href: "/", label: "Blogs" },
    { href: "/", label: "Events & Webinars" },
  ];

  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", toggle);

    const headerLogo =
      mobileNavRef.current?.parentElement?.parentElement?.querySelector(
        "#HeaderLogo"
      );
    const links = headerLogo?.querySelectorAll("a");
    const navItemsList = mobileNavRef.current?.parentElement?.querySelectorAll(
      "#Navlist li"
    ) as NodeListOf<HTMLLIElement>; // Explicit type assertion

    const timeline = createTimeline(
      toggle ? "show" : "hide",
      mobileNavRef.current,
      links,
      navItemsList
    );

    timeline.play();
  }, [toggle]);

  return (
    <div className="absolute inset-0 h-dvh overflow-hidden pt-16 pl-14">
      <ul
        className="flex text-white flex-col z-10 md:text-4xl overflow-x-hidden h-full text-2xl gap-4 sm:gap-6 mt-8 ml"
        id="Navlist"
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className="z-10 relative after:w-0 size-fit after:h-[2px] after:bg-primary after:absolute after:left-0 after:-bottom-1 -translate-x-full"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div
        ref={mobileNavRef}
        className="absolute bg-black inset-0 left-full rounded-full size-4"
        id="MobileNav"
      ></div>
    </div>
  );
};

export default MobileHeaderNav;
