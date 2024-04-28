import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { getGallery, getRecipe } from "../API/FetchGallery";
import AboutUs from '../Modules/AboutUs/AboutUs';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRecipes = await getRecipe();
        setRecipes(fetchedRecipes);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGallery = await getGallery();
        setGallery(fetchedGallery);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  
 // console.log(gallery);
 // console.log(recipes);

  return (
    <RouterProvider 
      router={createBrowserRouter([
        {
          path: '/',
          element: <Header />,
          children: [
            { element: <Main />, index: true },
            { path: 'recipes', element: isLoading ? null : <Gallery searchBar={true} title="Our Recipes" itemsGiven={recipes} />},
            { path: 'recipes/:id', element: <ProjectDetail /> },
            { path: 'contact', element: <Contact /> },
            { path: 'about-us', element: <AboutUs /> },
            { path: 'gallery', element: isLoading ? null : <Gallery searchBar={false} title="Gallery" itemsGiven={gallery} /> },
            { path: 'gallery/:id', element: <ProjectDetail /> },
            { path: '*', element: <Navigate to="/" replace /> },
          ],
        },
      ])}
    />
  );
};

export default App;
