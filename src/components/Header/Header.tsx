import Nav from '../Modules/Nav/Nav';
import { Outlet } from 'react-router-dom';
import React, {useEffect} from 'react';
import Footer from '../Footer/Footer';

function Header(){

    return(
        <div>
            <Nav links={[
                { name: 'About', url: '/' },
                { name: 'Recipes', url: '/gallery' },
                { name: 'Quick & Easy', url: '/page5' },
                { name: 'Holidays & Seasons', url: '/page4' },
                { name: 'Contact', url: '/page3' },
            ]} />
            
            {/*About is shown here*/}
            <main><Outlet /></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default Header;