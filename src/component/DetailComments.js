import React, { useEffect } from "react";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import Button from "../elements/Button";

const DetailComments = (props) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.comment);
  const token = sessionStorage;

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
        </Grid>
      ))}
    </>
  );
};

export default DetailComments;
