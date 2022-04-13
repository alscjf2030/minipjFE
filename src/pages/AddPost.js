import React, { useEffect, useState } from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import Button from "../elements/Button";
import Upload from "../shared/Upload";
import Input from "../elements/Input";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";

const AddPost = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams()
    const token = sessionStorage.getItem("jwt_token");

    const userId = useSelector((state) => state.user.userInfo.userId);
    const post_list = useSelector((state) => state.post.post);

    const postNum = params.id;

    const _post = postNum ? post_list.find((p) => {
        return p.boardId === Number(postNum)
    }) : null;

    useEffect(() => {
        if(postNum && !_post){
            console.log("포스트가 없어요")
            navigate(-1)
        }
    }, [])

    const [preview, setPreview] = useState(_post?.url || '');
    const [image, setImage] = useState('');
    const [content, setContent] = useState(_post?.content || '');
    const [title, setTitle] = useState(_post?.title || '');
    const [headinfo, setHeadinfo] = useState(_post?.headinfo || '');
    const [topinfo, setTopinfo] = useState(_post?.topinfo || '');
    const [bottominfo, setBottominfo] = useState(_post?.bottominfo || '');
    const [shoesinfo, setShoesinfo] = useState(_post?.shoesinfo || '');


    const changeContents = (e) => {
        setContent(e.target.value);
    };
    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const changeHead = (e) => {
        setHeadinfo(e.target.value);
    };
    const changeTop = (e) => {
        setTopinfo(e.target.value);
    };
    const changeBottom = (e) => {
        setBottominfo(e.target.value);
    };
    const changeShoes = (e) => {
        setShoesinfo(e.target.value);
    };

    const editPost = () => {
        dispatch(
            postActions.editPostSP(
                {
                    title,
                    content,
                    headinfo,
                    topinfo,
                    bottominfo,
                    shoesinfo,
                    image,
                    userId: userId,
                },
                postNum,
                navigate
            )
        );
    }

    const addPost = () => {
        if (!headinfo) {
            setHeadinfo("X");
        }
        if (!topinfo) {
            setTopinfo("X");
        }
        if (!bottominfo) {
            setBottominfo("X");
        }
        if (!shoesinfo) {
            setShoesinfo("X");
        }
        if (!title) {
            return window.alert("제목을 입력해주세요");
        }
        if (!content) {
            return window.alert("내용을 입력해주세요");
        } else {
            dispatch(
                postActions.addPostSP(
                    {
                        title: title,
                        content: content,
                        headinfo: headinfo,
                        topinfo: topinfo,
                        bottominfo: bottominfo,
                        shoesinfo: shoesinfo,
                        userId: userId,
                        image: image,
                    },
                    token
                )
            );
            navigate("/");
        }
    };


    // 로그인 후에만 가능합니다.
    // if(!userId){
    //     return (
    //         <div style={{display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             flexDirection: "column"}}>
    //             <Text bold >회원만 이용이 가능합니다.</Text>
    //             <Button onClick={() => {navigate("/", { replace : true })}}>돌아가기</Button>
    //         </div>
    //     )
    // }

    return (
        <div style={{ position: "relative", margin: "auto", maxWidth: "80%" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Text margin="auto" size="36px" bold>
                    게시글 작성
                </Text>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px auto",
                }}
            >
                <Upload image={image} setImage={setImage} setPreview={setPreview} />
            </div>

            <Grid padding="16px">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text margin="0px" size="24px" bold>
                        미리보기
                    </Text>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image width={"50%"} src={preview ? preview : "img/logo.png"} />
                </div>
            </Grid>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div style={{ margin: "10px" }}>
                    <input
                        onChange={changeTitle}
                        value={title}
                        type="text"
                        size="50"
                        placeholder="게시글 제목"
                    />
                </div>
                <div style={{ margin: "10px" }}>
                    <input
                        onChange={changeHead}
                        value={headinfo}
                        type="text"
                        size="50"
                        placeholder="모자 브랜드"
                    />
                </div>
                <div style={{ margin: "10px" }}>
                    <input
                        onChange={changeTop}
                        value={topinfo}
                        type="text"
                        size="50"
                        placeholder="상의 브랜드"
                    />
                </div>
                <div style={{ margin: "10px" }}>
                    <input
                        onChange={changeBottom}
                        value={bottominfo}
                        type="text"
                        size="50"
                        placeholder="하의 브랜드"
                    />
                </div>
                <div style={{ margin: "10px" }}>
                    <input
                        onChange={changeShoes}
                        value={shoesinfo}
                        type="text"
                        size="50"
                        placeholder="신발 브랜드"
                    />
                </div>
                <textarea
                    onChange={changeContents}
                    type="text"
                    placeholder="게시글 내용"
                    cols="50"
                    rows="5"
                    value={content}
                />
            </div>

            <Grid padding="16px">
                <Button
                    onClick={() => {
                        if ( _post ) {
                            editPost()
                            navigate(`/detail/${postNum}`);
                        } else {
                            addPost();
                            navigate("/");
                        }
                    }}
                    text={_post ? "게시글 수정" : "게시글 작성"}
                />
            </Grid>
        </div>
    );
};

export default AddPost;
