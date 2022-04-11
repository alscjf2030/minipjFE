import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import DetailComments from "./DetailComments";
import AddComments from "./AddComments";
import {useParams} from "react-router";
import {getApi} from "../api/client";

const DetailContents = (props) => {
    const {user_name, insert_dt} = props;
    const params = useParams()
    const {id} = params
    const [data, setData] = useState()
    useEffect(() => {
        if (id) {
            getApi(`/api/board/detail/${id}`)
                .then((res) => {
                    if (res.status === 200) {
                        setData(res.data)
                    }
                }).catch((err) => {
                    console.error(err)
                })
        }
    }, [])

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <HeadLine>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex"}}>
                    <Text>{user_name}</Text>
                    <Text>{insert_dt}</Text>
                </div>
                <div>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>

            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Image src="img/logo.png"/>
                    <div style={{
                        width: "50%",
                        textAlign: "center"
                    }}>
                        <Text>상세 페이지 내용</Text>
                    </div>
                </div>
                <div style={{margin: "auto"}}>
                    <Grid padding="16px">
                        <AddComments/>
                        <DetailComments/>
                    </Grid>
                </div>
            </div>
        </HeadLine>

    )
}

DetailContents.defaultProps = {
    user_profile: "",
    user_name: "smc",
    user_id: "",
    post_id: 1,
    contents: "여기에 댓글이 입력됩니다.",
    insert_dt: '2021-01-01'
}

export default DetailContents

const HeadLine = styled.div`
  position: relative;
  margin: auto;
  max-width: 80%;
`