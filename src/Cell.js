import React, { Component } from 'react';

export default class Cell extends Component {
    constructor() {
        super()
        this.state = {
            color: this.props.color
        }
    }

    changeColor = () => {
        // console.log(this.state)
        this.setState({
            color: '#333'
        })
    }

    
    render() {
        
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
        )
    }
}