import React, {useState} from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import Button from "../elements/Button";
import Upload from "../shared/Upload";
import Input from "../elements/Input";

import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {actionCreators as postActions} from "../redux/modules/post";


const AddPost = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const is_login = useSelector((state) => state.user.userInfo.userId);
    const post_list = useSelector((state) => state.post.post);

    const [image, setImage] = useState()
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [headinfo, setHeadinfo] = useState('');
    const [topinfo, setTopinfo] = useState('');
    const [bottominfo, setBottominfo] = useState('');
    const [shoesinfo, setShoesinfo] = useState('');

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

    const addPost = () => {
        dispatch(postActions.addPostSP(
            {
                title : "제목",
                content : "내용",
                headinfo : "모자",
                topinfo : "상의",
                bottominfo: "하의",
                shoesinfo : "신발",
                userId: 1,
            },
            image,
            navigate
        ));
    };

    // 로그인 후에만 가능합니다.
    // if(!is_login){
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
        <div style={{position: "relative", margin: "auto", maxWidth: "80%"}}>
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
                <Upload image={image} setImage={setImage}/>
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
                    <Image width={"50%"} src={image ? image : "img/logo.png"}/>
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
                <div style={{margin: "10px"}}>
                    <input onChange={changeTitle} value={title} type="text" size="50" placeholder="게시글 제목"/>
                </div>
                <div style={{margin: "10px"}}>
                    <input onChange={changeHead} value={headinfo} type="text" size="50" placeholder="모자 브랜드"/>
                </div>
                <div style={{margin: "10px"}}>
                    <input onChange={changeTop} value={topinfo} type="text" size="50" placeholder="상의 브랜드"/>
                </div>
                <div style={{margin: "10px"}}>
                    <input onChange={changeBottom} value={bottominfo} type="text" size="50" placeholder="하의 브랜드"/>
                </div>
                <div style={{margin: "10px"}}>
                    <input onChange={changeShoes} value={shoesinfo} type="text" size="50" placeholder="신발 브랜드"/>
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
                        addPost();
                        navigate("/");
                    }}
                    text="게시글 작성"
                >
                </Button>
            </Grid>
        </div>
    );
};

export default AddPost;
