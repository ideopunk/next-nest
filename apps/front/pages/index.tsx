import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { getGreeting } from "../lib/req";

export default function Home() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function fn() {
      const newMessage = await getGreeting(name);
      setMessage(newMessage);
    }

    fn();
  }, [name]);

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-red-300 to-pink-200 flex justify-center items-center">
      <NextSeo
        title="CNR APP"
        description="CNR APP description"
        openGraph={{ title: "CNR APP", description: "CNR APP description" }}
      />

      <main className="z-10">
        <p className="text-2xl">What is your name?</p>
        <input
          className="my-4 p-2 text-xl focus:scale-105 outline-none transition-all"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-2xl">{message}</p>
      </main>
    </div>
  );
}
