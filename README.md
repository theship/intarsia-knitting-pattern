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
(Thanks for sharing about that listDifferent switch, [Spencer Miskoviak](https://skovy.dev), [Scovy](https://github.com/skovy), he's no longer on [Medium](https://medium.com/rubber-ducking/generating-typescript-definitions-for-css-modules-using-sass-461e33623ec2))
### Added react-bootstrap && Material UI core
```

// >> yarn add react-bootstrap 

// >> yarn add @material-ui/core
```


### Added (redux and) unstated-next for state management

```
// >> yarn add redux
// >> yarn add react-redux
// >> yarn add @types/react-redux
// >> yarn add prop-types-extra
// >> yarn add unstated-next

```
## Added uuid

```
// >> yarn add uuid
```

https://www.npmjs.com/package/uuid

### Added react-color for Sketcher style color picker

[React Color](http://casesandberg.github.io/react-color/)


A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more


