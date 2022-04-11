import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import Button from "../elements/Button";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";

const AddPost = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.userInfo.userId);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.post);

  const [contents, setContents] = React.useState();
  const token = sessionStorage.getItem("jwt_token");
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const data = {
    title: "이거 이제 되니",
    contents: contents,
    userId: 1,
    headinfo: "브랜드",
    topinfo: "브랜드",
    bottominfo: "브랜드",
    shoesinfo: "브랜드",
  };

  const addPost = () => {
    dispatch(postActions.addPostSP(data, token));
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
        <Upload />
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
          <Image width={"100%"} src={preview ? preview : "img/logo.png"} />
        </div>
      </Grid>

      <div
        style={{
          display: "flex",
          flexDirection: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <textarea
          onChange={changeContents}
          type="text"
          placeholder="게시글 작성"
          cols="50"
          rows="5"
        />
      </div>

      <Grid padding="16px">
        <Button
          onClick={() => {
            console.log("이거왜안돼");
            addPost();
            navigate("/");
          }}
          text="게시글 작성"
        ></Button>
      </Grid>
    </div>
  );
};

export default AddPost;
