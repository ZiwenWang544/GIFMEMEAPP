import React, { useState } from 'react';
import styled from 'styled-components';

const AddCategory = ({ setCategory }) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchGif = e => {
        e.preventDefault();
        if (value === "") {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");
    }

    return ( 
        <>
            <form onSubmit={ searchGif }>
                <InputSearchBar type="text" placeholder='Search...'
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
            </form>
            { error ? <p className='error'>El campo no puede estar vacio...</p> : ""}
        </>
     );
}
 
export default AddCategory;


const InputSearchBar = styled.input`
    font-size: inherit;
    padding: 12px 20px;
    outline: none;
    border: solid 0px #000;
    border-radius: 20px;
    width: 300px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 10px;
`