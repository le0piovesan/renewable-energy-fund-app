import React from "react";
import { Text, View } from "react-native";
import { Bold, SectionRow } from "../styles";
import { ContainerHeader, Income } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import defaultStyle from "../../../defaultStyle";

export default function Header({ user }) {
  return (
    <ContainerHeader>
      <SectionRow>
        <Ionicons name="person-circle-outline" size={35} color="#000" />

        <Income>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Wallet{"\n"}
            <Bold style={{ color: defaultStyle.brandValue }}>
              ${user.account}
            </Bold>
          </Text>

          <View>
            <Text
              style={{
                color: defaultStyle.brandGray,
              }}
            >
              Profit:
            </Text>
            <SectionRow>
              <Ionicons
                name="arrow-up-circle"
                size={20}
                color={defaultStyle.brandValue}
              />
              <Bold style={{ color: defaultStyle.brandValue }}>0%</Bold>
            </SectionRow>
          </View>
        </Income>
        <Ionicons name="settings-outline" size={32} color="#000" />
      </SectionRow>
    </ContainerHeader>
  );
}
