import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

// 액션 타입
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SIGNUP = "SIGNUP";

// 액션 생성 함수
const logIn = createAction(LOGIN, (user) => ({ user }));
const SignUp = createAction(LOGOUT, (user) => ({ user }));

const initialState = {};

// 미들 웨어
const LoginSP = (userId, pw) => {
  return function (dispatch, getState) {
    axios
      .post("http://52.79.228.83:8080/user/login", {
        username: userId,
        password: pw,
      })
      .then((res) => {
        console.log(res);
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
    [LOGIN]: (state, action) => produce(state, (draft) => {}),
    [SIGNUP]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const creatActions = {
  SignUpSP,
  LoginSP,
};
export { creatActions };
