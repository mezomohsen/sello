import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter : 0
    }

    increament = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decreament= () =>{
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
            <div className="pt-5">
                <div className="pt-5 pb-5 text-center">
                    <p>counter = {this.state.counter}</p>
                    <button className="btn btn-primary m-1" onClick={this.increament}>plus</button>
                    <button className="btn btn-primary m-1" onClick={this.decreament}>mynus</button>
                </div>
            </div>
        )
    }
}
export default Counter;