import React, {useEffect} from 'react';
import {Scroll} from '../../../javascript/featuredItems.js';



function FeaturedItems({Items}){

    useEffect(() => {
        Scroll(); // Call the JavaScript function
    }, []);

    return(
        <section className='FeaturedItems'>
            <h1 className='Title'>Latest Recipes</h1>
            <div className='HorizontalLine'/>

            <div className='Projects hiddenItem'>
            {Items.map((item, i)=>(
                <a href="" className="ParentDiv" key={i}>
                    
                    <div className='ProjectImage' style={{ backgroundImage: `url(/Img/TestImage.jpg)` }}>
                        <a href=""><p>{item.location}</p></a>
                    </div>
                    {/* <img src={item.projectUrl} alt={item.projectName} /> */}
                    
                </a>
            ))}
            </div>
            
        </section>
    );
}
export default FeaturedItems;