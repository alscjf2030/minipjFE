import React, { useState, useEffect } from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import PostInput from "../elements/PostInput";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useNavigate } from "react-router-dom";
import CmtModal from "./CmtModal";

const DetailComments = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [upComment, setUpComment] = useState();
  // const comment = useSelector((state) => state.comment.comment);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("jwt_token");

  const nickname = () => {
    if (token) {
      return JSON.parse(atob(token.split(".")[1])).NICKNAME;
    }
  };

  const comment = [
    {
      userInfo: { nickname: "kop" },
      id: 1,
      comment: "너무 고민인데?",
      commentId: 1,
      userId: 1,
      boardId: 1,
    },
    {
      userInfo: { nickname: "kop" },
      id: 2,
      comment: "어허",
      commentId: 1,
      userId: 1,
      boardId: 1,
    },
  ];

  const modalIsOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(
      commentActions.getCommentSP(1, sessionStorage.getItem("jwt_token"))
    );
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
              bg={"#0D6EFD"}
              visibility={
                nickname === cur.userInfo.nickname ? "visible" : "hidden"
              }
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
            <Button
              bg={"#0D6EFD"}
              // visibility={
              //   nickname === cur.userInfo.nickname ? "visible" : "hidden"
              // }
              onClick={() => {
                setUpComment(cur);
                setIsOpen(true);
              }}
            >
              수정
            </Button>
          </Grid>
        </Grid>
      ))}
      {console.log(upComment)}
      <CmtModal isOpen={isOpen} commentInfo={upComment}></CmtModal>
    </>
  );
};

export default DetailComments;
