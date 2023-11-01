import {
  Landing,
  OurCommitments,
  OurEffect,
  OurSecretFormula,
  WhatWeBelieve,
} from "../src/about";
import { Footer, Header } from "../src/components";

export default function AboutUs() {
  return (
    <main>
      <Header title="About Us" />
      <Landing />
      <OurEffect />
      <WhatWeBelieve />
      <OurCommitments />
      <OurSecretFormula />
      <Footer
        className="text-chinese-black"
        socials="text-white hover:text-white hover:bg-smoky-black"
      />
    </main>
  );
}
