import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonials from "../Testimonials/Testimonials";
import PartnersLogo from "../PartnersLogo/PartnersLogo";
import FAQ from "../FAQ/FAQ";
import ImpactCounter from "../ImpactCounter/ImpactCounter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <ImpactCounter></ImpactCounter>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
      <PartnersLogo></PartnersLogo>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
