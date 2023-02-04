import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #fff;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${defaultStyle.brandPrimary};
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${defaultStyle.brandGray};
  text-align: center;
`;
