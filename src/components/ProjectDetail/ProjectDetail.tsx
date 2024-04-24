import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetail } from '../API/FetchGallery';
import TwoCols from '../Modules/Cols/TwoCols';
import { Circles } from 'react-loader-spinner';

interface Recipe {
  title: string;
  thumb: string;
  headerImg: string;
  description: string;
  DrinkIngredients: Ingredient[];
  creator: Creator;
  philosophy:Philosophy;
  descriptionImgs: {};
  history:History;
  id: string;
}

interface Ingredient {
  name: string;
  url: string;
  instruction: string;
}

interface Creator {
  name: string;
  profile: string;
  description: string;
}
interface History {
  title: string;
  description: string;
}
interface Philosophy {
  title: string;
  description: string;
}


function ProjectDetail() {
  const { id } = useParams<{ id?: string }>(); // Make id optional
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [addClass, setAddClass] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Recipe set");
      try {
        // Check if id is defined before making the API call
        if (id) {
          const recipeDetail = await getRecipeDetail(id);
          setRecipe(recipeDetail);
          //console.log(recipe);
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const textSection = document.querySelector('.ingredient') as HTMLElement;

        if (textSection) {
            const sectionTop = textSection.offsetTop;
            const sectionHeight = textSection.offsetHeight;

            // Check if the viewport is within the height of the textSection
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setAddClass(true);
            } 
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  if (!recipe) {
    return <section className='ProjetDetailVide'>
      <Circles height="80" width="80" color="#e8d9b4" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="loading" visible={true} />;
    </section>
  }

  console.log(recipe);

  return (
    <section className='ProjectDetail'>

      <div className='headerContainer' style={{ backgroundImage: `url(${recipe.headerImg})` }} >
        <div className='ingredientsContainer'>
            <h1 className='RecipeTitle'>{recipe.title}</h1>
            <ul className='ingredients'>
              {recipe.DrinkIngredients.map((ingredient, index) => (
                <li key={index} className={`ingredient animate__animated delayAnimation${index+2} animate__fadeInUp`}>
                  <img src={ingredient.url} alt={ingredient.name} className='ingredientImage'/>
                  <div className='ingredientText'>
                    <p className='ingredientName'>{ingredient.name}</p>
                    <p className='ingredientInstruction'>{ingredient.instruction}</p>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </div>
      <div className='description'>
        <div><img className={`descriptionImg animate__animated ${addClass ? 'animate__fadeInLeft' : 'hidden'} `} src={recipe.descriptionImgs[0]} alt="" /></div>
        <div>
          <h1 className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInDown' : 'hidden'} `}>History</h1>
          <h2 className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInUp' : 'hidden'} `}>{recipe.history.title}</h2>
          <p className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInUp' : 'hidden'} `}>{recipe.history.description}</p>
        </div>
        <div><img className={`descriptionImg animate__animated ${addClass ? 'animate__fadeInRight' : 'hidden'} `} src={recipe.descriptionImgs[1]} alt="" /></div>
        <div className='Creator'>
          {/* <h1>Creator</h1> */}
          <img src={recipe.creator.profile} alt="" className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInDown' : 'hidden'} `} />
          <h2 className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInLeft' : 'hidden'} `}>{recipe.creator.name}</h2>
          <p className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInLeft' : 'hidden'} `}>{recipe.creator.description}</p>
        </div>
        <div><img className={`descriptionImg animate__animated ${addClass ? 'animate__fadeInUp' : 'hidden'} `} src={recipe.descriptionImgs[2]} alt="" /></div>
        <div>
          <h1 className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInDown' : 'hidden'} `}>Philosophy</h1>
          <h2 className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInRight' : 'hidden'} `}>{recipe.philosophy.title}</h2>
          <p className={`animate__animated animate__delay-1s ${addClass ? 'animate__fadeInRight' : 'hidden'} `}>{recipe.philosophy.description}</p>
        </div>
      </div>
      {/* <TwoCols col1={<button>Previous Recipe</button>} col2={<button>Next Recipe</button>}/> */}
    </section>
  );
}

export default ProjectDetail;