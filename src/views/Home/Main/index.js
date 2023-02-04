import React from "react";
import { Text, View, Image } from "react-native";
import { ContainerMain, Title, Bold, SectionRow, Income } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import defaultStyle from "../../../defaultStyle";

export default function Main({ user }) {
  return (
    <ContainerMain>
      <Title>Funds</Title>
      <Image
        source={require("../../../../assets/wind-fund.png")}
        resizeMode="contain"
        style={{
          width: 150,
          height: 150,
        }}
      />
      <Image
        source={require("../../../../assets/solar-fund.png")}
        resizeMode="contain"
        style={{
          width: 150,
          height: 150,
        }}
      />
    </ContainerMain>
  );
}
