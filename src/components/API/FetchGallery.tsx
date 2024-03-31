
export const getRecipe = async () => {
    try{
        const req = await fetch("https://flavorfusionbackend-wsvl.onrender.com/recipes");
        const res = await req.json();

        //console.log(res);
        return res.map((recipes)=>{
            return{
                ...recipes,
                id: recipes._id,
            };
        });
    }catch(error){
        console.log("There is an error when calling the getGallery function", error);
        throw error;
    }
};

export const getRecipeDetail = async (recipeId: string) => {
    const response = await fetch(`https://flavorfusionbackend-wsvl.onrender.com/recipes/${recipeId}`);
    if (!response.ok) {
      throw new Error("There is an error when calling the getRecipeDetail function");
    }
    return response.json();
};



export const getGallery = async () => {
    try{
        const req = await fetch("https://flavorfusionbackend-wsvl.onrender.com/gallery");
        const res = await req.json();

        //console.log(res);
        return res.map((gallery)=>{
            return{
                ...gallery,
                id: gallery._id,
            };
        });
    }catch(error){
        console.log("There is an error when calling the getGallery function", error);
        throw error;
    }
};

export const getGalleryDetail = async (recipeId: string) => {
    const response = await fetch(`https://flavorfusionbackend-wsvl.onrender.com/gallery/${recipeId}`);
    if (!response.ok) {
      throw new Error("There is an error when calling the getRecipeDetail function");
    }
    return response.json();
};
