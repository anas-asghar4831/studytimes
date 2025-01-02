import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

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
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", toggle);

    const headerLogo =
      mobileNavRef.current?.parentElement?.parentElement?.querySelector(
        "#HeaderLogo"
      );
    const links = headerLogo?.querySelectorAll("a");
    const navItems =
      mobileNavRef.current?.parentElement?.querySelectorAll("#Navlist li");

    if (!tlRef.current) {
      const tl = gsap.timeline({
        defaults: { duration: 0.4, ease: "power2.out" },
        paused: true,
      });

      if (links?.length === 2 && mobileNavRef.current && navItems) {
        tl.to(links[0], { opacity: 0 }, 0)
          .to(links[1], { opacity: 1 }, 0)
          .to(
            mobileNavRef.current,
            {
              scale: 180,
              x: 0,
            },
            0
          )
          .add(() => {
            navItems.forEach((item, index) => {
              tl.to(
                item,
                { x: "0%", duration: 0.3, ease: "power2.out" },
                index * 0.2 // stagger each li animation
              ).to(
                item,
                {
                  "--after-width": "100%", // Animate the CSS variable
                  duration: 0.3,
                  ease: "power2.out",
                },
                index * 0.F // after li x animation is complete
              );
            });
          });
      }

      tlRef.current = tl;
    }

    if (toggle) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [toggle]);

  return (
    <div className="absolute h-dvh w-dvw inset-0 flex justify-end overflow-hidden pt-32">
      <ul
        className="flex w-full gap-16 text-5xl ml-14 mt-6 text-white flex-col z-10 overflow-hidden"
        id="Navlist"
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className="z-10 relative after:w-0 size-fit after:h-1 after:bg-primary after:absolute after:left-0 after:-bottom-4 -translate-x-full"
          >
            <Link href={item.href} className="">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div
        ref={mobileNavRef}
        className="absolute bg-black inset-0 left-full rounded-full size-4 "
        id="MobileNav"
      ></div>
    </div>
  );
};

export default MobileHeaderNav;
