import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { Context } from "../context";

export default function LoginPage() {
  const [name, setName] = useState();
  const { login, userName } = useContext(Context);
  const router = useRouter();

  userName && router.push("/");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          login(name);
        }}
      >
        Login
      </button>
    </>
  );
}
