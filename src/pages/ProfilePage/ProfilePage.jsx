import styled from "styled-components"
import { NavBarLeft } from "../../components/NavBar/NavBarLeft"




export const ProfilePage = () => {
    
    return (
        <>

        <NavBarLeft />
        
        <ProfileStyle>
            MY PROFILE !
        </ProfileStyle>
        </>
    )
}

const ProfileStyle = styled.div`
    width: 84%;
    font-size: 30px;
    margin-left: 14%;
`