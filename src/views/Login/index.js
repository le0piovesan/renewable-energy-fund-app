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
import { useDispatch } from "react-redux";
import { Auth } from "../../redux/auth";

const mockuser = {
  name: "Leonardo",
  lastName: "Piovesan",
  email: "mockusertest@email.com",
  password: "123",
  termsAgreed: true,
};

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Login({ navigation }) {
  const dispach = useDispatch();

  const login = () => {
    dispach(Auth.addUser(mockuser));
    dispach(Auth.authUser({ authenticated: true }));
  };

  return (
    <Container>
      <Title>Welcome!</Title>
      <SubTitle>Already have an account?</SubTitle>
      <ContainerForm>
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={async ({ email, password }) => {
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
            </View>
          )}
        </Formik>
      </ContainerForm>
      <StyledButton onPress={login}>
        <StyledTextButton>Login</StyledTextButton>
      </StyledButton>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <StyledSignUpTextButton>
          Or sign up <Text style={{ fontWeight: "bold" }}>here</Text>
        </StyledSignUpTextButton>
      </TouchableOpacity>
    </Container>
  );
}
