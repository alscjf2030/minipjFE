import React, { useState, useEffect } from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import PostInput from "../elements/PostInput";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const DetailComments = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [upComment, setUpComment] = useState();
  const dispatch = useDispatch();
  // const comment = useSelector((state) => state.comment.comment);
  const comment = [
    {
      userInfo: {
        nickname: "kop",
        userId: 1,
      },
      boardId: 1,
      comment: "와아아아ㅏ아",
      id: 1,
    },
    {
      userInfo: {
        nickname: "kop",
        userId: 1,
      },
      boardId: 1,
      comment: "와아아아ㅏ아",
      id: 1,
    },
  ];
  // const token = sessionStorage;
  const modalIsOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(
      commentActions.getCommentSP(1, sessionStorage.getItem("jwt_token"))
    );
    console.log("실행되니");
  }, []);

  return (
    <>
      {comment.map((cur, idx) => (
        <Grid
          is_flex
          border={"1px solid black"}
          bor_radius
          width={"780px"}
          padding={"20px"}
          height={"120px"}
          margin={"0 auto 20px auto"}
          key={cur.id}
        >
          <Grid>
            <span>{cur.userInfo.nickname}</span>
            <p>{cur.comment}</p>
          </Grid>
          <Grid is_flex>
            <Button
              onClick={() => {
                dispatch(
                  commentActions.deleteCommentSP(
                    cur,
                    sessionStorage.getItem("jwt_token")
                  )
                );
              }}
            >
              삭제
            </Button>
            <Button onClick={modalIsOpen}>수정</Button>
          </Grid>
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
                width={"600px"}
                height={"80px"}
                margin={"auto"}
                onChange={(e) => {
                  setUpComment(e.target.value);
                }}
                defaultValue={cur.comment}
              >
                {cur.userInfo.nickname}
              </PostInput>
            </Grid>
            <Grid is_flex width={"300px"} margin={"0 auto"}>
              <Button
                onClick={() => {
                  dispatch(
                    commentActions.updateCommentSP({
                      userId: cur.userInfo.userId,
                      boardId: cur.boardId,
                      comment: upComment,
                      commentId: cur.id,
                    })
                  );
                }}
              >
                수정
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                취소
              </Button>
            </Grid>
          </Modal>
        </Grid>
      ))}
    </>
  );
};

export default DetailComments;
