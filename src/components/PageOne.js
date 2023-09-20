import React from "react";

class PageOne extends React.Component{
    calculate = (a,b) => {
        return a+b;
    };
    render(){
        return(
            <>
            <h2>{this.props.title}</h2>
            <span>{this.props.description}</span>
            <h2>answer : {this.calculate(5,9)}</h2>
            <h2>answer2 : {this.calculate(this.props.a,this.props.b)}</h2>
            </>
        )
    }
}

export default PageOne;