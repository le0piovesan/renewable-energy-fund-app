import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Title, Bold, SectionRow } from "../styles";
import { ContainerMain, FundCard, FundGraph, DescriptionCard } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import defaultStyle from "../../../defaultStyle";
import { useNavigation } from "@react-navigation/native";

export default function Main({ funds }) {
  const navigation = useNavigation();
  return (
    <ContainerMain>
      <Title>Trending Funds</Title>

      <FlatList
        data={funds}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FundCard
            onPress={() => navigation.navigate("FundDetails", { item })}
          >
            <FundGraph source={item.graph} resizeMode="contain" />
            <DescriptionCard>
              <SectionRow>
                <MaterialIcons
                  name="attach-money"
                  size={30}
                  color={defaultStyle.brandSecondary}
                />
                <View>
                  <Title>{item.name}</Title>
                  <Bold
                    style={{
                      color: defaultStyle.brandValue,
                    }}
                  >
                    {item.value}
                  </Bold>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={14}
                  color="black"
                  style={{
                    marginLeft: 5,
                  }}
                />
              </SectionRow>
            </DescriptionCard>
          </FundCard>
        )}
        horizontal={true}
      />
    </ContainerMain>
  );
}
