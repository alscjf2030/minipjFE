import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import { useNavigate } from "react-router";

const MainPost = (props) => {
  const navigate = useNavigate();

  const {
    title,
    content,
    like,
    userinfo,
    createdAt,
    modifeidAt,
    url,
    boardId,
    userId,
  } = props;

  return (
    <div
      onClick={() => {
        navigate(`/detail/${boardId}`);
      }}
    >
      <Grid
        bor_radius
        shadow
        border={"1px solid slateblue"}
        margin={"30px 10px"}
        height={"680px"}
        width={"365px"}
      >
        <Grid width={"80%"} margin={"20px auto"}>
          {title}
        </Grid>

        <Image
          width={"360px"}
          height={"360px"}
          margin={"15px auto"}
          src={url}
        ></Image>

        <Grid width={"80%"} margin={"10px auto"}>
          {userinfo?.nickname}
        </Grid>
        <Grid width={"80%"} margin={"15px auto"}>
          {createdAt}
        </Grid>
        <Grid
          width={"80%"}
          height={"15%"}
          margin={"20px auto"}
          padding={"10px"}
          border={"1px solid black"}
        >
          {content}
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPost;
