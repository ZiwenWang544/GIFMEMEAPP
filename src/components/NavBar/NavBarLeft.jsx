import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavBarLeft = () => {



    return (
        <>
        <NavBarBody>
         <NavBarNav>
         <NavBarUl>
                <NavBarLi>
                    <Link to={`/`}>
                    <NavbarLogo src="https://res.cloudinary.com/dfikc23ya/image/upload/v1675762209/api_giphy_logo_sparkle_clear_jevpd4.gif" alt=""/>
                    </Link>
                </NavBarLi>

                <NavBarLi>
                <Link to={`/search`} style={{textDecoration:"none"}}>
                    <span>Search</span>
                    </Link>
                </NavBarLi>

                <NavBarLi>
                <Link to={`/category`} style={{textDecoration:"none"}}>
                    <span>Randoms</span>
                    </Link>

                </NavBarLi>



                <NavBarLi>
                    <Link to={`/Api`} style={{textDecoration:"none"}}>
                    <ButtonProfile>
                    <IconProFile src="https://media.giphy.com/avatars/default2/200h.gif"/>
                    <TitleProfile>CALLAPI</TitleProfile>
                    </ButtonProfile>
                    </Link>
                </NavBarLi>

                <NavBarLi>
                    <Link to={`/`} style={{textDecoration:"none"}}>
                    <span>HomePage</span>
                    </Link>
                </NavBarLi>
            </NavBarUl>
        </NavBarNav>
        </NavBarBody>
        </>
    )
}


const NavBarBody = styled.div`
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: #364153;
    margin-left: -10px;
`

const NavBarNav = styled.nav`
    position: absolute;
    top: 0;
    bottom: 0;
    height: 400%;
    background: #364153;
    width: 200px;
    overflow: hidden;
    transition: width 0.2s linear;
    box-shadow: 0 20px 35px rgba(0,0,0,0.1);
    
`
const NavbarLogo = styled.img`
    margin-top: 30px;
    text-align: center;
    display: flex;
    transition: all 0.5s ease;
    margin-left: 15px;
    width: 96px;
    height: 96px;
`
const NavBarUl = styled.ul`
    font-weight: bold;
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    list-style: none;
    text-decoration: none;
    display: table;
`
const NavBarLi = styled.li`
    position: relative;
    color : #FFFFFF;
    font-size: 19px;
    padding: 10px;
    margin-left: -1px;
    margin-top: 15px;
    list-style: none;
    display: inline-flex;
`
const IconProFile = styled.img`
    width: 32px;
    height: 32px;
    margin-left: -83px;
`
const TitleProfile = styled.p`
    color : #4A287B;
    margin-top: -32px;
    margin-left: 40px;
    font-size: 19px;
    position: absolute;
`
const ButtonProfile = styled.button`
    width: 140px;
    background: #364153;
    height: 38px;
    border-color: #4A287B;
`