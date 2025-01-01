import { useEffect } from "react";

interface MobileHeaderNavProps {
  toggle: boolean;
}

const MobileHeaderNav: React.FC<MobileHeaderNavProps> = ({ toggle }) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", toggle);
  }, [toggle]);

  return (
    <div
      className={`absolute h-dvh w-dvw inset-0 flex justify-end items-center overflow-hidden`}
    >
      <div
        className={`bg-black size-4 translate-x-10 rounded-full transition-all duration-500 ${
          toggle ? "scale-[100]" : "scale-0"
        }`}
        id="MobileNav"
      ></div>
    </div>
  );
};

export default MobileHeaderNav;
