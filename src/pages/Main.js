import React from "react";
import MainPost from "../component/MainPost";
import Grid from "../elements/Grid";
import Header from "./../component/Header";

const Main = () => {
  return (
    <Grid>
      <Header></Header>
      <Grid width={"90%"} margin={"0 auto"} >
        <MainPost></MainPost>
        <MainPost></MainPost>
        <MainPost></MainPost>
        <MainPost></MainPost>
      </Grid>
    </Grid>
  );
};

export default Main;
