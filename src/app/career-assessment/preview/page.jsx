"use client";

import { useEffect } from "react";

const STORAGE_KEY = "career-assessment-preview";

const fallbackCode = {
  html: "<main><h1>No preview data found.</h1></main>",
  css: "body { font-family: Arial, sans-serif; padding: 32px; }",
  js: "",
};

const buildHtmlDocument = ({ html, css, js }) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${css}</style>
  </head>
  <body>
    ${html}
    <script>${js}<\/script>
    <script>
      (function () {
        const key = "${STORAGE_KEY}";
        window.addEventListener("storage", function (event) {
          if (event.key === key) {
            window.location.reload();
          }
        });
      })();
    <\/script>
  </body>
</html>`;
};

export default function LivePreviewPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let code = fallbackCode;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        code = JSON.parse(stored);
      } catch (error) {
        code = fallbackCode;
      }
    }

    const markup = buildHtmlDocument(code);
    document.open();
    document.write(markup);
    document.close();
  }, []);

  return null;
}
