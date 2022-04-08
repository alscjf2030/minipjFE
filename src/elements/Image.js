import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, width, height, bor_radius } = props;
  const styles = { width: width, height: height, bor_radius: bor_radius };
  return <Img src={src} {...styles}></Img>;
};

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.bor_radius ? `border-radius: 10px;` : "")}
`;

export default Image;
