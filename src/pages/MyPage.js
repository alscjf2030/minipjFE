import React, { useEffect } from "react";
import Grid from "../elements/Grid";
import { myPostDB, myLikedDB } from "./../redux/modules/mypage";
import { useDispatch, useSelector } from "react-redux";

const MyPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myPostDB);
  }, []);

  const myPost = useSelector((state) => {
    console.log(state);
  });

  console.log(myPost);

  return <Grid border={"1px solid black"}></Grid>;
};
export default MyPage;
