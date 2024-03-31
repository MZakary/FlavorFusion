import React, {useState, useEffect} from "react";
import TwoCols from "../Modules/Cols/TwoCols";
import GridItems from "../Modules/GridItems/GridItems";
import PopUp from "../Modules/PopUp/PopUp";
import FeaturedItems from "../Modules/FeaturedItems/FeaturedItems";
import Carousel from "../Modules/Carousel/CarouselTemplate";
import AboutUs from "../Modules/AboutUs/AboutUs";
import Map from '../Modules/Map/Map'
import SimpleGrid from "../Modules/SimpleGrid/SimpleGrid";
import { getGallery, getRecipe } from "../API/FetchGallery";



function Main(){

    const [itemsGiven, setItemsGiven] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedRecipes = await getRecipe();
                setItemsGiven(fetchedRecipes);
        
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    
    //About page:
    console.log("Everything you see here are seperate modules that I am able to reuse whenever I want just by calling them and giving them their needed information! For example I have");
    /*Everything you see here are seperate modules that I am able to reuse whenever I want just by calling them and giving them their needed information! */

    //console.log(itemsGiven);
    return(
        <section className="HeaderContainer">
            <div className="About animate__animated animate__fadeInDown">
                <a className="scrollBtn animate__animated animate__bounce" href="#latestRecipes"><span className="material-icons">arrow_downward</span></a>
                <div className="HeaderText">
                    <h1 className="animate__animated animate__fadeInLeft animate__delay-1s">The best way to drink</h1>
                    <h4 className="animate__animated animate__fadeInLeft animate__delay-2s"> Where shaking, stirring, and a touch of magic turn ordinary moments into extraordinary cocktails</h4>
                    <p className="animate__animated animate__fadeInLeft animate__delay-2s animate__slower">Step into a world where mixology meets creativity, where every pour tells a story and every cocktail is a masterpiece in its own right. At our bar, we blend passion with precision, infusing each creation with a dash of innovation and a sprinkle of whimsy. From classic concoctions to avant-garde elixirs, our drinks are more than just libations; they're experiences, crafted to delight the senses and ignite the imagination.</p>
                </div>
            </div>



            <Carousel title={"Latest Recipes"} items={itemsGiven}/>
            <GridItems Title={'Our Categories'} Items={itemsGiven}/>
            <SimpleGrid Title={"Best Reviewed"} Items={itemsGiven}/>
            {/* <Map /> */}
            {/* <AboutUs /> */}
        </section>
    
    );
}


export default Main;