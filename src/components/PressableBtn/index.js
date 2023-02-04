import React from "react";
import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

export default PressableBtn = ({ title, ...props }) => {
  return (
    <StyledButton {...props}>
      <StyledTextButton {...props}>{title}</StyledTextButton>
    </StyledButton>
  );
};

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ secondary }) =>
    secondary ? "transparent" : defaultStyle.brandPrimary};
  border-width: 2px;
  padding: 20px;
  border-color: ${defaultStyle.brandPrimary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const StyledTextButton = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${({ secondary }) => (secondary ? defaultStyle.brandPrimary : "#fff")};
  font-weight: bold;
`;
