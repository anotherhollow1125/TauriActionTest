import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import { WebviewWindow } from "@tauri-apps/api/window";

const webview = new WebviewWindow("TSSubWindw", { url: "sub.html" });
console.log(`${webview}`);
webview.once("tauri://created", function () {
  console.log("created");
});
webview.once("tauri://error", function (e) {
  console.log("error:", e);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
