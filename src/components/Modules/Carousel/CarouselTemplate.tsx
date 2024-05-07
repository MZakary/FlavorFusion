import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Slider from 'react-slick';
import { getGallery, getRecipe } from "../../API/FetchGallery";
import "slick-carousel/slick/slick-theme.css";
import { Circles } from 'react-loader-spinner';

interface CarouselItem {
  image: string;
  title: string;
  url: string;
}

interface Recipe {
  title: string;
  thumb: string;
  headerImg: string;
  latestRecipe: string;
  id: string;
}


function CarouselTemplate({title, items}) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming your data is already sorted by date in descending order
        setRecipes(items.slice(-5)); // Get the last 5 items
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [items]); // Only 'items' should be included in the dependency array



    if (!Array.isArray(recipes) || recipes.length <= 0) {
        return <section className='carousel-section' id='latestRecipes'>
          <h1 className='SliderTitle'>{title}</h1>
          <div className="LoadingSpinner">
            <Circles height="80" width="80" color="#e8d9b4" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="loading" visible={true} />
          </div>
        </section>;
      }
    
      const settings = {
        className: 'center',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: '100px',
        slidesToShow: 3,
        speed: 500,
        dots:true,   
        autoplay: true,
        
      };
    
      return (
        <section className='carousel-section' id='latestRecipes'>
            <h1 className='SliderTitle'>{title}</h1>
            <Slider {...settings}>
              {recipes.reverse().map((recipe: Recipe) => {
                  return (
                  <div key={recipe.id}>
                      <Link to={`/gallery/${recipe.id}`} >
                        <img src={recipe.latestRecipe} alt="slider" key={recipe.id} className="image" />
                      </Link>
                      <span className='sliderText'>{recipe.title}</span>
                  </div>
                  );
              })}
            </Slider>
        </section>
      );
};

export default CarouselTemplate;
