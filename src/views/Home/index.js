import React from "react";
import { Text, View } from "react-native";
import {
  Container,
  Bold,
  SectionRow,
  StyledButton,
  StyledTextButton,
} from "./styles";
import Header from "./Header";
import Main from "./Main";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const selector = useSelector((state) => state);
  const user = selector.auth.currentUser;
  console.log(user);

  return (
    <Container>
      <Header user={user} />
      <Main user={user} />
    </Container>
  );
}
