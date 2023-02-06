import styled from "styled-components";
import defaultStyle from "../../../defaultStyle";
import { LinearGradient } from "expo-linear-gradient";

export const ContainerMain = styled.View`
  flex: 2;
  justify-content: center;
  padding: 10px;
  border-width: 1px;
  border-color: ${defaultStyle.borderColor};
`;

export const FundCard = styled.TouchableOpacity`
  margin: 10px 2px;
  border-width: 1px;
  border-color: ${defaultStyle.borderColor};
  border-radius: 20px;
`;

export const FundBackground = styled(LinearGradient)`
  opacity: 0.8;
  border-color: ${defaultStyle.borderColor};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
`;

export const FundGraph = styled.Image`
  width: 150px;
  height: 150px;
`;

export const DescriptionCard = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${defaultStyle.borderColor};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;
