import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import html from "./index.jsx";
function handler(req) {
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

await serve(handler);
