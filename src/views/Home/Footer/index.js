import React from "react";
import { Text, View, FlatList, TouchableOpacity, Linking } from "react-native";
import { Title, Bold, SectionRow } from "../styles";
import { ContainerFooter, BlogCard } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import defaultStyle from "../../../defaultStyle";

export default function Footer({ blog }) {
  return (
    <ContainerFooter>
      <Title>Our Blog</Title>
      <Text>Take a look at our latest posts:</Text>
      <FlatList
        data={blog}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.linkTo)}>
            <BlogCard colors={[defaultStyle.brandSecondary, "transparent"]}>
              <SectionRow>
                <View>
                  <Bold>{item.title}</Bold>
                  <Text>{item.description}</Text>
                </View>
                <MaterialIcons name="read-more" size={35} color="#fff" />
              </SectionRow>
            </BlogCard>
          </TouchableOpacity>
        )}
      />
    </ContainerFooter>
  );
}
