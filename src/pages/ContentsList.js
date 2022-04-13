import React, {useEffect} from "react";

import MainPost from "../component/MainPost";

import {useSelector} from "react-redux";
import Grid from "../elements/Grid";
import Image from "../elements/Image";

const ContentsList = (props) => {

    const post_list = useSelector((state) => state.post.list)
    console.log(post_list)

    const userNick = useSelector((state) => state.user.userInfo.username)
    console.log(userNick)

    return (
        <div style={{
        }}>
            {post_list.map((p, idx) => {
                if(p.userNick.username === userNick?.userInfo.nickname){
                    return <MainPost key={p.boardId} {...p} isMe />
                }else{
                    return <MainPost key={p.boardId} {...p}/>
                }
            })}
            <div style={{
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100px"
            }}>
                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>

                <div>
                    <div>작성자 / 시간</div>

                    <div>제목</div>

                    <Image src="img/logo.png"/>

                    <div>게시글 내용</div>
                </div>
            </div>
        </div>
    )
}

export default ContentsList