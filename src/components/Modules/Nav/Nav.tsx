import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { getGallery } from "../../API/FetchGallery";

interface Recipe {
    title: string;
    thumb: string;
    description: string;
    id: string;
}

function Nav({ links, logo }) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedRecipes = await getGallery();
                setRecipes(fetchedRecipes);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setIsOpen(isDesktopOrTablet());
        setIsDesktop(isDesktopOrTablet());
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const position = window.scrollY;
          setScrollPosition(position);
        };
    
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Remove scroll event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array to run the effect only once



    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(isDesktopOrTablet());
            setIsOpen(isDesktopOrTablet()); // Adjust isOpen based on the new screen size
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDesktopOrTablet]); // Now, this effect depends on the isDesktopOrTablet function
    
    // Define the isDesktopOrTablet function outside the component
    function isDesktopOrTablet() {
        const screenWidth = window.innerWidth;
        const tabletWidth = 990;
        return screenWidth >= tabletWidth;
    }

    return (
        <nav className={"navbar navbar-expand-lg " + (scrollPosition > 0 ? 'add-background-color' : '')}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                    <span className="material-icons">menu</span>
                </button>
                {/* <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="" /></a> */}
                {/* slideout left is an issue to fix */}
                <div className={"MakeItStick animate__animated " + (isOpen ? `show ${isDesktop ? ' ' : ' animate__slideInLeft'} `  : " animate__slideOutLeft  ") + (scrollPosition > 0 ? 'sticky' : 'onTop')} id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((lien, i) => (
                            lien.name === 'logo' ? (
                                <li key={i} className='nav-item'>
                                    <a href={lien.url}>
                                        <img src={logo} alt="Logo" className="logo"/>         
                                    </a>
                                    <a className={`nav-link ${location.pathname === '/' ? ' isActive ' : ' '} homeButton`} href="/">Home</a>
                                </li>
                            ) : (
                               
                                <li key={lien.url} className='nav-item'>
                                    <a href={lien.url} className={`nav-link ${location.pathname === lien.url ? ' isActive ' : ' '} `}>{lien.name}</a>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
