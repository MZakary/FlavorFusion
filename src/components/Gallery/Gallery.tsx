import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Circles } from 'react-loader-spinner';

interface Recipe {
    title: string;
    thumb: string;
    description: string;
    id: string;
    type: string; // Added type property to Recipe interface
}

function Gallery({ title, itemsGiven, searchBar }: { title: string, itemsGiven: Recipe[], searchBar: boolean }) {
    const [items, setItems] = useState<Recipe[]>(itemsGiven);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isGallery, setIsGallery] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        setItems(itemsGiven);
        // Extract and parse the 'type' query parameter from the URL
        const queryParams = new URLSearchParams(location.search);
        const typeParam = queryParams.get('type');
        if (typeParam) {
            setSelectedFilters([typeParam]);
        }
    }, [itemsGiven, location.search]);

    useEffect(() => {
        setIsGallery(isRecipeOrGallery(items));
    }, [items]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter recipes based on search query
        const results = items.filter(recipe =>
            recipe.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };

    const handleFilterChange = (filter: string) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(f => f !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    const isRecipeVisible = (recipe: Recipe) => {
        if (selectedFilters.length === 0) {
            return true;
        }
        return selectedFilters.includes(recipe.type);
    };

    const displayRecipes = searchQuery.length > 0 ? searchResults.filter(isRecipeVisible) : items.filter(isRecipeVisible);

    const limitDescriptionCharacters = (description: string): string => {
        if (description.length > 40) {
            return description.slice(0, 40) + "..."; // Limit description to 40 characters
        }
        return description;
    };

    const isRecipeOrGallery = (recipes: Recipe[]): boolean => {
        for (const recipe of recipes) {
            if (recipe.description && recipe.type) {
                return true;
            }
        }
        return false;
    };

    return (
        <section className="Recipes">
            <h1>{title}</h1>
            {searchBar && (
                <form className="d-flex">
                    <input
                        className="me-2"
                        type="search"
                        placeholder="Search your favorite recipes here"
                        aria-label="Search"
                        onChange={handleSearch}
                    />
                </form>
            )}
            <div className="FiltersForGallery">

                <div className="filters">
                    {/* Render checkboxes for all types */}
                    {Array.from(new Set(itemsGiven.map(item => item.type))).map((type: string) => (
                        <label key={type}>
                            <input
                                type="checkbox"
                                checked={selectedFilters.includes(type)}
                                onChange={() => handleFilterChange(type)}
                            />
                            <span>{type}</span>
                        </label>
                    ))}
                </div>
            </div>
            {itemsGiven.length === 0 ? (
                <div>
                    <Circles height="80" width="80" color="#e8d9b4" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="loading" visible={true} />
                </div>
            ) : (
                <div className="ProjectContainer">
                    {displayRecipes.map((recipe: Recipe) => (
                        <>
                        {/* Redo this code wtf is this */}
                            {isGallery ? (<>
                                    <Link to={`/recipes/${recipe.id}`} className="Project" key={recipe.id}>
                                        <img className="ProjectImg" src={recipe.thumb} alt="" />
                                        <h5 className="ProjectTitle">{recipe.title}</h5>
                                        {recipe.type && recipe.description ? (<>
                                            <div className="ProjectDetails">
                                                <p className="ProjectType">{recipe.type}</p>
                                                <p className="ProjectDescription">{limitDescriptionCharacters(recipe.description)}</p>
                                            </div>
                                        </>) : (<></>)}
                                    </Link>
                                </>) : (<>
                                    <a className="Project" key={recipe.id}>
                                        <img className="ProjectImg" src={recipe.thumb} alt="" />
                                        <h5 className="ProjectTitle">{recipe.title}</h5>
                                        {recipe.type && recipe.description ? (<>
                                            <div className="ProjectDetails">
                                                <p className="ProjectType">{recipe.type}</p>
                                                <p className="ProjectDescription">{limitDescriptionCharacters(recipe.description)}</p>
                                            </div>
                                        </>) : (<></>)}
                                    </a>
                             </>)}
                        </>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Gallery;
