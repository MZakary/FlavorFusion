import React, { useEffect, useState } from "react";
import { getGallery } from "../API/FetchGallery";
import { Link, useLoaderData } from "react-router-dom";
import { Recipes } from "../../Data/Recipes";

interface Recipe {
    title: string;
    thumb: string;
    id: string;
  }

function Gallery(){
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedRecipe = await getGallery();
            setRecipe(fetchedRecipe);
            //console.log(fetchedRecipe);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    return(
        <section className="Gallery">
            <h1>Our delicious recipes</h1>
            <div className='HorizontalLine'/>
            <div className="ProjectContainer">
              {recipe.map((recipe:Recipe)=>(
                    <div className="Project" style={{ backgroundImage: `url(${recipe.thumb})` }} key={recipe.id}>
                      <Link to={`/gallery/${recipe.id}`}><p>{recipe.title}</p></Link>
                    </div>            
              ))}
              <div className="Project" style={{ backgroundImage: `url(/Img/Epic.jpg)` }}>
              <Link to={`/gallery/drink1`}><p>Drink 1</p></Link>
              </div>
            </div>
        </section>
    );
}
export default Gallery;