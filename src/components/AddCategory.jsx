import { useState } from "react"

export const AddCategory = ({onAddCategory}) =>{


    const [inputValue, setInputValue] = useState('');

    const oninputChange = (event) =>
    {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const newInput = inputValue.trim()

        if(newInput.length <= 1)
            return;

        onAddCategory(newInput);
        setInputValue('');
    }

    return(
        <form onSubmit={(event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={oninputChange}
            />
        </form>
    )
}