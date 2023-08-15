import { Link } from "react-router-dom";
const Login = () => {
  return (
    <form className="flex min-h-[70vh] gap-3 justify-center flex-col p-4 ">
      <h3 className="text-5xl text-center mb-2 font-bold">Login Here</h3>
      <hr />

      <input
        className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
        type="email"
        placeholder="Email"
      />

      <input
        className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
        type="password"
        placeholder="password"
      />

      <input
        className="border-[1px] border-red-100 bg-red-50 text-red-400 rounded font-semibold tracking-wider py-1 cursor-pointer hover:bg-red-100"
        type="submit"
        value="login"
      />
      <hr />
      <p className="text-gray-500">
        Already have an account?
        <Link
          className="text-cyan-700 hover:underline hover:text-orange-600"
          to="/auth/register"
        >
          Register Here
        </Link>
      </p>
    </form>
  );
};

export default Login;