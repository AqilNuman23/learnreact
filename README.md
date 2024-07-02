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

## Functional Component

1. Create `function.js` file in `src` folder
2. Create a function

```
function Test() {
  return <h1>Hello World</h1>;
}
```

2. export the function:
   ```
   export default function
   ```
3. import the function in `App.js` file:

   ```
   import anyname from './function.js'
   ```

4. render the function in `App.js`
   ```
   <anyname />
   ```

## Class Component

- Basically ES6 classes
- Can receive (props) and return them into html(jsx)

## Take note

- React create element

```
return React.createElement('tagName', 'object', 'tagValue')
```

- props use in functional component

```
const Greet = (props) => {
  console.log(props);
  return <h1>Hello {props.name}</h1>;
};
```

```
return (
    <div className="App">
      <Greet name="dog" />
      <Greet name="cat" />
    </div>
)
```

- props children

separate them into multiple lines in `return`

```
return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
```

```
<div className="App">
  <Greet name="dog">
    <p>This is children props</p>
  </Greet>
</div>
```

- props use in class component using reserve `this` keyword

```
return <h1>Welcome {this.props.name}</h1>;
```

- state use in class component

```
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
```
