import React from "react";
import Announcements from "../Components/Announcements";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
