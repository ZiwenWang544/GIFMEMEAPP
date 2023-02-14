import { Homepage } from "../../pages/HomePage/Homepage"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import { CatePage } from "../../pages/CatePage/CatePage";
import { ApiPage } from "../../pages/ApiPage/ApiPage";




export const GifRouter = () => {

    return (
        <>
       <Router>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/category" element={<CatePage />}></Route>
            <Route path="/api" element={<ApiPage />}></Route>
        </Routes>
       </Router>
        
        </>
    )
}