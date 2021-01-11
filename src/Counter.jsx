import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state= {
        count: 0
        }
    }
    increase(){
        this.setState({count: this.state.count+1})
    }
    decrease(){
        if(this.state.count === 0) {
            return alert("Error")
        }
        this.setState ({count: this.state.count - 1})
    }
    render(){
        return(
            <div>
                <button class="button" onClick={()=> this.increase()}>Increase</button>
                <button class="button" onClick={()=>this.decrease()}>Decrease</button>
                <h1>Number: {this.state.count}</h1>
            </div>
        )
    }
   
}

export default Counter