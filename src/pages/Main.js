import React from "react";
import Grid from "../elements/Grid";
import ContentsList from "./ContentsList";
import Permit from "../shared/Permit";
import Button from "../elements/Button";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()


    return (
        <Grid width={"80%"} margin={"0 auto"}>
            <ContentsList/>

            <div style={{display:"flex", float: "right"}}>
                <Permit>
                    <Button onClick={() => {navigate("/write")}}>글쓰기</Button>
                </Permit>
            </div>
        </Grid>
    );
};

export default Main;
