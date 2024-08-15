1) Created React App
npx create-react-app My-Netflix

2) Configured Tailwind CSS
- Run this in terminal
npm install -D tailwindcss
npx tailwindcss init

- Add this in Tailwind.config.js
content: ["./src/**/*.{html,js}"]

- Add this in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


Features

3) Login/SignIn
    - SignIn/ Signup form
    - redirect to browse page
  