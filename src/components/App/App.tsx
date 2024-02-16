import React from 'react'
import { useState } from 'react'
import { RouterProvider, createBrowserRouter, Link, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const App: React.FC = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Header />,
          children: [
            { element: <About />, index: true },
            { 
              path: 'gallery',
              element: <Gallery />,
          },
            { path: 'gallery/:id', element: <ProjectDetail /> },
            { path: 'page3', element: <Contact /> },
          ],
        },
      ])}
    />
  );
};

export default App
