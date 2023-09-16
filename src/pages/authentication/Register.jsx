import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { usePostSignUpInfoMutation } from "../../redux/features/baseApi";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [setSignUpData, { data: signUpResponse, isLoading }] =
    usePostSignUpInfoMutation();

  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const validatePass = () => {
    if (pass !== confirmPass) {
      setError("passwordMatch", {
        type: "manual",
        message: "Password doesn't match",
      });
    } else {
      clearErrors("passwordMatch");
    }
  };
  useEffect(() => {
    validatePass();
  }, [pass, confirmPass, setError]);

  const navigate = useNavigate();
  const submitForm = (data) => {
    if (errors.length === undefined) {
      setSignUpData(data);
    }
  };
  if (signUpResponse) {
    localStorage.setItem("accessToken", signUpResponse?.data?.accessToken);
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <form
          className="flex min-h-[70vh] gap-3 justify-center flex-col p-4 "
          onSubmit={handleSubmit(submitForm)}
        >
          <h3 className="text-5xl text-center mb-2 font-bold">Sign Up here</h3>
          <hr />
          {/* {error && (
            <span className="text-red-500">
              {error?.message || "something went wrong"}
            </span>
          )} */}
          <input
            className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
            type="text"
            placeholder="name"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <input
            className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
            type="text"
            placeholder="email"
            {...register("email", {
              pattern: {
                value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                message: "invalid email",
              },
              required: "This field is required",
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <input
            className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
            type="password"
            placeholder="new password"
            {...register("password", {
              pattern: {
                value: /(?=.*[!#$%&?^*@~() "])/,
                message: "The password should be include special character",
              },
              minLength: {
                minLength: 8,
                message: "The password should be at list 8 character",
              },
              required: "This field is required",
            })}
            onChange={(e) => setPass(e.target.value)}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          <input
            className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword", {
              required: "This field is required",
            })}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
          {errors.passwordMatch && (
            <span className="text-red-500">{errors.passwordMatch.message}</span>
          )}

          <input
            className="border-[1px] border-red-100 bg-red-50 text-red-400 rounded font-semibold tracking-wider py-1 cursor-pointer hover:bg-red-100"
            type="submit"
            value={isLoading ? "register..." : "register"}
          />
          <hr />
          <p className="text-gray-500">
            already have an account?
            <Link
              className="text-cyan-700 hover:underline hover:text-orange-600"
              to="/auth/login"
            >
              login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
