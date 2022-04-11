import React from "react";
import Grid from "../elements/Grid";
import ContentsList from "./ContentsList";
import { useSelector } from "react-redux";

const Main = () => {
  const post = useSelector((state) => state.post.list);
  console.log(post);
  return (
    <Grid width={"80%"} margin={"0 auto"}>
      {post}
      <ContentsList />
    </Grid>
  );
};

export default Main;
