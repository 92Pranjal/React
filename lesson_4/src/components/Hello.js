import React, { Component } from "react";

const Hello = () => {
    //with JSX
    // return(
    // <div>
    //     <h1>Hello Pranjal!!</h1>
    // </div>
    // );

    //without JSX
    return React.createElement('div', {id: 'Hello',className:'Dummyclass'},React.createElement('h1',null,'Hello Pranjal'))
}

export default Hello;