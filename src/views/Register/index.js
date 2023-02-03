import React from "react";
import {
  Container,
  Title,
  ContainerForm,
  StyledButton,
  StyledTextButton,
  SubTitle,
  StyledSignUpTextButton,
} from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../components/TextInput";
import Checkbox from "expo-checkbox";
import defaultStyle from "../../defaultStyle";
// import { useDispatch } from "react-redux";
// import { Auth } from "../../redux/auth";

// const user = {
//   name: "Leonardo",
//   lastName: "Piovesan",
//   email: "leopvsn@gmail.com",
//   password: "123",
//   termsAgreed: true,
// };

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Register({ navigation }) {
  //   const dispach = useDispatch();

  //   const login = () => {
  //     dispach(Auth.addUser(user));
  //     dispach(Auth.authUser({ authenticated: true }));
  //   };

  return (
    <Container>
      <Title>Create your account</Title>
      <SubTitle>Quick and easy sign-up</SubTitle>
      <ContainerForm>
        <Formik
          validationSchema={loginSchema}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            termsAgreed: false,
          }}
          onSubmit={async ({
            firstName,
            lastName,
            email,
            password,
            termsAgreed,
          }) => {
            try {
              //
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                error={errors.firstName}
                label={"First Name"}
              />
              {touched.firstName && errors.firstName ? (
                <Text>* Required</Text>
              ) : null}

              <TextInput
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                error={errors.lastName}
                label={"Last Name"}
              />
              {touched.lastName && errors.lastName ? (
                <Text>* Required</Text>
              ) : null}

              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                error={errors.email}
                label={"E-mail"}
              />
              {touched.email && errors.email ? <Text>* Required</Text> : null}

              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={errors.password}
                label={"Password"}
              />
              {touched.password && errors.password ? (
                <Text>* Required</Text>
              ) : null}

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text>Agreed?</Text>

                <Checkbox
                  color={defaultStyle.brandPrimary}
                  style={{
                    marginLeft: 5,
                    borderRadius: 20,
                  }}
                  value={values.termsAgreed}
                  onValueChange={(nextValue) =>
                    setFieldValue("termsAgreed", nextValue)
                  }
                />
              </View>
            </View>
          )}
        </Formik>
      </ContainerForm>
      <StyledButton>
        <StyledTextButton>Create Account</StyledTextButton>
      </StyledButton>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <StyledSignUpTextButton>
          Or log in <Text style={{ fontWeight: "bold" }}>here</Text>
        </StyledSignUpTextButton>
      </TouchableOpacity>
    </Container>
  );
}
