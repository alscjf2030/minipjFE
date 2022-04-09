import React from "react";

import Grid from "../elements/Grid";
import Image from "../elements/Image";

const MainPost = (props) => {
  return (
    <Grid>
      <Grid>작성자 / 시간</Grid>

      <Grid>제목</Grid>

      <Image
        src={"https://img.marieclairekorea.com/2022/02/mck_620b83ff0751b.jpg"}
      ></Image>

      <Grid>게시글 내용</Grid>
    </Grid>
  );
};

export default MainPost;
