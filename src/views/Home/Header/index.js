import React from "react";
import { Text, View } from "react-native";
import { ContainerHeader, Title, Bold, SectionRow, Income } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import defaultStyle from "../../../defaultStyle";

export default function Header({ user }) {
  return (
    <ContainerHeader>
      <SectionRow>
        <Ionicons name="person-circle-outline" size={35} color="black" />
        <Title>
          Hello,
          <Bold> {user.firstName}</Bold>
        </Title>
        <Ionicons name="settings-outline" size={32} color="black" />
      </SectionRow>

      <SectionRow>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Account balance{"\n"}
          <Bold>${user.account}</Bold>
        </Text>
        <Income>
          <Text>last 24h</Text>
          <SectionRow>
            <Ionicons
              name="arrow-up-circle"
              size={20}
              color={defaultStyle.brandPrimary}
            />
            <Text style={{ color: defaultStyle.brandPrimary }}>0%</Text>
          </SectionRow>
        </Income>
      </SectionRow>
    </ContainerHeader>
  );
}
