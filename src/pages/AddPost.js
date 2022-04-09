import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import Button from "../elements/Button";

const AddPost = (props) => {

    const [contents, setContents] = React.useState()

    const changeContents = (e) => {
        setContents(e.target.value)
    }

    return (
        <div style={{position: "relative", margin: "auto", maxWidth: "80%"}}>
            <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"}}>
                <Text margin="auto" size="36px" bold>
                    게시글 작성
                </Text>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px auto"
            }}>
                <input type="file"/>
            </div>

            <Grid padding="16px">
                <div style={{
                    display: "flex",
                    flexDirection: "center",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text margin="0px" size="24px" bold>
                        미리보기
                    </Text>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "center",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image
                        src="img/logo.png"
                    />
                </div>
            </Grid>

            <div style={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
                alignItems: "center"}}>
                <textarea onChange={changeContents} type="text" placeholder="게시글 작성" cols="50" rows="5"/>
            </div>

            <Grid padding="16px">
                <Button text="게시글 작성"></Button>
            </Grid>
        </div>
    );
}


export default AddPost;

