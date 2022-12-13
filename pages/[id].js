import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";

export default function PostDetails({ reponse }) {
  const { logOut, userName } = useContext(Context);

  return (
    <>
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
      <Link href={"/"}>Back</Link>
      <h1>{reponse.title}</h1>
      <h1>{reponse.body}</h1>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
    .then((response) => response.json())
    .then((json) => json);

  return {
    props: { reponse },
  };
}
