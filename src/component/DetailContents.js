import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import DetailComments from "./DetailComments";
import AddComments from "./AddComments";
import Button from "./../elements/Button";

import { actionCreators as postActions } from "../redux/modules/detail";
import { actionCreators as deletedActions} from "../redux/modules/post";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const DetailContents = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const token = sessionStorage.getItem("jwt_token");

    const userInfo = useSelector((state) => state.user.userInfo);
    // console.log("유저아이디", userInfo.userId);
    const detail = useSelector((state) => state.post.detail);
    // console.log(detail);

    useEffect(() => {
        dispatch(postActions.getDetailDB(userInfo.userId, id, token));
    }, []);
    if ( !detail ) {
        return null
    }

    const deletePost = () => {
        dispatch(deletedActions.deletePostSp(id, navigate))
    }

    return (
        <HeadLine>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                    <Text size={"1.2em"} margin={"60px 20px 0px auto"}>
                        {detail?.userinfo?.nickname}
                    </Text>
                    <Text size={"1.2em"} margin={"60px auto"}>
                        {detail?.createdAt}
                    </Text>
                </div>
                {userInfo.userId === detail.userId && (
                    <div>
                        <Grid is_flex width={"200px"} height={"50px"} margin={"40px auto"}>
                                <Button onClick={() => {
                                    navigate(`/write/${id}`)
                                }} width={"80px"} bg={"#0D6EFD"}>
                                    수정
                                </Button>

                                <Button onClick={deletePost} width={"80px"} bg={"#0D6EFD"}>
                                    삭제
                                </Button>
                        </Grid>
                    </div>
                )}
            </div>

            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            width={"70%"}
                            border={"1px solid black"}
                            src={detail?.url}
                        />
                    </div>
                    <div
                        style={{
                            width: "50%",
                            height: "100%",
                            textAlign: "center",
                            border: "1px solid black",
                        }}
                    >
                        <Text>{detail?.headinfo}</Text>
                        <Text>{detail?.topinfo}</Text>
                        <Text>{detail?.bottominfo}</Text>
                        <Text>{detail?.shoesinfo}</Text>
                        <Text>{detail?.content}</Text>
                    </div>
                </div>
                <div style={{ margin: "auto" }}>
                    <Grid padding="16px">
                        <AddComments />
                        <DetailComments />
                    </Grid>
                </div>
            </div>
        </HeadLine>
    );
};

export default DetailContents;

const HeadLine = styled.div`
  position: relative;
  margin: auto;
  max-width: 80%;
`;
