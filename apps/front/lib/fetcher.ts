import { domain } from "./consts";

export default async function djFetch<T>(
  subdirectory: string,
  method?: "POST" | "GET" | "PATCH" | "PUT" | "DELETE",
  body?: any
): Promise<{ message: string } | T> {
  const url = `${domain}/api/v1${subdirectory}`;
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: method ? method : "GET",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },

      body: JSON.stringify(body),
    });

    const type = response.headers.get("content-type");
    if (typeof type === "string" && type.includes("text")) {
      const rt = await response.text();
      throw rt;
    }

    const rj = await response.json();

    return rj;
  } catch (e) {
    if (typeof e === "string") {
      return { message: e };
    }
    if (e instanceof Error) {
      return { message: e.message };
    }

    return { message: JSON.stringify(e) };
  }
}
