import React from "react";
import Header from "../components/Header";
import LoginHero from "../components/LoginHero";
import LoginForm from "../components/LoginForm";
import LoginSubscribe from "../components/LoginSubscribe";
import LoginQuoteFooter from "../components/LoginQuoteFooter";

export default function LoginPage() {
  return (
    <div>
      <Header />
      <LoginHero />
      <LoginForm />
      <LoginSubscribe />
      <LoginQuoteFooter />
    </div>
  );
}