import React, { useState, useEffect } from "react";
import { Circles } from 'react-loader-spinner';




const useScrollEffect = (selector, index, setCanAnimates) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const textSection = document.querySelector(selector);

            if (textSection) {
                const sectionTop = textSection.offsetTop;
                const sectionHeight = textSection.offsetHeight;

                // Check if the viewport is within the height of the textSection
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setCanAnimates(prevState => ({
                        ...prevState,
                        [`canAnimate${index}`]: true
                    }));
                } 
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selector, index, setCanAnimates]);
};

function SimpleGrid({ Title, Items }) {

    const [itemsGiven, setItemsGiven] = useState<any[]>([]);
    const [canAnimates, setCanAnimates] = useState({
        canAnimate0: false,
        canAnimate1: false,
        canAnimate2: false,
        canAnimate3: false
    });


    useScrollEffect('.GridItems', 0, setCanAnimates);
    useScrollEffect('.item0', 1, setCanAnimates);
    useScrollEffect('.item1', 2, setCanAnimates);
    useScrollEffect('.item2', 3, setCanAnimates);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setItemsGiven(Items);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [Items]);

    // Function to generate star ratings based on the score
    function generateStars(score) {
        const starCount = Math.round(score);
        return Array.from({ length: starCount }, (_, index) => (
            <span key={index} className="material-icons">star</span>
        ));
    }

    function getAverageScore(reviews) {
        const totalScore = reviews.reduce((acc, review) => acc + review.score, 0);
        return totalScore / reviews.length;
    }

    function getHighestReviewedItems(items) {
        // Calculate the average score for each item
        const itemsWithAverage = items.map(item => ({
            ...item,
            averageScore: getAverageScore(item.reviews)
        }));
        // Sort the items based on their average score in descending order
        const sortedItems = itemsWithAverage.sort((a, b) => b.averageScore - a.averageScore);
        // Grab the top 4 items
        return sortedItems.slice(0, 4);
    }

    function getHighestReviews(reviews) {
        // Sort the reviews based on their score in descending order
        const sortedReviews = reviews.sort((a, b) => b.score - a.score);
        // Grab the top 2 reviews
        const highestReviews = sortedReviews.slice(0, 2);
        return highestReviews;
    }

    function isEvenOrOdd(index){
       return index % 2 === 0 ? true : false
    }

    //console.log(setCanAnimates)

    function toBool(variableName) {
        // Access the variable by its name using bracket notation
        return canAnimates[variableName];
    }

    return (
        <section className="SimpleGrid">
            {/* <h1 className="SectionTitle">{Title}</h1> */}
            {itemsGiven.length === 0 ? (
                <Circles height="80" width="80" color="#e8d9b4" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="loading" visible={true} />
            ) : (
                <div className="GridLayout">
                    {getHighestReviewedItems(itemsGiven).map((item, i) => (
                        <div className={`item${i} animate__animated ${ toBool('canAnimate'+i) ? (isEvenOrOdd(i) ? "animate__fadeInLeft" : "animate__fadeInRight") : 'hidden'} ` + (isEvenOrOdd(i) ? "even" : "odd")} style={{ backgroundImage: `url(${(isEvenOrOdd(i) ? "/Img/testbackground.png" : "/Img/testbackground.png")})` }} key={i}>
                            <img className={`itemImg animate__animated animate__delay-1s ${ toBool('canAnimate'+i) ? (isEvenOrOdd(i) ? "animate__fadeInLeftBig" : "animate__fadeInRightBig") : 'hidden'}  `} src={item.thumb} alt={item.title} />
                            <div className={`Reviews animate__animated animate__delay-1s ${ toBool('canAnimate'+i) ? (isEvenOrOdd(i) ? "animate__fadeInRight" : "animate__fadeInLeft") : 'hidden'}`}>
                                <h1 className="ReviewsTitle">Reviews</h1>
                                <h2 className="title">{item.title}</h2>
                                <div className="ReviewContainer">
                                    {getHighestReviews(item.reviews).map((review, j) => (
                                        <div className={`Review animate__animated delayAnimation${j+2} ${ toBool('canAnimate'+i) ? (isEvenOrOdd(i) ? "animate__fadeInRightBig" : "animate__fadeInLeftBig") : 'hidden'}`} key={j}>
                                            {/* Display star rating instead of score */}
                                            <div className="stars">{generateStars(review.score)}</div>
                                            <p className="reviewmessage">"{review.message}"</p>
                                            <p className="reviewer">- {review.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
    
}

export default SimpleGrid;
