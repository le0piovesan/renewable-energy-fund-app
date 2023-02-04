import styled from "styled-components";
import defaultStyle from "../../../defaultStyle";
import { LinearGradient } from "expo-linear-gradient";

export const ContainerFooter = styled.View`
  flex: 1.5;
  justify-content: center;
  padding: 10px 20px 0px;
`;

export const BlogCard = styled(LinearGradient)`
  padding: 15px;
  opacity: 0.8;
  margin: 3px 0px;
  border-width: 1px;
  border-color: ${defaultStyle.borderColor};
  border-radius: 5px;
`;
