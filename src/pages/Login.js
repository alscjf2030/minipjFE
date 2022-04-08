import React, { useState } from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import { creatActions as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [userId, setUserID] = useState(null);
  const [pw, setPw] = useState(null);

  const login = () => {
    dispatch(userActions.LoginSP(userId, pw));
  };

  return (
    <Grid width={"600px"} border={"1px solid black"} margin={"200px auto"}>
      <Grid width={"250px"} border={"1px solid black"} margin={"0px auto"}>
        <Grid>
          아이디:
          <Input
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          ></Input>
        </Grid>
        <Grid>
          비밀번호:
          <Input
            onChange={(e) => {
              setPw(e.target.value);
            }}
          ></Input>
        </Grid>
      </Grid>
      <Grid border={"1px solid black"} width={"250px"} margin={"10px auto"}>
        <Button>회원가입</Button>
        <Button onClick={login}>로그인</Button>
      </Grid>
    </Grid>
  );
};

export default Login;
