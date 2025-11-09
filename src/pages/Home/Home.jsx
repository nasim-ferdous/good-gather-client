import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Gallery></Gallery>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
