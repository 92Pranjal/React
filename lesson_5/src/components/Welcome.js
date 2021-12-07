import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return( 
        <h1>SuperHero: {this.props.name}  
        wife: {this.props.wife}</h1>)
    }
}

export default Welcome;