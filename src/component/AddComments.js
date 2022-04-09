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
    <Grid width={"80%"} margin={"0 auto"} border={"1px solid black"} bor_radius>
      <Grid is_flex>
        <ContentsInput
          width={"740px"}
          height={"100px"}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></ContentsInput>
        <Button onClick={addComment}>작성하기</Button>
      </Grid>
    </Grid>
  );
};

export default AddComments;
