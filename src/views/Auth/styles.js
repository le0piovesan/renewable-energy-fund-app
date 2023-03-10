import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0px 20px;
  background-color: #fff;
`;

export const SectionRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${defaultStyle.brandSecondary};
`;

export const SubTitle = styled.Text`
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};
  padding-left: 10px;
  font-weight: bold;
`;

export const ContainerForm = styled.View`
  background-color: #fff;
  border-width: 2px;
  border-color: ${defaultStyle.borderColor};
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
`;

export const StyledOptionTextButton = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${defaultStyle.brandGray};
  text-decoration: underline;
`;
