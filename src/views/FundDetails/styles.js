import styled from "styled-components";
import defaultStyle from "../../defaultStyle";
import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 0px;
  background-color: #fff;
`;

export const PlotBackground = styled.ImageBackground`
  flex: 3;
  width: ${width + "px"};
`;

export const FundIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const SectionRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Grid = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: ${width + "px"};
  border-bottom-width: 1px;
  border-bottom-color: ${defaultStyle.borderColor};
`;

export const Graph = styled.Image`
  flex: 1.5;
  margin-bottom: 10px;
`;

export const Description = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  border-left-width: 1px;
  border-left-color: ${defaultStyle.borderColor};
`;

export const MoreInfo = styled.View`
  flex: 0.5;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 20px 0px;
  width: ${width + "px"};
  border-bottom-width: 1px;
  border-bottom-color: ${defaultStyle.borderColor};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${defaultStyle.brandGray};
`;

export const ContainerFooter = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: flex-end;
`;
