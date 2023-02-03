import React, { useState, useRef } from "react";
import {
  Container,
  Title,
  ContainerForm,
  StyledButton,
  StyledTextButton,
  SubTitle,
  StyledOptionTextButton,
} from "../styles";
import { Text, TouchableOpacity } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../components/TextInput";
import ScrollForm from "../../../components/ScrollForm";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Auth } from "../../../redux/auth";
import defaultStyle from "../../../defaultStyle";

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Login({ navigation }) {
  const formikRef = useRef();
  const [wrongUser, setWrongUser] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispach = useDispatch();

  const users = useSelector((state) => state.auth.users);

  const logIn = (email, password) => {
    const userAuth = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userAuth) dispach(Auth.logIn(userAuth));
    else setWrongUser(true);
  };

  return (
    <Container>
      <ScrollForm scrollHidden>
        <Title>Welcome!</Title>
        <SubTitle>Already have an account?</SubTitle>
        <ContainerForm>
          <Formik
            innerRef={formikRef}
            validationSchema={loginSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async ({ email, password }) => {
              try {
                await logIn(email, password);
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
              <>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={touched.email && errors.email}
                  label={"E-mail"}
                />

                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={touched.password && errors.password}
                  label={"Password"}
                  secureTextEntry={passwordVisible ? false : true}
                  passwordVisible={passwordVisible}
                  setPasswordVisible={setPasswordVisible}
                />

                <StyledButton onPress={handleSubmit}>
                  <StyledTextButton>Login</StyledTextButton>
                </StyledButton>
                {wrongUser && (
                  <Text style={{ color: "red" }}>User not found</Text>
                )}
              </>
            )}
          </Formik>
        </ContainerForm>

        <TouchableOpacity
          onPress={() => {
            setWrongUser(false);
            navigation.navigate("Register");
            formikRef.current.resetForm();
          }}
        >
          <StyledOptionTextButton>
            Or sign up{" "}
            <Text
              style={{ fontWeight: "bold", color: defaultStyle.brandSecondary }}
            >
              here
            </Text>
          </StyledOptionTextButton>
        </TouchableOpacity>
      </ScrollForm>
    </Container>
  );
}
