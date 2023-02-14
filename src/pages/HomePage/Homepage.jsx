import styled, { createGlobalStyle } from "styled-components"
import { BodyGifContainer } from "../../components/Body/BodyGifContainer"
import { NavBarLeft } from "../../components/NavBar/NavBarLeft"
import { NavBarTop } from "../../components/NavBar/NavBarTop"



export const Homepage = () =>{
        


    return (
        <>
        <HomepageGlobalStyled />

                <NavBarLeft />
            <HomePageStyle>
                <NavBarTop />
            <BodyGifContainer />
            </HomePageStyle>
        </>
    )
}
const HomepageGlobalStyled = createGlobalStyle`
body{
    
     background-color:#1A202C;
}

`


const HomePageStyle = styled.div`
  width: 100%;
  font-size: 30px;
  margin-left: 14%;
`