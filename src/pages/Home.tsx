import React from "react";
import { Hero } from "../components/Hero";
import { TrustedBy } from "../components/TrustedBy";
import { About } from "../components/About";
import { BoldCreative } from "../components/BoldCreative";
import { Testimonials } from "../components/Testimonials";
import { Team } from "../components/Team";
import { Blog } from "../components/Blog";
import { FAQ } from "../components/FAQ";
import { BigCTA } from "../components/BigCTA";
import { Services } from "../components/Services";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <BoldCreative />
      <Services/>
      <Testimonials />
      <Team />
      <Blog />
      <FAQ />
      <BigCTA />
    </>
  );
};