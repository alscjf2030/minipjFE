import React, { useEffect } from "react";

import MainPost from "../component/MainPost";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const ContentsList = (props) => {
    const dispatch = useDispatch();
    const token = sessionStorage.getItem("jwt_token");
    const userInfo = useSelector((state) => state.user.userInfo);

    const postList = useSelector((state) => state?.post?.post);
    // console.log(postList)

    const userNick = useSelector((state) => state.user.userInfo.username)
    console.log(userNick)

    useEffect(() => {
        dispatch(postActions.getPostSp(userInfo.userId, token));
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                border: "1px solid blue",
                width: "100%",
                margin: "20px auto",
                flexWrap: "wrap",
            }}
        >
            {postList?.map((cur, idx) => {
                return <MainPost key={cur?.boardId} {...cur} />;
            })}
        </div>
    );
};

export default ContentsList;

// {post_list.map((p, idx) => {
//     if(p.userNick.username === userNick?.userInfo.nickname){
//         return <MainPost key={p.boardId} {...p} isMe />
//     }else{
//         return <MainPost key={p.boardId} {...p}/>
//     }
// })}