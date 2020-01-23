import React, { Component } from 'react';

export class Cell extends Component {
	constructor(props) {
		super(props);
		console.log(props.value);
		this.state = {
			color: props.value
		};
	}

	handleClick = () => {
		this.setState({ color: '#333' });
	};

	render() {
		return (
			<div
				className='cell'
				style={{ backgroundColor: this.state.color }}
				onClick={this.handleClick}
			></div>
		);
	}
}

export default Cell;
