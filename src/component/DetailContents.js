import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import DetailComments from "./DetailComments";
import AddComments from "./AddComments";
import { useParams } from "react-router";
import { getApi } from "../api/client";
import Button from "./../elements/Button";

const DetailContents = (props) => {
  const { user_name, insert_dt } = props;
  // const params = useParams()
  // const {id} = params
  // const [data, setData] = useState()
  // useEffect(() => {
  //     if (id) {
  //         getApi(`/api/board/detail/${id}`)
  //             .then((res) => {
  //                 if (res.status === 200) {
  //                     setData(res.data)
  //                 }
  //             }).catch((err) => {
  //                 console.error(err)
  //             })
  //     }
  // }, [])

  // if (!data) {
  //     return <div>Loading...</div>
  // }

  return (
    <HeadLine>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Text size={"1.2em"} margin={"60px 20px 0px auto"}>
            {user_name}kop
          </Text>
          <Text size={"1.2em"} margin={"60px auto"}>
            {insert_dt}2022-04-12
          </Text>
        </div>
        <div>
          <Grid is_flex width={"200px"} height={"50px"} margin={"40px auto"}>
            <Button width={"80px"} bg={"#0D6EFD"}>
              수정
            </Button>
            <Button width={"80px"} bg={"#0D6EFD"}>
              삭제
            </Button>
          </Grid>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image border={"1px solid black"} src="img/logo.png" />
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              textAlign: "center",
              border: "1px solid black",
            }}
          >
            <Text>상세 페이지 내용</Text>
          </div>
        </div>
        <div style={{ margin: "auto" }}>
          <Grid padding="16px">
            <AddComments />
            <DetailComments />
          </Grid>
        </div>
      </div>
    </HeadLine>
  );
};

export default DetailContents;

const HeadLine = styled.div`
  position: relative;
  margin: auto;
  max-width: 80%;
`;
