import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { children, onClick, margin, width, height, fontSize } = props;
  const styles = {
    margin: margin,
    width: width,
    height: height,
    fontSize: fontSize,
  };
  return (
    <Btn onClick={onClick} {...styles}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  height: "50px",
  margin: "50px auto",
  width: "120px",
  lineHeight: "50px",
};

const Btn = styled.div`
  // border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: black;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  text-align: center;
  line-height: ${(props) => props.height};
  color: #ffffff;
  &:hover {
    cursor: pointer;
    border: 1px solid slateblue;
    background-color: #fff;
    color: slateblue;
  }
`;

export default Button;
