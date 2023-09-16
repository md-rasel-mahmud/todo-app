//External Lib Import

import { Link } from "react-router-dom";
import { usePostLoginInfoMutation } from "../../redux/features/baseApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import { useForm } from "react-hook-form";

const Login = () => {
  const [setLoginInfo, { data: apiResponse, isSuccess, isLoading, isError }] =
    usePostLoginInfoMutation();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "demo@demo.com",
      password: "demo@demo",
    },
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
      return;
    }
  }, [navigate]);

  const submitForm = (data) => {
    setLoginInfo(data);
  };
  if (apiResponse || isSuccess) {
    localStorage.setItem("accessToken", apiResponse?.accessToken);
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex min-h-[70vh] gap-3 justify-center flex-col p-4 "
        onSubmit={handleSubmit(submitForm)}
        onReset={reset}
      >
        <h3 className="text-5xl text-center mb-2 font-bold">{"login here"}</h3>
        <hr />

        {isError && (
          <span className="text-red-500">Error: Something went wrong</span>
        )}

        <input
          className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
          type="email"
          placeholder={"email"}
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
          placeholder={"password"}
          {...register("password", {
            pattern: {
              value: /(?=.*[!#$%&?^*@~() "])/,
              message: "The password should be include special character",
            },
            minLength: {
              value: 8,
              message: "The password should be at list 8 character",
            },
            required: "This field is required",
          })}
        />
        {errors.password && (
          <span className="text-red-500 max-w-xs">
            {errors.password.message}
          </span>
        )}

        <input
          disabled={isLoading}
          className="border-[1px] border-red-100 bg-red-50 text-red-400 rounded font-semibold tracking-wider py-1 cursor-pointer hover:bg-red-100"
          type="submit"
          value={isLoading ? "login..." : "login"}
        />
        <hr />
        <p className="text-gray-500">
          {`Don't have an account?`}
          <Link
            className="text-cyan-700 hover:underline hover:text-orange-600"
            to="/auth/register"
          >
            {"register here"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
