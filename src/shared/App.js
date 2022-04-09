import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Header from "../component/Header";
import Main from "../pages/Main";
import AddComments from "./../component/AddComments";
import DetailComments from "../component/DetailComments";

function App() {
  return (
    <>
      <DetailComments></DetailComments>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
