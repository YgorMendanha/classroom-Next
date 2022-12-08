import Link from "next/link";

export default function Home({ reponse }) {
  return (
    <div>
      {reponse.map((e) => {
        return (
          <>
            <h1>{e.title}</h1>
            <Link href={`/${e.id}`}> Details </Link>
          </>
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
