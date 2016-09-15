import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
	constructor(props) {
		super(props);
		this.state = {name: ''};
		this.handleChange = this.handleChange.bind(this);
		this.addGreeting = this.addGreeting.bind(this);
	}

	// methods
	render() {
		return (
			<div className="AddGreeter">
				<input type="text" onChange={this.handleChange} value={this.state.name} />&nbsp;&nbsp;
				<button onClick={this.addGreeting}>Add Me</button>
			</div>
		);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	addGreeting() {
		this.props.addGreeting(this.state.name);
		this.setState({
			name: ''
		});
	}
}

export default AddGreeter;