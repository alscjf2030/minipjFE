import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

const DetailContents = (props) => {

    return (
        <HeadLine>
            <Grid>
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
                        <Text>게시물 내용</Text>
                    </div>
                </div>
            </Grid>
            <Grid>
                <div>상세 페이지 내용</div>

                <Grid>
                    title
                </Grid>

                <Grid>
                    contents
                </Grid>
            </Grid>
        </HeadLine>

    )
}

export default DetailContents

const HeadLine = styled.div`
  position: relative;
  margin: auto;
  max-width: 1200px;
`