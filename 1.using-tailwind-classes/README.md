# Tailwindcss framework is a PostCSS plugin

# Setup

1. Create a directory then:

`npm init -y`

2. Install these dependencies:

`npm install tailwindcss postcss-cli autoprefixer`

3. `npx tailwind init` (It creates an empty **tailwind.config.js** file in the project root):

```
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}

```

4. Create a **postcss.config.js** in the root of the project:

```
module.exports = {
  plugins: [
      require("tailwindcss"),
      require("autoprefixer")
  ]
};
```

5. Create a CSS file that runs through the above process: `css/tailwind.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Create a script to process the CSS through our list of PostCSS plugins:

```json
"scripts": {
    "build": "postcss css/tailwind.css -o public/build/tailwind.css"
},
```

7. Run the command: `npm run build`; A new CSS file is generated that has been processed through the PostCSS.

8. Add an HTML file in `public/index.html` and use the tailwind classes:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Tailwindcss</title>
    <link rel="stylesheet" href="./build/tailwind.css" />
  </head>
  <body>
    <h1 class="text-4xl font-bold text-center text-blue-400">Hello World!</h1>
  </body>
</html>
```

[Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for intelligent auto-completion in VS Code
