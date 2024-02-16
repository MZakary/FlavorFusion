export const getGallery = async () => {
    try{
        const req = await fetch("http://localhost:3000/gallery");
        const res = await req.json();

        console.log(res);
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

export const getRecipeDetail = async (recipeId: string) => {
    const response = await fetch(`http://localhost:3000/gallery/${recipeId}`);
    if (!response.ok) {
      throw new Error("Error fetching project detail");
    }
    return response.json();
  };