import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("emailiis", email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-500 p-20 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="  border-2 border-emerald-500 text-xl py-3 px-3 rounded-full bg-transparent m-4 outline-none  placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" border-2 border-emerald-500 text-xl py-3 px-3 rounded-full bg-transparent outline-none  placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />

          <button className="mt-7 text-white  border-none bg-emerald-500 text-lg py-3 px-8 rounded-full  outline-none placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
