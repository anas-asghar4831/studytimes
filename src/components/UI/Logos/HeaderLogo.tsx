import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="w-auto h-auto max-w-[150px] max-h-[28px] md:max-w-[180px] md:max-h-[32px] lg:max-w-[195px] lg:max-h-[36px] px-2 flex justify-center items-start"
    >
      <Image
        priority
        src="/Svgs/Logos/NavLogo.svg"
        width={195}
        height={36}
        alt="Logo"
        className="size-full"
      />
    </Link>
  );
};

export default HeaderLogo;
