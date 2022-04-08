import React from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Input from "../elements/Input";

const Login = () => {
  return (
    <Grid width={"600px"} border={"1px solid black"} margin={"200px auto"}>
      <Grid width={"250px"} border={"1px solid black"} margin={"0px auto"}>
        <Grid>
          아이디:
          <Input></Input>
        </Grid>
        <Grid>
          비밀번호:
          <Input></Input>
        </Grid>
      </Grid>
      <Grid border={"1px solid black"} width={"250px"} margin={"10px auto"}>
        <Button>회원가입</Button>
        <Button>로그인</Button>
      </Grid>
    </Grid>
  );
};

export default Login;
