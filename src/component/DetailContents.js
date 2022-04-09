import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import DetailComments from "./DetailComments";

const DetailContents = (props) => {

    return (
        <HeadLine>
            <div>
                <Grid is_flex width="auto">
                    <Text>닉네임</Text>
                    <Text>작성시간</Text>
                    <button>수정</button>
                    <button>삭제</button>
                </Grid>

                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <div style={{width: "50%"}}>
                        <Image src={"https://img.marieclairekorea.com/2022/02/mck_620b83ff0751b.jpg"}/>
                    </div>
                    <div style={{width: "50%", textAlign: "center"}}>
                        <Text>상세 페이지 내용</Text>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{display:"flex"}}>
                        <Image width="200px" height="200px" src={"https://img.marieclairekorea.com/2022/02/mck_620b83ff0751b.jpg"}/>
                        <Image width="200px" height="200px" src={"https://img.marieclairekorea.com/2022/02/mck_620b83ff0751b.jpg"}/>
                        <Image width="200px" height="200px" src={"https://img.marieclairekorea.com/2022/02/mck_620b83ff0751b.jpg"}/>
                    </div>

                    <Grid>
                        <DetailComments/>
                    </Grid>
                </div>
            </div>
        </HeadLine>

    )
}

export default DetailContents

const HeadLine = styled.div`
  position: relative;
  margin: auto;
  max-width: 80%;
`