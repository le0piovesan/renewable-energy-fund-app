import React, { useState } from "react";
import {
  Container,
  Title,
  ContainerForm,
  StyledButton,
  StyledTextButton,
  SubTitle,
  StyledOptionTextButton,
} from "../styles";
import { View, Text, TouchableOpacity } from "react-native";

import ScrollForm from "../../../components/ScrollForm";

import { Formik } from "formik";
import * as yup from "yup";
import TextInput from "../../../components/TextInput";
import Checkbox from "expo-checkbox";
import defaultStyle from "../../../defaultStyle";

import { useDispatch } from "react-redux";
import { Auth } from "../../../redux/auth";

const registerSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  termsAgreed: yup.boolean().required(),
});

export default function Register({ navigation }) {
  const [enableButton, setEnableButton] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispach = useDispatch();

  const createUser = (user) => {
    dispach(Auth.addUser(user));
  };

  return (
    <Container>
      <ScrollForm scrollHidden>
        <Title>Create your account</Title>
        <SubTitle>And earn $100 ready to invest</SubTitle>
        <ContainerForm>
          <Formik
            validationSchema={registerSchema}
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
                await createUser({
                  firstName,
                  lastName,
                  email,
                  password,
                  termsAgreed,
                  account: 100,
                });

                navigation.navigate("Login");
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <TextInput
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  error={touched.firstName && errors.firstName}
                  label={"First Name"}
                />

                <TextInput
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  error={touched.lastName && errors.lastName}
                  label={"Last Name"}
                />

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

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Checkbox
                    color={defaultStyle.brandPrimary}
                    style={{
                      marginRight: 10,
                      borderRadius: 20,
                    }}
                    value={values.termsAgreed}
                    onValueChange={(nextValue) => {
                      setFieldValue("termsAgreed", nextValue);
                      setEnableButton(nextValue);
                    }}
                  />

                  <Text>
                    I am over 18 years old and I have read and agree to the
                    Terms of Service and Privacy Policy.
                  </Text>
                </View>

                <StyledButton onPress={handleSubmit} disabled={!enableButton}>
                  <StyledTextButton>Create Account</StyledTextButton>
                </StyledButton>
              </>
            )}
          </Formik>
        </ContainerForm>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <StyledOptionTextButton>
            Or log in{" "}
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
