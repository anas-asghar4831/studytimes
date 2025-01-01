import NavLink from "@/components/UI/CTAs/NavLink";

const DesktopHeaderNav = () => {
  const navItems = [
    { href: '/', label: 'Study Destination' },
    { href: '/', label: 'Our Services' },
    { href: '/', label: 'About Us' },
    { href: '/', label: 'Contact Us' },
    { href: '/', label: 'Blogs' },
    { href: '/', label: 'Events & Webinars' },
  ];

  return (
    <ul className="flex justify-between items-center gap-4">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink href={item.href} label={item.label} />
        </li>
      ))}
    </ul>
  );
};

export default DesktopHeaderNav;
