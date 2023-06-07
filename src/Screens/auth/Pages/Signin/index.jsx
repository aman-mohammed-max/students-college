import Button from "@mui/base/Button";
import Input from "@mui/base/Input";
import Box from "@mui/system/Box";
import React from "react";
import Peep from "react-peeps";

const error = null;

export default function Auth() {
  return (
    <Box className="flex flex-1 flex-col justify-evenly lg:justify-center md:justify-center h-screen px-6 py-12 lg:px-8 bg-gradient-to-bl">
      <Box className="sm:mx-auto sm:w-full sm:max-w-sm justify-center items-center">
        <Box className="bg-yellow-500 m-auto rounded-full overflow-hidden border-4 aspect-square border-black border-solid h-64 md:h-72 lg:h-72">
          <Peep
            accessory="GlassRoundThick"
            body="Coffee"
            face="Cute"
            hair="Beanie"
            strokeColor="#000"
            backgroundColor="#fff"
          />
        </Box>
      </Box>

      <Box className="sm:mx-auto sm:w-full sm:max-w-sm justify-self-end">
        <h2 className=" md:mt-10 lg:mt-10 text-center text-2xl font-bold  tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <Box className="mb-2 mt-5">
          <Box className="outline outline-2 outline-zinc-400 my-2 rounded-xl divide-y">
            <Input
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              slotProps={{
                input: {
                  className:
                    "w-full h-full focus:border-none focus:outline-none px-4",
                },
                root: {
                  className: "w-full h-14 justify-center items-center",
                },
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              required
              slotProps={{
                input: {
                  className:
                    "w-full h-full focus:border-none focus:outline-none px-4",
                },
                root: {
                  className: "w-full h-14 justify-center items-center",
                },
              }}
            />
          </Box>
          <Box className="flex items-center justify-between px-2">
            <label
              htmlFor="password"
              className="block text-sm text-red-400	font-medium leading-6"
            >
              {!error ? "    " : error}
            </label>
            <Box className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </Box>
          </Box>
        </Box>

        <Button
          type="button"
          placeholder="login"
          children={"Sign in"}
          className="w-full h-10 my-2 md:my-3 lg:my-3 bg-sky-500 hover:bg-sky-400 rounded-xl justify-center items-center text-sm font-semibold leading-6 text-white shadow-sm"
        />
        <p class="md:mt-2 lg:mt-2 sm:mt-4 text-center text-xs text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create an account
          </a>
        </p>
      </Box>
    </Box>
  );
}
