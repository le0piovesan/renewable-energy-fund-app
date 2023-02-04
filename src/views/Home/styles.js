import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${defaultStyle.brandGray};
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const SectionRow = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ leftAlign }) =>
    leftAlign ? "space-evenly" : "space-between"};
`;
