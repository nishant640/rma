import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginHero from "../components/LoginHero";
import LoginForm from "../components/LoginForm";
import LoginSubscribe from "../components/LoginSubscribe";
import LoginQuoteFooter from "../components/LoginQuoteFooter";

export default function LoginPage() {
  return (
    <div>
      <LoginHeader />
      <LoginHero />
      <LoginForm />
      <LoginSubscribe />
      <LoginQuoteFooter />
    </div>
  );
}