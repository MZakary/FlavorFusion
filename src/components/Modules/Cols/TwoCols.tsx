import React from "react";

function TwoCols({col1, col2}){
    return(
        <section className="TwoCols">
            <div className="colContainer">
                <div className="col col1">{col1}</div>
                {/* <div className="VerticalLine"></div> */}
                <div className="col col2">{col2}</div>
            </div>
        </section>
    );
}
export default TwoCols;