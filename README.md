Calculator
==========

## Get started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

From project directory, run with
`npm start`

Or build streamlined version with
`npm run build`

For more info, checkout the [React documentation](https://reactjs.org/docs/getting-started.html) on building/deploying apps here:

## About Calculator

Calculator runs from 3 components:
> 1) Buttons
> 2) Screen
> 3) App

Each can be found as a *.js file in src/

### Buttons Component

The Buttons component (Buttons.js) creates the clickable elements (numberic and operator alike) from an object to save on html markup. 

Each passes a value and a type back to the App component which processes the inputs.
The type of the button also effects the class name of that element, and thereby the styling.
```

## Example button:
{
    type: 'number',
    id: 'six',
    value: '6'
}

## Passed back to App.js with:
onClick={() => this.props.handleClick(button.value, button.type)}

```

### Screen Component

The screen function's only job is to format state.currentValue and state.formula into HTML away from the App component.

### App Component

#### Methods:

> 1) Constructor
> 2) handleClick
> 3) handleNumber
> 4) handleOperator
> 5) clearAll
> 6) calculate
> 7) render

##### 1. Constructor

