import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";

const Header = () => {
  return (
    <Grid
      is_flex
      width={"700px"}
      border={"1px solid black"}
      margin={"20px auto"}
    >
      <div>로고</div>
      <Grid is_flex width={"150px"}>
        <Button>회원 가입</Button>
        <Button>로그인</Button>
      </Grid>
    </Grid>
  );
};

export default Header;
