## Created with create-reate-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the TypeScript template:

```
// >> yarn create react-app intarsia-knitting-pattern --template typescript
// >> cd intarsia-knitting-pattern

// >> yarn start
```
(Ctrl-C to stop)
### SASS was added
```
// >> yarn add sass
// >> yarn add @types/sass
```
Updated script to add a sass watch:

```
  "scripts": {
    "sasswatch": "sass src/styles/scss:src/styles/css --watch",
    "start": "sasswatch && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
Added types for CSS:

```
// >> npm install node-sass
// >> yarn add -D typed-scss-modules
// >> yarn tsm src/
```
To check for differences:

```
yarn tsm src/ --listDifferent
```
(Thanks for sharing about that listDifferent switch, [Spencer Miskoviak](https://skovy.dev), [Scovy](https://github.com/skovy))

### Added react-bootstrap

yarn add react-bootstrap 

