import React from "react";

import Grid from "../elements/Grid";
import Image from "../elements/Image";

const MainPost = (props) => {

    return (
        <Grid>
            <Grid>작성자 / 시간</Grid>

            <Grid>제목</Grid>

            <Image
                src="img/logo.png"
            ></Image>

            <Grid>게시글 내용</Grid>
        </Grid>
    );
};

export default MainPost;
