import React, {useState} from "react";

import HeartImg from "../like/HeartImg.png"
import EmptyHeartImg from "../like/EmptyHeartImg.png"

import {useDispatch} from "react-redux";

const Heart = (props) => {
    const dispatch = useDispatch()

    const [like, setLike] = useState(false);

    return (
        <div>

        </div>
    )
}

export default Heart;