import React from "react";
import sideBannner from "../assets/sidebanner.svg";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { SIGNUP_ROUTE } from "../constants/routes";
import Logo from "../components/Logo";
const Login = () => {
  return (
    <main className="flex min-h-screen">
      <section className="flex justify-center items-center w-full lg:w-1/2">
        <div className="h-[max-content] flex flex-col justify-center w-[48%] md:w-[65%]  gap-y-8 items-center md:items-start border border-neutral-100 rounded-[8px] p-[24px] md:p-0 md:border-0 bg-primary-gradient-login md:bg-none">
        <Logo/>
          <div>
            <h2 className="text-4xl font-medium text-neutral-900">
              Welcome to ShopKart
            </h2>
            <p className="mt-3 text-sm text-neutral-500 tablet:text-center md:text-left">
              Login to Your Account
            </p>
          </div>
          <LoginForm />
          <p className="text-sm text-neutral-400">
            Don't have any account?{" "}
            <Link to={SIGNUP_ROUTE} className="cursor-pointer text-neutral-600 underline">
              Register Now
            </Link>
          </p>
        </div>
      </section>
      <img
        src={sideBannner}
        alt="loginImg"
        className="hidden lg:block object-cover md:w-1/2"
      />
    </main>
  );
};

export default Login;
