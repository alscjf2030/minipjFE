import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import AddPost from "../pages/AddPost";

import Header from "../component/Header";
import AddComments from "./../component/AddComments";
import DetailComments from "../component/DetailComments";


function App() {
    return (
        <MainContainer>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/detail" element={<Detail/>}/>
                    <Route path="/write" element={<AddPost/>}/>
                </Routes>
            </BrowserRouter>
            <GlobalStyle/>
        </MainContainer>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 80%;
`

