import React from "react";

function TwoCols({col1, col2}){
    return(
        <section className="TwoCols">
            <div className="col col1">{col1}</div>
            <div className="VerticalLine"></div>
            <div className="col col2"><p className="Text">{col2}</p></div>
        </section>
    );
}
export default TwoCols;