//APIKEY  65DMVjzJr39BhyAWlQAWKoFHc8RvH0vl
import {Fragment, useState} from 'react'
import {AddCategory,GifGrid} from './components'   

export const GifExpertApp = () =>{
    
    const [categories, setCategories] = useState( ['One Piece']);
    
    const onAddCategory = (categoria) => {
        if(categories.includes(categoria)) return;
        setCategories([categoria, ...categories]);
    }

    return(
        <Fragment>
        
        <h1>GifExpertApp</h1>

        <AddCategory onAddCategory = {onAddCategory}/>

            { categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category}/> 
            ))}

        </Fragment>
    );
}