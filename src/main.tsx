import React from 'react';
import "bootstrap/scss/bootstrap.scss";
import {createRoot} from 'react-dom/client';
import App from './components/App/App';
import './SCSS/styles.scss';

const rootElement = document.getElementById("root");

if(rootElement){
  const root = createRoot(rootElement);
  root.render(
    <App/>
  );

}else{
  console.error("Root element not found");
}
