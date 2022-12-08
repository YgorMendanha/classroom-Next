import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostDetails({ reponse }) {
  return (
    <>
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
