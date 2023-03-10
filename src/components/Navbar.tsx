import React from "react";
import { GithubLogo, FacebookLogo, TwitterLogo } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between py-8 px-10">
        <p className="text-white text-xl">definitions</p>
        <div className="flex gap-4">
          <FacebookLogo size={32} color="#FFFFFF" weight="duotone" />
          <TwitterLogo size={32} color="#FFFFFF" weight="duotone" />
          <GithubLogo size={32} color="#FFFFFF" weight="duotone" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
