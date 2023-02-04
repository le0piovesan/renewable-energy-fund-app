import styled from "styled-components";
import defaultStyle from "../../../defaultStyle";

export const ContainerMain = styled.View`
  flex: 2;
  justify-content: center;
  padding: 10px;
  border-width: 1px;
  border-color: ${defaultStyle.borderColor};
`;

export const FundCard = styled.TouchableOpacity`
  padding: 20px 0px;
  margin: 2px;
  border-right-width: 1px;
  border-right-color: ${defaultStyle.borderColor};
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
