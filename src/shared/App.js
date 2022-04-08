import React from "react";
import {Route, Routes} from "react-router";

import MainPost from "../component/MainPost";
import DetailComments from "../component/DetailComments";
import DetailContents from "../component/DetailContents";

function App() {
    return (
        <div>
            <MainPost/>
            <DetailComments/>
            <DetailContents/>
        </div>
    )

}

export default App;
