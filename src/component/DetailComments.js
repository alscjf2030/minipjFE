import React, { useState, useEffect } from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import PostInput from "../elements/PostInput";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const DetailComments = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // const comment = useSelector((state) => state.comment.comment);
  const comment = [
    {
      userInfo: {
        nickname: "kop",
      },
      comment: "와아아아ㅏ아",
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
          width={"780px"}
          height={"120px"}
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
              <PostInput width={"600px"} height={"80px"} margin={"auto"}>
                {cur.userInfo.nickname}
              </PostInput>
            </Grid>
            <Grid is_flex width={"300px"} margin={"0 auto"}>
              <Button>수정</Button>
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
