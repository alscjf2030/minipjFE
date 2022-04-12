import React, {useEffect} from "react";

import MainPost from "../component/MainPost";

import {useSelector} from "react-redux";
import Grid from "../elements/Grid";
import Image from "../elements/Image";

const ContentsList = (props) => {

    const post_list = useSelector((state) => state.post.list)
    console.log(post_list)

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"}}>
            {post_list.map((p, idx) => {
                return <MainPost key={p.boardId} {...p}/>
            })}
            <div>
                <div>작성자 / 시간</div>

                <div>제목</div>

                <Image src="img/logo.png"/>

                <div>게시글 내용</div>
            </div>
        </div>
    )
}

export default ContentsList