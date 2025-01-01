import Hamburger from "../UI/Hamburger";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { useState } from "react";
import DesktopHeaderNav from "../UI/NavBars/MobileHeaderNav";
import HeaderLogo from "../UI/Logos/HeaderLogo";

const Header: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className=" relative flex justify-center">
      <header className="absolute  flex justify-center xl:pt-5 xl:w-auto w-full">
        <div className="flex p-3 items-center  bg-white sm:flex-row w-full xl:rounded-full justify-between HeaderShadow flex-row-reverse xl:mx-5 xl:gap-20">
          <Hamburger
            isChecked={isChecked}
            onCheckboxChange={handleCheckboxChange}
          />
          {isChecked && <div></div>}
          <HeaderLogo />
          <div className="hidden xl:block">
            <DesktopHeaderNav />
          </div>
          <PrimaryButton size="sm" className="sm:block hidden">
            Consult Now
          </PrimaryButton>
        </div>
      </header>
    </div>
  );
};

export default Header;
