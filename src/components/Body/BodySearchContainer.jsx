import styled from "styled-components"
import AddCategory from "../SearchBar/AddCategory"
import DisplayGifs from "../SearchBar/DisplayGifs"
import { useState } from "react"



export const BodySearchContainer = () => {

    const [category, setCategory] = useState("");

    return (
        <>
        <DivSearch>
            <H2>SEARCHBAR</H2>
            <AddCategory setCategory={setCategory} />
            <DisplayGifs category={category} />
        </DivSearch>
        </>
    )


}

const H2 = styled.h2`
    color: white;
    margin-left: 10px;
`

const DivSearch = styled.div`
     text-align: center;
  margin-top: 6%; 
`