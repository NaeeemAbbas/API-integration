export  const getPosts = async () => {
    const response = await fetch ("https://fakestoreapi.com/products",{
        method:'GET',
    });
    return await response.json();
};