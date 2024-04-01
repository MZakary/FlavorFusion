import Nav from '../Modules/Nav/Nav';
import { Outlet } from 'react-router-dom';
import React, {useEffect} from 'react';
import Footer from '../Footer/Footer';

function Header(){

    return(
        <div>
            <Nav logo={"/Img/LogoTest3.png"} links={[
                { name: 'About Us', url: '/about-us' },
                { name: 'Recipes', url: '/recipes' },
                { name: 'logo', url: '/' },
                { name: 'Contact', url: '/contact' },
                { name: 'Gallery', url: '/gallery' },
            ]} />
            
            {/*About is shown here*/}
            <main><Outlet /></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default Header;