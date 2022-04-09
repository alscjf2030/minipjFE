import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

//액션 타입
const ADDCOMMENT = "ADDCOMMENT";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

// 액션 생성 함수
const addComment = createAction(ADDCOMMENT, (user) => ({ user }));
const updateComment = createAction(UPDATE, (user) => ({ user }));
const deleteComment = createAction(DELETE, (user) => ({ user }));

// 미들웨어
const addCommentSP = (userId, boardId, comment, token) => {
  return function (dispatch, getState) {
    axios
      .post(
        "http://52.79.228.83:8080/api/comment/regist",
        {
          userId: 1,
          boardId: 1,
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
};

const initialState = { list: [] };
const initialComment = {
  userInfo: {
    userId: 1,
    useremail: "aaa@aaa.com",
    nickname: "aaa",
  },
  boardId: 1,
  comments: "와아아아이쁘네요",
  insertDt: "YYYY-MM-DD-hh-mm",
};

// 리듀서
export default handleActions(
  {
    [ADDCOMMENT]: (state, action) => produce(state, (draft) => {}),
    [UPDATE]: (state, action) => produce(state, (draft) => {}),
    [DELETE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  addCommentSP,
};

export { actionCreators };
