import { chromium } from "playwright";

const buildHtmlDocument = ({ html, css, js }) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${css ?? ""}</style>
  </head>
  <body>
    ${html ?? ""}
    <script>${js ?? ""}<\/script>
  </body>
</html>`;
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const markup = buildHtmlDocument(payload);

    const browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: 1200, height: 800 },
    });
    await page.setContent(markup, { waitUntil: "networkidle" });
    const buffer = await page.screenshot({ type: "png", fullPage: true });
    await browser.close();

    return Response.json({
      mimeType: "image/png",
      imageBase64: buffer.toString("base64"),
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to render preview image." },
      { status: 500 }
    );
  }
}
