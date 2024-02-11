"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Posts:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <>
        <p>Welcome {session?.user?.name}. Signed In As</p>
        <p>{session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    </>
  );
}
