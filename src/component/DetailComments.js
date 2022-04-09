import React from "react";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

const DetailComments = (props) => {

    return(
        <Grid>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </Grid>
    )
}

export default DetailComments


const CommentItem = (props) => {

    const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Image shape="circle"/>
                <Text bold>{user_name}</Text>
            </Grid>

            <Grid is_flex margin="0px 4px">
                <Text margin="0px">{contents}</Text>
                <Text margin="0px">{insert_dt}</Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "smc",
    user_id: "",
    post_id: 1,
    contents: "댓글입력",
    insert_dt: '2021-01-01 19:00:00'
}