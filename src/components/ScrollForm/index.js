import React from "react";
import { ScrollView, SafeAreaView } from "react-native";

export default ScrollForm = ({ scrollHidden, children }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={scrollHidden ? false : true}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
      }}
      keyboardShouldPersistTaps={"handled"}
    >
      {children}
    </ScrollView>
  );
};
