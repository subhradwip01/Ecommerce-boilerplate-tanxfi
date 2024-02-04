import React from "react";
import SignupForm from "../components/SignupForm";
import sideBannner from "../assets/sidebanner.svg";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../constants/routes";
import Logo from "../components/Logo";
function Signup () {
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
              Register Now
            </p>
          </div>
          <SignupForm />
          <p className="text-sm text-neutral-400">
            Already have an account?{" "}
            <Link to={LOGIN_ROUTE} className="cursor-pointer text-black underline">
              Login
            </Link>
          </p>
        </div>
      </section>
      <img
        src={sideBannner}
        alt="loginImg"
        className="hidden lg:block object-cover w-1/2"
      />
    </main>
  );
};

export default Signup;
