# Prerequisites

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [JavaScript](https://www.w3schools.com/js/)
- [ES6](https://www.w3schools.com/js/js_2024.asp)
  - let , const, arrow functions, template literals, destructuring, spread operator, default parameters, rest and spread operators, object literals
- [React](https://reactjs.org/)

# How to create

Using npx:
`npx create-react-app <project_name>`

Using npm:
`npm install create-react-app -g`
`create-react-app<project_name>`

## Functional component

1. Create `function.js` file in `src` folder
2. Create a function

```
function Test() {
  return <h1>Hello World</h1>;
}
```

2. export the function:
   `export default Test`
3. import the function in `App.js` file:
   `import Test from './function.js'`
4. render the function in `App.js`
   `<Test />`
