"use client";
import Hamburger from "../UI/Hamburger";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { useState } from "react";
import DesktopHeaderNav from "../UI/NavBars/DesktopHeaderNav";
import HeaderLogo from "../UI/Logos/HeaderLogo";
import MobileHeaderNav from "../UI/NavBars/MobileHeaderNav";
import { MainHeaderAnimation } from "@/components/Layout/Animations/Header";

interface HeaderProps {
  mq: {
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
    is2Xl: boolean;
  };
  Vflage: boolean;
}

const Header: React.FC<HeaderProps> = ({ mq, Vflage }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // Trigger header animation
  MainHeaderAnimation(Vflage);

  // Handle checkbox state for the mobile navigation
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="relative flex justify-center">
      <header
        id="Header"
        className="absolute flex justify-center xl:pt-5 xl:w-auto w-full transform transition-transform duration-500 -translate-y-full power3_in"
      >
        <div className="flex p-3 items-center bg-white sm:flex-row w-full xl:rounded-full justify-between HeaderShadow flex-row-reverse xl:mx-5 xl:gap-20 relative">
          {!mq.isXl && (
            <>
              <Hamburger
                isChecked={isChecked}
                onCheckboxChange={handleCheckboxChange}
              />
              <MobileHeaderNav toggle={isChecked} />
            </>
          )}

          <div
            className="z-10 flex justify-center items-center relative"
            id="HeaderLogo"
          >
            <HeaderLogo className=" " />
            <HeaderLogo
              src="/Svgs/Logos/NavLogoDark.svg"
              className="absolute inset-0 opacity-0  "
            />
          </div>

          {mq.isXl && (
            <div className="hidden xl:block z-10">
              <DesktopHeaderNav />
            </div>
          )}

          {mq.isSm && (
            <PrimaryButton size="sm" className="  z-10">
              Consult Now
            </PrimaryButton>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
