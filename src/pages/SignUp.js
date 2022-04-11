import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { emailCheck, pwCheck } from "../shared/ValidCheck";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userId, setUserID] = useState();
  const [nickname, setNickname] = useState();
  const [pw, setPw] = useState();
  const [checkPw, setCheckPw] = useState();

  const signup = () => {
    if (!userId || !nickname || !pw || !checkPw) {
      return window.alert("공백을 채워주세요");
    }
    if (!emailCheck.test(userId)) {
      return window.alert("지켜라");
    }
    if (!pwCheck.test(pw)) {
      return window.alert("지키라고");
    }
    if (pw !== pwCheck) {
      return window.alert("어허 끝까지 안지키네");
    } else {
      dispatch(userActions.SignUpSP(userId, nickname, pw, checkPw));
      navigate("/login");
    }
  };

  console.log(Boolean(userId));
  return (
    <Grid
      width={"660px"}
      border={"2px solid #0D6EFD"}
      margin={"200px auto"}
      height={"600px"}
      bor_radius
    >
      <Grid
        width={"100%"}
        border={"px solid black"}
        margin={"120px auto 40px auto"}
      >
        <Grid>
          아이디
          <Input
            width={"220px"}
            onChange={(e) => setUserID(e.target.value)}
          ></Input>
        </Grid>
        <Grid>
          닉네임
          <Input
            width={"220px"}
            onChange={(e) => setNickname(e.target.value)}
          ></Input>
        </Grid>
        <Grid>
          비밀번호
          <Input
            width={"220px"}
            onChange={(e) => setPw(e.target.value)}
          ></Input>
        </Grid>
        <Grid>
          확인비밀번호
          <Input
            width={"220px"}
            onChange={(e) => setCheckPw(e.target.value)}
          ></Input>
        </Grid>
      </Grid>
      <Button bg={"#0D6EFD"} width={"55%"} margin={"0px auto"} onClick={signup}>
        회원가입
      </Button>
    </Grid>
  );
};

const InputBox = styled.div`
  margin: -1px auto 0 auto;
  border: 1px solid black;
  width: 55%;
  height: 60px;
  line-height: 60px;
  border-radius: 5px;
  box-sizing: border-box;
`;

export default SignUp;
