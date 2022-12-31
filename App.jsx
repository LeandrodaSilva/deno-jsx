/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import {h} from "https://deno.land/x/nano_jsx@v0.0.20/core.ts";

export default function App() {
	return (
		<html lang="pt">
		<head>
			<meta charSet="utf-8"></meta>
			<title></title>
			<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		</head>
		<body>
		<a-scene id="scene" vr-mode-ui="enabled: false">
			<a-assets>
			</a-assets>
			<a-box id="box" material="color: #0055ff; shader: standard; blending: none" position="0.06297 0.61149 -3"
			       rotation="0 86.04279096818112 0" color="#4CC3D9"></a-box>
			<a-plane id="plane" position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
			<a-sky id="sky" material="color: #91e3f8; flatShading: false; fog: true; transparent: false"
			       color="#ECECEC"></a-sky>
		</a-scene>
		</body>
		</html>
	);
}
