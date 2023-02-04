import React, { useEffect } from "react";
import { Container } from "./styles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const selector = useSelector((state) => state);
  const user = selector.auth.currentUser;
  const funds = selector.funds.funds;
  const blog = selector.blog.blog;

  useEffect(() => {
    navigation.setOptions({ title: `Hello, ${user.firstName}` });
  }, []);

  return (
    <Container>
      <Header user={user} />
      <Main funds={funds} />
      <Footer blog={blog} />
    </Container>
  );
}
