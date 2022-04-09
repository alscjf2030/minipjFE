import React from "react";

import MainPost from "../component/MainPost";

import {useSelector} from "react-redux";
import Grid from "../elements/Grid";
import Image from "../elements/Image";

const ContentsList = (props) => {

    const post_list = useSelector((state) => state.post.list)
    console.log(post_list)

    return (
        <>
            {post_list.map((p, idx) => {
                return <MainPost key={p.id} {...p}/>
            })}
            <Grid>
                <Grid>작성자 / 시간</Grid>

                <Grid>제목</Grid>

                <Image
                    src="img/logo.png"
                ></Image>

                <Grid>게시글 내용</Grid>
            </Grid>
        </>
    )
}

export default ContentsList