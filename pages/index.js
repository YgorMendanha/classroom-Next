import Link from "next/link";
import { useContext } from "react";
import { Context } from "../context";

export default function Home({ reponse }) {
  const { logOut, userName } = useContext(Context);

  return (
    <div>
      {userName ? (
        <>
          <p>User: {userName}</p>
          <p
            type="button"
            onClick={() => {
              logOut();
            }}
          >
            Exit
          </p>
        </>
      ) : (
        <Link href={`/login`}> Login </Link>
      )}
      {reponse.map((e) => {
        return (
          <div key={e.id}>
            <h1>{e.title}</h1>
            <Link href={`/${e.id}`}> Details </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json);

  return {
    props: { reponse },
  };
}
