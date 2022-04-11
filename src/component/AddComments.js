import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostInput from "../elements/PostInput";
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
        margin: "20px auto",
        border: "1px solid black",
        borderRadius: "10px",
        width: "780px",
      }}
    >
      <PostInput
        width={"500px"}
        height={"100px"}
        margin={"0 0 0 10px"}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></PostInput>
      <Button onClick={addComment}>작성하기</Button>
    </div>
  );
};

export default AddComments;
