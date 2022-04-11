import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import AddPost from "../pages/AddPost";

import Header from "../component/Header";
import {useEffect} from "react";
import {setClient} from "../api/client";

function App() {

    useEffect(() => {
        const token = sessionStorage.getItem('jwt_token')
        if ( token ) {
            setClient(token)
        }
    }, [])

    return (
        <MainContainer>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/detail/:id" element={<Detail/>}/>
                    <Route path="/write" element={<AddPost/>}/>
                </Routes>
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

