import html from "./index.jsx";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
console.log("File server running on http://localhost:8000/");

async function handler(req: any) {
  const url = new URL(req.url);
  const filepath = decodeURIComponent(url.pathname);

  console.log(`Request for ${filepath}`);

  if (filepath === "/") {
    return new Response(html, {
      headers: {
        "content-type": "text/html",
      },
    });
  }

  let file;
  try {
    file = await Deno.open("./public" + filepath, { read: true });
  } catch {
    // If the file cannot be opened, return a "404 Not Found" response
    return new Response("404 Not Found", { status: 404 });
  }

  return new Response(file.readable);
}

await serve(handler);
