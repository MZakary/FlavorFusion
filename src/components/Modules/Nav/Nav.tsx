import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Nav({links}){
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);


    return(

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#"><img className="logo" src="/*LOGO*/" alt="" /></a>
            <div className={"collapse navbar-collapse " + (isOpen ? "show" : "")} id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        links.map((lien, i)=>(
                        location.pathname === lien.url ? <li key={lien.url} className='nav-item'>
                            <Link className='nav-link isActive' to={lien.url}>{lien.name}</Link>
                            </li> : <li key={lien.url} className='nav-item'>
                                <Link to={lien.url} className='nav-link'>{lien.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn searchBar" type="submit">Search</button>
                </form>
                {/* <a className="navbar-text">Try out our new recipes!</a> */}
            </div>
        </div>
    </nav>

    );
}
export default Nav;