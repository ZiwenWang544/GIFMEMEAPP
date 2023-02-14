import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


export const UseFetchServer = () => {

    const urlAlbums = "http://localhost:4000/album/";


    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch(urlAlbums);
            const albums = await response.json();
           setAlbums(albums.data);

        } catch (error) {
          }
          
        };
        fetchData();
      }, [urlAlbums]);

    return {
      
        albums,
     
      };
}

