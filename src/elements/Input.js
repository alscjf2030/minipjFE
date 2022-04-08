import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { type, onChange, padding, margin, width } = props;
  const styles = { padding, margin, width };
  return <TextInput type={type} onChange={onChange} {...styles}></TextInput>;
};

const TextInput = styled.input`
  width: ${(props) => props.width};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;
export default Input;
