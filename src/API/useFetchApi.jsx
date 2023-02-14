import { useEffect, useState } from "react"




const useFetchApi = () => {
    
    
    const GIF_URL = "https://api.giphy.com/v1/gifs/search?api_key=KzYIZd1IZaud2U7kUHA1Q83QwF5LQr4i&q=10&limit=50&offset=0&rating=g&lang=en";

    const [gif, setGif] = useState([]);

    useEffect(() => {
        const FetchGif = async () => {

            try{
                const response = await fetch(GIF_URL);
                const jsongif = await response.json();
                setGif(jsongif.data)
            }catch(error){

            }

        }
        FetchGif();
    },[GIF_URL]);

   return {
    gif,
    };
}

export default useFetchApi;