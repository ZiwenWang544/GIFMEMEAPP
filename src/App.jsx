import React from "react"
import { NavBarLeft } from "./components/NavBar/NavBarLeft"
import styled, {createGlobalStyle} from "styled-components"
import { Homepage } from "./pages/HomePage/Homepage"
import { Router } from "react-router-dom"
import { GifRouter } from "./router/Router/GifRouter"


function App() {

  return (
    <>
    <AppStyle />
    <GifRouter />
    </>
  )
}

const AppStyle = createGlobalStyle`
body{
  /* background-color:#1A202C; */
}

`

export default App

