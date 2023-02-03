import React from "react";
import styled from "styled-components/native";
import defaultStyle from "../../defaultStyle";
import { Entypo } from "@expo/vector-icons";

export default TextInput = ({
  label,
  passwordVisible = "",
  setPasswordVisible = "",
  ...props
}) => {
  return (
    <ContainerInput>
      <ContainerLabel>
        <StyledText light size="14px">
          {label}
        </StyledText>
      </ContainerLabel>
      {label === "Password" && (
        <StyledPasswordButton
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <Entypo name="eye" size={30} color={defaultStyle.brandSecondary} />
          ) : (
            <Entypo
              name="eye-with-line"
              size={30}
              color={defaultStyle.brandSecondary}
            />
          )}
        </StyledPasswordButton>
      )}

      <StyledInput {...props} />
    </ContainerInput>
  );
};

const ContainerInput = styled.View`
  height: 50px;
  margin-top: 20px;
`;

const ContainerLabel = styled.View`
  position: absolute;
  top: -10px;
  left: 15px;
  z-index: 50;
  background-color: #fff;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-color: ${({ error }) =>
    error ? defaultStyle.brandDanger : defaultStyle.brandGray};
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledText = styled.Text`
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledPasswordButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 100;
`;
