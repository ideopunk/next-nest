import fetcher from "./fetcher";
import { GreetingResDto } from "lib";

export async function getGreeting(name: string) {
  const res = await fetcher<GreetingResDto>("/hi/" + name);

  if ("message" in res) throw new Error(res.message);

  return res.greeting;
}
