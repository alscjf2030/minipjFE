import React, { useState, useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import PostInput from "../elements/PostInput";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const CmtModal = (props) => {
  const { isOpen, commentInfo } = props;
  const dispatch = useDispatch();
  console.log(commentInfo);
  return (
    <>
      <Modal
        isOpen={isOpen}
        style={{
          overlay: { margin: "auto" },
          content: {
            width: "820px",
            height: "400px",
            margin: "auto",
            border: "2px solid black",
          },
        }}
      >
        <Grid
          // border={"1px solid black"}
          width={"660px"}
          height={"150px"}
          margin={"60px auto -20px auto"}
        >
          <PostInput
            defaultValue={commentInfo?.comment}
            width={"600px"}
            height={"80px"}
            margin={"auto"}
          >
            {commentInfo?.userInfo?.nickname}
          </PostInput>
        </Grid>
        <Grid is_flex width={"300px"} margin={"0 auto"}>
          <Button
            bg={"#0D6EFD"}
            onClick={() => {
              dispatch(
                commentActions.updateCommentSP(
                  {
                    userId: "kop",
                    boardId: 1,
                    comment: "수정된 댓글",
                    commentId: 1,
                  },
                  sessionStorage.getItem("jwt_token")
                )
              );
            }}
          >
            수정
          </Button>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            bg={"#0D6EFD"}
          >
            취소
          </Button>
        </Grid>
      </Modal>
    </>
  );
};

export default CmtModal;
