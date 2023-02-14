import styled, { createGlobalStyle } from "styled-components"
import { NavBarLeft } from "../../components/NavBar/NavBarLeft"
import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";
import 'swiper/css'
import useFetchApi from "../../API/useFetchApi";
import { GifContainer1 } from "../../components/GifContainer/GifContainer1";




export const CatePage = () => {


    return (
        <>
        <NavBarLeft />
        <CatePageStyled>
        <GifContainer1 />
        </CatePageStyled>
        </>
    )
}

const CatePageStyled = styled.div`
  width: 84%;
  font-size: 30px;
  margin-left: 14%;

`