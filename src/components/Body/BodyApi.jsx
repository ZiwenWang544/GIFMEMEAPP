import useFetchApi from "../../API/useFetchApi"
import { UseFetchServer } from "../../API/UseFetchServer";




export const BodyApi = () =>{

    const {albums} = UseFetchServer();
    console.log(albums);
    return (
        <>
        {albums.map(album => (
            <div key={album.id}>
                <img src={album.imageUrl} alt={album.name} />
            </div>
        ))}
        </>
    )
}