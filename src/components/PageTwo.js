import React from "react";

class PageTwo extends React.Component{
    state = {
        counter : 10,
    }
    render(){
        return(
            <>
            <h1>Counter is : {this.state.counter}</h1>
            <button onClick={()=>{this.setState({counter: this.state.counter + 10})}}>ADD</button>
            <br>
            </br><button onClick={()=>{this.setState({counter: this.state.counter - 10})}}>SUB</button>
            </>
        )
    }
}

export default PageTwo;