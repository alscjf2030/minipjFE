import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const LIKE = "LIKE";
const DISLIKE = "DISLIKE";
const myLiked = createAction(LIKE, (liked) => ({liked}));
const disLike = createAction(DISLIKE, (disLiked) => ({disLiked}));

export const myLikeDB = (userId, boardId, token) => {
    return function (dispatch, getState) {
        axios
            .post(`http://52.79.228.83:8080/api/board/favoriteboard`, {
            userId: 1,
            boardId: 37,
        }, {
            headers: {Authorization: `Bearer ${token}`,}
        })
            .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };
};
export const disLikeDB = (userId, boardId, token) => {
    return function (dispatch, getState) {
        axios
            .delete(`http://52.79.228.83:8080/api/board/favoriteboard/37/1`, {
                headers: {Authorization: `Bearer ${token}`,}
            })
            .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };
};
export default handleActions({
    [LIKE]: (state, action) => produce(state, (draft) => {
    }),
    [DISLIKE]: (state, action) => produce(state, (draft) => {
    }),
}, {});

const actionCreators = {
    myLikeDB,
    disLikeDB
}

export { actionCreators }