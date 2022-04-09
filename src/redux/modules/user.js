import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import jwt_decode from "jwt-decode";

// 액션 타입
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SIGNUP = "SIGNUP";

// 액션 생성 함수
const logIn = createAction(LOGIN, (userInfo) => ({ userInfo }));
const SignUp = createAction(LOGOUT, (user) => ({ user }));

const initialState = {
  userInfo: {
    useremail: "USER_NAME",
    nickname: "nickname",
  },
  is_login: false,
};

// 미들 웨어
const LoginSP = (userId, pw) => {
  return function (dispatch, getState) {
    axios
      .post("http://52.79.228.83:8080/user/login", {
        username: userId,
        password: pw,
      })
      .then((res) => {
        const token = res.headers.authorization.split(" ")[1];
        console.log(jwt_decode(token));
        console.log(JSON.parse(atob(token.split(".")[1])).USER_NAME);
        const useremail = JSON.parse(atob(token.split(".")[1])).USER_NAME;
        sessionStorage.setItem("jwt_token", token);
        dispatch(
          logIn({
            useremail: useremail,
            nickname: "kop",
          })
        );
      })
      .catch((err) => console.log(err));
  };
};

const SignUpSP = (userId, nickname, pw, checkPw) => {
  return function (dispatch, getState) {
    axios
      .post("http://52.79.228.83:8080/user/signup", {
        username: userId,
        nickname: nickname,
        password: pw,
        passwordCheck: checkPw,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
};

// 리듀서
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
        draft.is_login = true;
      }),
    [SIGNUP]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const creatActions = {
  SignUpSP,
  LoginSP,
};
export { creatActions };
