import React from "react";
import { styled } from "styled-components";

const Image = (props) => {
  const { src, width, height } = props;
  const styles = { width, height };
  return <Img src={src} {...styles}></Img>;
};

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Image;
