import {createAction, handleActions} from "redux-actions";
import produce from "immer";
import {postApi} from "../../api/client";

const SET_POST = "SET_POST"
const ADD_POST = "ADD_POST"

const setPost = createAction(SET_POST, (post_list) => ({post_list}))
const addPost = createAction(ADD_POST, (post) => ({post}))


const initialState = {
    list: [],
}

const initialPost = {
    id: 0,
    user_info: {
        user_name: "SMC",
        user_profile: "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg"
    },
    image_url: "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg",
    contents: "고양이입니다.",
    comment_cnt: 50,
    insert_dt: "2022-04-09 10:00:00",
    is_me: false,
}

const addPostSP = (data, navigate) => {
    return function (dispatch, getState) {

        const _image = getState().image.preview;

        postApi("/api/board/regist", {
            title : data.title,
            content : data.content,
            userId : data.userId
        })
            .then((res) => {
                dispatch(addPost())
                navigate('/', { replace : true })
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
                window.alert("게시물 작성에 실패했습니다.")
            });
    }
}

export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {

        }),
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.push(action.payload.post)
        }),
    }, initialState
);

const actionCreators = {
    setPost,
    addPost,
    addPostSP,
}

export {actionCreators}