export const  getGifts = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=65DMVjzJr39BhyAWlQAWKoFHc8RvH0vl&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  //  console.log(data);


    const gifs = data.map( img => (
        {
            id: img.id,
            url: img.images.downsized_medium.url,
            title: img.title

        }
    ) );

    console.log(gifs);
    return gifs;
}

