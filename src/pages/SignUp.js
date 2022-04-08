import React, { useState } from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import { creatActions as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userId, setUserID] = useState();
  const [nickname, setNickname] = useState();
  const [pw, setPw] = useState();
  const [checkPw, setCheckPw] = useState();

  return (
    <Grid width={"600px"} border={"1px solid black"} margin={"200px auto"}>
      <Grid width={"300px"} border={"1px solid black"} margin={"0px auto"}>
        <Grid>
          아이디:
          <Input onChange={(e) => setUserID(e.target.value)}></Input>
        </Grid>
        <Grid>
          닉네임:
          <Input onChange={(e) => setNickname(e.target.value)}></Input>
        </Grid>
        <Grid>
          비밀번호:
          <Input onChange={(e) => setPw(e.target.value)}></Input>
        </Grid>
        <Grid>
          췤비밀번호:
          <Input onChange={(e) => setCheckPw(e.target.value)}></Input>
        </Grid>
      </Grid>
      <Grid border={"1px solid black"} width={"250px"} margin={"10px auto"}>
        <Button
          onClick={() => {
            dispatch(userActions.SignUpSP(userId, nickname, pw, checkPw));
          }}
        >
          회원가입
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignUp;
