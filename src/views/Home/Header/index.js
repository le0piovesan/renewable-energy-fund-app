import React from "react";
import { Text, View } from "react-native";
import { Title, Bold, SectionRow } from "../styles";
import { ContainerHeader, Wallet } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import defaultStyle from "../../../defaultStyle";

export default function Header({ user }) {
  return (
    <ContainerHeader>
      <SectionRow>
        <View>
          <Ionicons
            name="person-circle-outline"
            size={35}
            color={defaultStyle.brandGray}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
          }}
        >
          Wallet{"\n"}
          <Bold style={{ color: defaultStyle.brandPrimary }}>
            ${user.account}
          </Bold>
        </Text>

        <View>
          <Text>Profit in{"\n"}last 24h</Text>
          <SectionRow>
            <Ionicons
              name="arrow-up-circle"
              size={20}
              color={defaultStyle.brandPrimary}
            />
            <Bold style={{ color: defaultStyle.brandPrimary }}>0%</Bold>
          </SectionRow>
        </View>
        <Ionicons
          name="settings-outline"
          size={32}
          color={defaultStyle.brandGray}
        />
      </SectionRow>
    </ContainerHeader>
  );
}
