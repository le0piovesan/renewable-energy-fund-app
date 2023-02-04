import React, { useEffect } from "react";
import { View, Text } from "react-native";
import {
  Container,
  PlotBackground,
  FundIcon,
  Grid,
  Title,
  SectionRow,
  Graph,
  Description,
  SubTitle,
  MoreInfo,
  ContainerFooter,
} from "./styles";
import defaultStyle from "../../defaultStyle";
import { useSelector } from "react-redux";

import PressableBtn from "../../components/PressableBtn";

export default function FundDetails({ navigation, route }) {
  const { params } = route,
    { item = "" } = params;

  useEffect(() => {
    navigation.setOptions({
      title: item.name,
      headerStyle: {
        backgroundColor: item.color,
      },
    });
  }, []);

  return (
    <Container>
      <FundIcon source={item.icon} resizeMode="contain" />

      <Grid>
        <Graph source={item.graph} resizeMode="contain" />
        <Description>
          <Title>Info & Stats</Title>
          <SubTitle>
            Value: <Text style={{ color: "#000" }}>${item.value}</Text>
          </SubTitle>
          <SubTitle>
            AUM: <Text style={{ color: "#000" }}>$430.88m</Text>
          </SubTitle>
          <SubTitle>
            Vintage Range: <Text style={{ color: "#000" }}>2019 - 2022</Text>
          </SubTitle>
          <SubTitle>
            Price at Close: <Text style={{ color: "#000" }}>$417.68</Text>
          </SubTitle>
        </Description>
      </Grid>

      <MoreInfo>
        <View>
          <SubTitle>Issue Date:</SubTitle>
          <Text style={{ color: "#000" }}>18/04/2022</Text>
        </View>
        <View>
          <SubTitle>TER:</SubTitle>
          <Text style={{ color: "#000" }}>0.15 %</Text>
        </View>
        <View>
          <SubTitle>Price at Open:</SubTitle>
          <Text style={{ color: "#000" }}>$ 17.74</Text>
        </View>
      </MoreInfo>

      <PlotBackground source={item.plotBackground} resizeMode="contain">
        <Text
          style={{
            padding: 20,
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          condimentum viverra blandit. Nullam id fringilla nisl. Nullam cursus
          ornare purus, finibus posuere elit fringilla a. In hac habitasse
          platea dictumst. Sed non sodales tellus, id malesuada purus. Phasellus
          sed malesuada mauris. Nam sagittis pellentesque dui et blandit. Nulla
          aliquet congue venenatis. Suspendisse cursus sodales dolor sed varius.
          Fusce lobortis, velit id malesuada pretium, ante dui pulvinar augue,
          ut aliquam neque libero nec dui. Suspendisse potenti.
        </Text>
        <ContainerFooter>
          <SectionRow>
            <PressableBtn
              title={"Sell"}
              secondary
              style={{
                width: "45%",
              }}
            />
            <PressableBtn
              title={"Buy"}
              style={{
                width: "45%",
              }}
            />
          </SectionRow>
        </ContainerFooter>
      </PlotBackground>
    </Container>
  );
}
