import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { Container, SubTitle, Title } from "./styles";
import { useDispatch } from "react-redux";
import { Auth } from "../../redux/auth";

export default function Portfolio({ navigation }) {
  const dispach = useDispatch();

  const handleLogOut = () => {
    Alert.alert(
      "ReNew Funds",
      "Do you really want to leave?",
      [
        {
          text: "Yes",
          onPress: async () => {
            try {
              await dispach(Auth.logOut());
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          text: "Cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      <Title>Here you can see statics about your progress</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum
        consectetur nisi ac elementum. Mauris congue elementum ullamcorper.
        Nulla vitae odio et leo blandit ornare eget sodales neque. Praesent
        faucibus sem enim, sed dapibus ligula volutpat et. Aenean elementum
        tempus condimentum. Praesent tristique ante eget erat accumsan, eget
        sollicitudin dolor pharetra. Quisque sed lacus quis urna semper
        fringilla in sed diam. Vestibulum vitae nisi ipsum.
      </SubTitle>
      <TouchableOpacity
        style={{ marginTop: "20%" }}
        onPress={() => handleLogOut()}
      >
        <Title>Log Out</Title>
      </TouchableOpacity>
    </Container>
  );
}
