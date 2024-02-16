import React, {useState, useEffect} from "react";
import TwoCols from "../Modules/Cols/TwoCols";
import GridItems from "../Modules/GridItems/GridItems";
import PopUp from "../Modules/PopUp/PopUp";
import FeaturedItems from "../Modules/FeaturedItems/FeaturedItems";
import Carousel from "../Modules/Carousel/CarouselTemplate";
import AboutUs from "../Modules/AboutUs/AboutUs";

function About(){


    const sliderData = [
        { image: '/Img/Epic.jpg', name: 'name1'},
        { image: '/Img/Epic.jpg', name: 'name2'},
        { image: '/Img/Epic.jpg', name: 'name3'},
        { image: '/Img/Epic.jpg', name: 'name4'},
        { image: '/Img/Epic.jpg', name: 'name5'},
        { image: '/Img/Epic.jpg', name: 'name6'},

        // Add more items as needed
    ];
    
    //About page:
    /*Everything you see here are seperate modules that I am able to reuse whenever I want just by calling them and giving them their needed information! */
    return(
        <section className="HeaderContainer">
            <Carousel items={sliderData} title={"Latest Recipes"} />
            <AboutUs />
        </section>
    
    );
}


export default About;