// ProjectDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetail } from '../API/FetchGallery';

interface Recipe {
  title: string;
  thumb: string;
  description: string;
  id: string;
}

function ProjectDetail() {
  const { id } = useParams<{ id?: string }>(); // Make id optional
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Recipe set");
      try {
        // Check if id is defined before making the API call
        if (id) {
          const recipeDetail = await getRecipeDetail(id);
          setRecipe(recipeDetail);
          console.log("Recipe set");
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <section className='ProjectDetail'>
      <div className='ColLeft'>
        <img src={recipe.thumb} alt={recipe.title} />
      </div>
      <div className='ColRight'>
        <h2>{recipe.title}</h2> 
        <p>{recipe.description}</p>
        lol
      </div>
      {/* Add more project details as needed */}
    </section>
  );
}

export default ProjectDetail;
