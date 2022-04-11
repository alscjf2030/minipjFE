import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Modal from "react-modal";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import AddPost from "../pages/AddPost";
import Button from "../elements/Button";
import Grid from "../elements/Grid";

import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <MainContainer>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/write" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </MainContainer>
  );
}

Modal.setAppElement("#root");

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const MainContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 80%;
`;
