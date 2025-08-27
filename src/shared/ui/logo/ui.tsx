import { Image } from "@mantine/core";
import logo from "@/shared/assets/brand-logo.svg";

type LogoProps = {
  width?: number | string;
  height?: number | string;
};

export const BrandLogo = ({ width, height }: LogoProps) => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={width}
      height={height}
      fit="contain"
      loading="lazy"
    />
  );
};
