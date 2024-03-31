import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Circles } from 'react-loader-spinner';
import { Link } from "react-router-dom";

// Define a type for alcohol objects
type Alcohol = {
    type: string;
    imageUrl: string;
};

function GridItems({ Title, Items }) {
    const [itemsGiven, setItemsGiven] = useState<any[]>([]);
    const [uniqueAlcohols, setUniqueAlcohols] = useState<Alcohol[]>([]); // Explicitly define the type as Alcohol[]

    useEffect(() => {
        const fetchData = async () => {
            try {
                setItemsGiven(Items);
                const extractedAlcohols = extractUniqueAlcohols(Items);
                setUniqueAlcohols(extractedAlcohols);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [Items]);

    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: -1000,
        speed: 4000,
        rows: 1,
        slidesPerRow: 1,
        cssEase: "linear",
        pauseOnHover: true,
    };

    function extractUniqueAlcohols(items: any[]): Alcohol[] {
        const uniqueAlcoholsMap = new Map<string, string>();
        items.forEach(item => {
            if (item.type && item.typeImg) {
                uniqueAlcoholsMap.set(item.type, item.typeImg);
            }
        });
        return Array.from(uniqueAlcoholsMap.entries()).map(([type, imageUrl]) => ({
            type: type,
            imageUrl: imageUrl
        }));
    }


    return (
        <section className="GridItems">
            <h1>{Title}</h1>
            {itemsGiven.length === 0 ? (
                <Circles height="80" width="80" color="#e8d9b4" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="loading" visible={true} />
            ) : (
                <>
                    <Slider {...settings}>
                        {uniqueAlcohols.map((alcohol, i) => (
                            <>
                                <div className="Type" style={{ backgroundImage: `url(${alcohol.imageUrl})` }} key={i}>
                                    <Link to={`/recipes?type=${encodeURIComponent(alcohol.type)}`}><p>{alcohol.type}</p></Link>
                                </div>
                            </>
                        ))}
                    </Slider>

                    <div className="MobileVersion">
                        {uniqueAlcohols.map((alcohol, i) => (
                            <>
                                <div className="Type" style={{ backgroundImage: `url(${alcohol.imageUrl})` }} key={i}>
                                    <Link to={`/recipes?type=${encodeURIComponent(alcohol.type)}`}><p>{alcohol.type}</p></Link>
                                </div>
                            </>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}

export default GridItems;
