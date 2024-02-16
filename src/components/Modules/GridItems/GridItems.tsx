import React from "react";

function GridItems({Items}){
    return(
        <section className="GridItems">
           
            <div className="ItemContainer">
                {Items.map((icon, i) => (
                    <div className="ParentDiv" key={i} style={{ backgroundImage: `url(${icon.background})` }}>
                        <img className="Items" src={icon.url} alt={icon.name} />
                        <p className="ItemNames">{icon.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default GridItems;