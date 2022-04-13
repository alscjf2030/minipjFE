import {createAction, handleActions} from "redux-actions";
import produce from "immer";
import {
    deleteApi,
    getApi,
    postApi,
    putApi,
    setClient,
} from "../../api/client";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
    list: [],
};

const initialPost = {
    boardId: 0,
    user_info: {
        user_name: "SMC",
        user_profile:
            "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg",
    },
    image_url:
        "https://images.wallpaperscraft.com/image/single/cat_cute_lie_71887_1920x1080.jpg",
    contents: "고양이입니다.",
    comment_cnt: 50,
    insert_dt: "2022-04-09 10:00:00",
    is_me: false,
};


const addPostSP = (data, image, navigate) => {
    return function (dispatch, getState) {

        const frm = new FormData();
        const photoFile = document.getElementById("image")
        frm.append("image", photoFile.files[0]);

        postApi(
            "/api/board/regist",
            data
        ).then((res) => {
            console.log(res);
            postApi("/api/board/photo",
                frm, {
                headers: {
                    'content-Type': 'multipart/form-data'
                }}
            ).catch((err) => {
                console.log(err)
            })
            // postApi('/api/board/photo', {
            //     boardId: res.data.boardId,
            //     file: image
            // }).catch((err) => {
            //     console.log(err)
            //     window.alert("이미지 업로드에 실패했습니다.");
            // })
            dispatch(addPost(data));
            navigate('/')
        }).catch((err) => {
            console.log(err);
            window.alert("게시물 작성에 실패했습니다.");
        });
    };
}

// const addPostSP = (data, token) => {
//   console.log(data);
//   return function (dispatch, getState) {
//
//     axios
//       .post(
//         "http://52.79.228.83:8080/api/board/regist",
//         {
//           title: "이거 이제 되니",
//           content: "dfdfdfdfd",
//           userId: 1,
//           headinfo: "브랜드",
//           topinfo: "브랜드",
//           bottominfo: "브랜드",
//           shoesinfo: "브랜드",
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res);
//         // dispatch(addPost(data));
//         // navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//         window.alert("게시물 작성에 실패했습니다.");
//       });
//   };
//
// };

const getPostSp = () => {
    return function (dispatch, getState) {
        getApi("/api/board")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const deletePostSp = (data) => {
    return function (dispatch, getState) {
        deleteApi(`/api/board/${data.boardid}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                window.alert("게시물 작성에 실패했습니다.");
            });
    };
};

const updatePostSp = (data) => {
    return function (dispatch, getState) {
        putApi(`/api/board/${data.boardid}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
        }),
        [ADD_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.unshift(action.payload.post);
            }),
    },
    initialState
);

const actionCreators = {
    setPost,
    addPost,
    addPostSP,
};

export {actionCreators};
