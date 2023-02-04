import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`;

export const ContainerHeader = styled.SafeAreaView`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${defaultStyle.brandGray};
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const SectionRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
`;

export const Income = styled.View`
  align-items: center;
`;

export const ContainerMain = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  border-width: 1px;
  border-color: ${defaultStyle.borderColor};
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${defaultStyle.brandSecondary};
  border-width: 10px;
  border-color: ${defaultStyle.brandSecondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const StyledTextButton = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;
