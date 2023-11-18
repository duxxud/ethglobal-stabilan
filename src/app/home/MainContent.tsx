import cn from "classnames";

import { LaunchAppButton } from "./LaunchAppButton";
import style from "./MainContent.module.css";

import { FlexCol, ImageWrapper, Typography } from "lib";
import { Images } from "lib/meta/images";


export const MainContent = () => {
  const floating = cn(style.floating);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <div
          className={`absolute opacity-50 w-24 h-24 bottom-32 left-96 hidden md:block`}
        >
          <ImageWrapper
            src={Images.stabilanObjectnobg}
            alt="Background Shape"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div
          className={`absolute opacity-50 w-40 h-40 top-24 right-10 hidden md:block`}
        >
          <ImageWrapper
            src={Images.stabilanObjectnobg}
            alt="Background Shape"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div
          className={`absolute opacity-50 w-48 h-48 top-6 left-0 hidden md:block`}
        >
          <ImageWrapper
            src={Images.stabilanObjectnobg}
            alt="Background Shape"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <FlexCol className="gap-12">
          <FlexCol className="gap-2 md:gap-3 lg:gap-4 xl:gap-6">
            <Typography type="h1" className="font-bold">
              Welcome to Stabilan
            </Typography>
            <Typography type="body-regular">
              We make it super easy for you to keep your money safe! Think of it
              like a magic shield for your coins. 🛡️
            </Typography>
          </FlexCol>
          <LaunchAppButton label="Join Now" redirectUrl="/insurance" />
        </FlexCol>
      </div>
      <div className="relative w-3/4 md:w-2/5 mx-auto">
        <ImageWrapper
          loading="lazy"
          width={500}
          height={500}
          alt="Chi Protocol"
          src={Images.stabilanLandingCrypto}
          className="w-full h-auto"
        />
        <ImageWrapper
          loading="lazy"
          width={210}
          height={210}
          alt="Floating Coin"
          src={Images.stabilanLandingBitcoin}
          className={floating}
          style={{ top: "30%", left: "30%" }}
        />
      </div>
    </div>
  );
};
