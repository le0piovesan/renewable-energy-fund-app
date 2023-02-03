import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const selector = useSelector((state) => state);
  const user = selector.auth.currentUser;
  console.log(user);

  return (
    <>
      <Text>hellou {user.firstName}</Text>
    </>
  );
}
