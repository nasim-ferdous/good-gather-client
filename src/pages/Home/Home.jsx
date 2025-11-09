import React from "react";
import { AuthContext } from "../../provider/AuthPRovider";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
