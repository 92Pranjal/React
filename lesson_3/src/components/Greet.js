import React from "react";

// function Greet(){
//     return <h1>Hello Pranjal!!</h1>

// }

// This shows default export
// In this scenario, we can export the component as the named component or as MyComponent 
// like import MyComponent from "./component/Greet" 
// import Greet from "./component/Greet"

const Greet = () => <h1>Hello Pranjal!!</h1>

export default Greet;

// The following code snippet shows the named export 
// export const Greet = () => <h1>Hello Pranjal!!</h1>
// In this scenario, we need to export the component as the named component like 
// import {Greet} from "./component/Greet"
