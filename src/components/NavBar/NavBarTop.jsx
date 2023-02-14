import React from "react";
import styled from 'styled-components'
import useFetchApi from '../../API/useFetchApi'

export const NavBarTop = () => {

    const { gif } = useFetchApi();

    return (
        <>
        <NavBarTopBody>
           <NavBarTopTitle>WELCOME GIPHY !</NavBarTopTitle>
           <NavBarTopUl>
            <NavBarTopli>
                <NavBarTopdiv>
                <iframe src="https://giphy.com/embed/2EwJ13ciXS9LmRsUxO" width="250px" height="150px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </NavBarTopdiv>
            </NavBarTopli>
            <NavBarTopli>
                <NavBarTopdiv>
                <iframe src="https://giphy.com/embed/D2Fx0tsvNKIrQWNxmL" width="250px" height="150px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        
                </NavBarTopdiv>
            </NavBarTopli>
            <NavBarTopli>
                <NavBarTopdiv>
                <iframe src="https://giphy.com/embed/PCgjxq32zSgjHHr8QJ" width="250px" height="150px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </NavBarTopdiv>
            </NavBarTopli>
            <NavBarTopli>
                <NavBarTopdiv>
                <iframe src="https://giphy.com/embed/R12kzU7aoYqDJs6C4H" width="250px" height="150px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </NavBarTopdiv>
            </NavBarTopli>
           </NavBarTopUl>
           <NavBarTopRight></NavBarTopRight>
        </NavBarTopBody>
        </>
    )
}

const NavBarTopTitle = styled.h1`
    font-family: "Poppins", sans-serif;
    color: #ffffff;
   
`
const NavBarTopBody = styled.nav`
    width:100%;
    height: 400px;
    margin-left:-20px;
    margin-top: -20px;
`
const NavBarTopUl = styled.ul`
    list-style-type: none;

`
const NavBarTopli = styled.li`
    float: left;
    display: inline;
    margin: 20px;
    padding: 50px;
`

const NavBarTopdiv = styled.div`
    display: block;
    background-color: #364153;
    text-align: center;
    width: 250px;
    height: 150px;
    margin-left: -100px;
`
const NavBarTopRight = styled.div`
    display: block;
    background: #202734;
    width: 400px;
    height: 320px;
    float: left;
    text-align: center;
    margin-top: -100px;
    margin-left: 50px;
@media (max-width:1180px) {
    display: none;
}
`