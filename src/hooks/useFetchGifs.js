import {getGifts} from '../helpers/getGifs'
import { useEffect, useState } from 'react';

export const useFetchGifs =(category) =>{


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAsyncImages = async() => {
        const newImages = await getGifts(category);
        setImages(newImages);
    }

    useEffect(()=>{
        getAsyncImages();
        setIsLoading(false);
    }, [] )
    



    return {
        images
        ,isLoading
    }


}