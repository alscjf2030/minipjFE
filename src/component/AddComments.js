import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentsInput from "../elements/PostInput";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { actionCreators as commentActions } from "../redux/modules/comment";

const AddComments = () => {
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.user.userInfo);
  console.log(userinfo);

  const [comment, setComment] = useState();

  const info = {
    boardId: 1,
    comment: comment,
    userId: userinfo.userId,
    userInfo: {
      nickname: userinfo.nickname,
      username: userinfo.useremail,
    },
  };

  const addComment = () => {
    dispatch(
      commentActions.addCommentSP(info, sessionStorage.getItem("jwt_token"))
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <ContentsInput
        width={"80%"}
        height={"80%"}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></ContentsInput>
      <Button onClick={addComment}>작성하기</Button>
    </div>
  );
};

export default AddComments;
