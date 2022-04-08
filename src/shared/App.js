import React from "react";
import {Route, Routes} from "react-router-dom";

import AddComments from "../component/AddComments";
import AddContents from "./../component/AddContents";
import AddImage from "../component/AddImage";
import Header from "../component/Header";
import Detail from "../pages/Detail";
function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/detail" element={<Detail/>}/>
            </Routes>
        </div>
    )
}

export default App;
