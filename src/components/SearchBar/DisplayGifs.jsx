import React from 'react';
import styled from 'styled-components';
import useApi from '../../API/UseSearchApi';
import ImageItem from './ImageItem';

const DisplayGifs = ({ category }) => {

    const url = ` https://api.giphy.com/v1/gifs/search?api_key=lJdgnNYTZ0o1O3hPfyTBXZh8aKUBwQPu&q=${category}&limit=10`;
    const { loading, data } = useApi(url);

    return ( 
        <ContainerGifs>
            {
                loading ?
                    data.map(img => (
                        <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                    ))
                : ''
            }
        </ContainerGifs>

     );
}
 
export default DisplayGifs;

const ContainerGifs = styled.div`
  display: inline-flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 4%;
  justify-content: center;
  padding: 0 5%;
  &::div img{
    border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`