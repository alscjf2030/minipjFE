import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import { useNavigate } from "react-router";

const MainPost = (props) => {
    const navigate = useNavigate();
    console.log(props);
    const {
        title,
        content,
        like,
        userinfo,
        createdAt,
        modifeidAt,
        url,
        boardId,
    } = props;
    console.log(url);
    return (
        <div
            onClick={() => {
                navigate(`/detail/${boardId}`);
            }}
        >
            <Grid
                border={"1px solid red"}
                margin={"30px 10px"}
                height={"680px"}
                width={"365px"}
            >
                <Grid width={"80%"} border={"1px solid black"} margin={"20px 0"}>
                    {userinfo.nickname}
                </Grid>
                <Grid width={"80%"} border={"1px solid black"} margin={"20px 0"}>
                    {createdAt}
                </Grid>
                <Grid width={"50%"} border={"1px solid black"} margin={"20px 0"}>
                    {title}
                </Grid>

                <Image width={"360px"} height={"360px"} src={url}></Image>

                <Grid>{content}</Grid>
            </Grid>
        </div>
    );
};

export default MainPost;
