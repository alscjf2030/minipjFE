import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  const { children, onClick, padding, margin, width } = props;
  const styles = { padding, margin, width };
  return <Btn onClick={onClick}>{children}</Btn>;
};

const Btn = styled.button`
  width: ${(props) => props.width};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
