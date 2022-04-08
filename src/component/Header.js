import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Image from "../elements/Image";

const Header = () => {
  return (
    <Grid
      is_flex
      width={"1000px"}
      border={"2px solid black"}
      margin={"20px auto"}
      bor_radius
    >
      <Image
        src={require("../static/logo.png")}
        width={"100px"}
        height={"100px"}
        bor_radius
      >
        로고
      </Image>
      <Grid is_flex width={"260px"}>
        <Button width={"120px"} margin={"0 5px"}>
          회원 가입
        </Button>
        <Button width={"120px"} margin={"0 5px"}>
          로그인
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
