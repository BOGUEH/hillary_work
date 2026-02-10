export const htmlSnippets = [
  {
    label: "html",
    insertText: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>$1</title>
  <style>
    $2
  </style>
</head>
<body>
  $3
  <script>
    $4
  </script>
</body>
</html>`,
    documentation: "HTML boilerplate",
  },
  {
    label: "html5",
    insertText: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>$1</title>
</head>
<body>
  $2
</body>
</html>`,
    documentation: "HTML5 boilerplate",
  },

  {
    label: "!",
    insertText: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>$1</title>
</head>
<body>
  $2
</body>
</html>`,
    documentation: "HTML5 boilerplate (VS Code style)",
  },

  {
    label: "a",
    insertText: '<a href="$1">$2</a>',
    documentation: "Anchor tag",
  },
  {
    label: "img",
    insertText: '<img src="$1" alt="$2" />',
    documentation: "Image tag",
  },
  {
    label: "button",
    insertText: '<button type="$1">$2</button>',
    documentation: "Button element",
  },
  {
    label: "section",
    insertText: "<section>\n  $1\n</section>",
    documentation: "Section wrapper",
  },
  {
    label: "card",
    insertText: '<div class="card">\n  <h2>$1</h2>\n  <p>$2</p>\n</div>',
    documentation: "Card layout block",
  },
  {
    label: "input",
    insertText: '<input type="$1" name="$2" placeholder="$3" />',
    documentation: "Input field",
  },
  {
    label: "form",
    insertText: '<form>\n  <label>$1</label>\n  <input type="$2" />\n</form>',
    documentation: "Form block",
  },
  {
    label: "ul",
    insertText: "<ul>\n  <li>$1</li>\n</ul>",
    documentation: "Unordered list",
  },
  {
    label: "container",
    insertText: '<div class="container">$1</div>',
    documentation: "Container div",
  },
   {
    label: "p",
    insertText: '<p class="p">$1</p>',
    documentation: "paragraph div",
  },

];

export const cssSnippets = [
  {
    label: "flex-center",
    insertText:
      "display: flex;\nalign-items: center;\njustify-content: center;",
    documentation: "Flex center",
  },
  {
    label: "grid-2",
    insertText: "display: grid;\ngrid-template-columns: repeat(2, 1fr);\n",
    documentation: "Two column grid",
  },
  {
    label: "card",
    insertText:
      "border-radius: 16px;\nbackground: #fff;\nbox-shadow: 0 20px 40px rgba(0,0,0,0.08);",
    documentation: "Card style",
  },
];

export const jsSnippets = [
  {
    label: "query",
    insertText: 'const $1 = document.querySelector("$2");',
    documentation: "querySelector",
  },
  {
    label: "click",
    insertText:
      'document.querySelector("$1").addEventListener("click", () => {\n  $2\n});',
    documentation: "Click listener",
  },
  {
    label: "toggle-class",
    insertText:
      'const el = document.querySelector("$1");\nel.classList.toggle("$2");',
    documentation: "Toggle class",
  },
];
