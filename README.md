# Atask Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure
```
my-react-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── molecules/
│   │   │   ├── SearchBox/
│   │   │   │   ├── SearchBox.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── organisms/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── templates/
│   │   │   ├── Layout/
│   │   │   │   ├── Layout.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── pages/
│   │       ├── Home/
│   │       │   ├── Home.tsx
│   │       │   └── index.ts
│   │       ├── About/
│   │       │   ├── About.tsx
│   │       │   └── index.ts
│   │       ├── NotFound/
│   │       │   ├── NotFound.tsx
│   │       │   └── index.ts
│   │       └── index.ts
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── index.ts
│   ├── store/
│   │   ├── slices/
│   │   │   ├── appSlice.ts
│   │   │   └── index.ts
│   │   ├── store.ts
│   │   └── index.ts
│   ├── services/
│   │   ├── api/
│   │   │   ├── baseApi.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── index.ts
│   ├── types/
│   │   ├── common.ts
│   │   └── index.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── index.css
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.