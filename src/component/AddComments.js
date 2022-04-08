import React from "react";
import ContentsInput from "../elements/ContentsInput";
import Button from "../elements/Button";
import Grid from "../elements/Grid";

const AddComments = () => {
  return (
    <Grid>
      <ContentsInput></ContentsInput>
      <Grid>
        <Button>작성하기</Button>
      </Grid>
    </Grid>
  );
};

export default AddComments;
