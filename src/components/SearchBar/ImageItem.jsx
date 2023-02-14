import React from 'react';
import styled from 'styled-components';

const ImageItem = ({ title, url }) => {
    return ( 
        <ImageDiv>
            <img src={ url } alt={ title } />
            <Pserach>{ title }</Pserach>
        </ImageDiv>
    );
}
 
export default ImageItem;

const ImageDiv = styled.div`
    border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const Pserach = styled.p`
    color: white;
`