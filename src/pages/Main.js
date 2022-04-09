import React from "react";
import Grid from "../elements/Grid";
import ContentsList from "./ContentsList";

const Main = () => {
    return (
        <Grid width={"80%"} margin={"0 auto"}>
            <ContentsList/>
        </Grid>
    );
};

export default Main;
