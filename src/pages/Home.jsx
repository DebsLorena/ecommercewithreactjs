import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Bar from "../components/Bar";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products";
import Neswletter from "../components/Neswletter";
import Footer from "../components/Footer";
import Banners from "../components/Banners";
import PostInstagram from "../components/PostInstagram";
import About from "../components/About";
import Developer from "../components/Developer";
import ButtonSlide from "../components/ButtonSlide";

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar/>
            <Slider />
            <ButtonSlide />
            <Bar />
            <Categories />
            <Products />
            <Banners />
            <About />
            <PostInstagram />
            <Neswletter />
            <Footer />
            <Developer />
        </div>
    );
};

export default Home