import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentsInput from "../elements/ContentsInput";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { actionCreators as commentActions } from "../redux/modules/comment";

const AddComments = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userInfo.userId);

  const [comment, setComment] = useState();
  // console.log(comment);

  const addComment = () => {
    dispatch(
        commentActions.addCommentSP(
            userId,
            "boardId",
            comment,
            sessionStorage.getItem("jwt_token")
        )
    );
  };

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            border: "1px solid black",
            borderRadius: "10px"
        }}>
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
