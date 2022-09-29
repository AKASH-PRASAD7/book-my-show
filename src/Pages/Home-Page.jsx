import React from "react";
import Defaultlayout from "../Layouts/Default-layout";
import HeroCarousel from "../Components/HeroCarousel";
import Cards from "../Components/Cards";
import Cardentertainment from "../Components/Card-entertainment";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="Container my-3  mx-8 p-4">
        <Cards title="Recommended Movies" isDark="false" />
      </div>
      <div className=" mx-8">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png"
          alt="image"
        />
      </div>

      <div className="Container my-3  mx-8 p-4">
        Best Of Entertainment
        <Cardentertainment />
      </div>

      <div className="Container my-3 mx-8 p-4 bg-premeire-800">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
          alt=""
        />
        <Cards
          title="Premiers"
          subject="Brand new releases every Friday"
          isDark="true"
        />
      </div>
      <div className="Container my-3  mx-8 p-4">
        <Cards
          title="Events"
          subject="Events Happening Near You"
          isDark="false"
        />
      </div>
      <div className="Container my-3  mx-8 p-4">
        <Cards title="Online Streaming Events " isDark="false" />
      </div>
    </div>
  );
};

export default Defaultlayout(HomePage);
