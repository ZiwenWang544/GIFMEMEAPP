import styled from "styled-components"
import { BodyApi } from "../../components/Body/BodyAPI"
import { NavBarLeft } from "../../components/NavBar/NavBarLeft"




export const ApiPage = () =>{


    return (
        <>
        <NavBarLeft />
        <ApiPagestyled>

        <BodyApi/>
        
        </ApiPagestyled>
        </>
    )
}

const ApiPagestyled = styled.div`

width: 84%;
  font-size: 30px;
  margin-left: 14%;

`