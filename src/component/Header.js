import React from "react";
import { useNavigate } from "react-router";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Image from "../elements/Image";

const Header = () => {
  const navigate = useNavigate();
  return (
    // <Grid
    //   is_flex
    //   width={"90%"}
    //   border={"2px solid black"}
    //   margin={"20px auto"}
    //   bor_radius
    // >
    //   <Image
    //     src={require("../static/logo.png")}
    //     width={"100px"}
    //     height={"100px"}
    //     bor_radius
    //   >
    //     로고
    //   </Image>
    //   <Grid is_flex width={"390px"}>
    //     <Button
    //       width={"120px"}
    //       margin={"0 5px"}
    //       onClick={() => {
    //         navigate("/signup");
    //       }}
    //     >
    //       내 정보
    //     </Button>
    //     <Button
    //       width={"120px"}
    //       margin={"0 5px"}
    //       onClick={() => {
    //         navigate("/login");
    //       }}
    //     >
    //       알림
    //     </Button>
    //     <Button
    //       width={"120px"}
    //       margin={"0 5px"}
    //       onClick={() => {
    //         navigate("/login");
    //       }}
    //     >
    //       로그아웃
    //     </Button>
    //   </Grid>
    // </Grid>
    <Grid
      is_flex
      width={"90%"}
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
        <Button
          width={"120px"}
          margin={"0 5px"}
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원 가입
        </Button>
        <Button
          width={"120px"}
          margin={"0 5px"}
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
