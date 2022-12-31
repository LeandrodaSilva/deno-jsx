/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import {renderSSR} from "https://deno.land/x/nano_jsx@v0.0.20/ssr.ts";
import App from "./App.jsx";
import {h} from "https://deno.land/x/nano_jsx@v0.0.20/core.ts";

export default renderSSR(<App />);
