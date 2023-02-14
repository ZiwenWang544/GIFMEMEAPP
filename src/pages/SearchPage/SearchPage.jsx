import styled, { createGlobalStyle } from "styled-components"
import { BodySearchContainer } from "../../components/Body/BodySearchContainer"
import { NavBarLeft } from "../../components/NavBar/NavBarLeft"





export const SearchPage = () => {
    
    return (
        <>
        <NavBarLeft/>

        <SearchPageStyle>
            <BodySearchContainer />
        </SearchPageStyle>
        
        </>
    )
}

const SearchPageStyle = styled.div`
    width: 84%;
    font-size: 30px;
    margin-left: 14%;
`
