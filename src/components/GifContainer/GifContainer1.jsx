import styled, { createGlobalStyle } from "styled-components"
import { NavBarLeft } from "../../components/NavBar/NavBarLeft"
import useFetchApi from "../../API/useFetchApi";




export const GifContainer1 = () => {

    const {gif} = useFetchApi();    
    return (
        <>
        <GifContainer1Title>
            RANDOMS GIFS
        </GifContainer1Title>


        {gif.map((gif)=>(
            <Gifcontainer1Div  key={gif.id}>
                <GifImg1 src={gif.images.downsized.url} alt={gif.title} />
                <TitleContainer>
                <TitleGif>{gif.title}</TitleGif>
                </TitleContainer>
            </Gifcontainer1Div>
        ))}
        </>
    )

}

const GifContainer1Title = styled.h2`
    color: #FFFFFF;
    margin: 25px;
`

const Gifcontainer1Div = styled.div`
  display: inline-flex;
  padding: 1em;
  padding: 20px;
  margin: 30px;
  margin-left: -10px;
 
`
const GifImg1 = styled.img`
    width: 200px;
    height: 200px;
    flex-direction: row;
    margin: 5px;
    padding: 10px;
`
const TitleGif = styled.p`
    text-align: center;
    font-size: 16px;
    color: white;
    max-block-size: 150px;
    writing-mode: horizontal-tb;

`
const TitleContainer = styled.div`
    position: absolute;
    margin: 10px;
    margin-top: -20px;
  
`
