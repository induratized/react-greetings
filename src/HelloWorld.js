import React, { Component } from 'react';
import './HelloWorld.css'

class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = {greeting: 'Hello'};
		this.japanify = this.japanify.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
	}

	render() {
		return (
			<div>
				<div className="HelloWorld">{this.state.greeting} {this.props.textName}<br />
					<button onClick={this.japanify}>Japanify</button>
					<button onClick={this.removeGreeting}>Remove Me</button>
				</div>
			</div>
		);
	}

	japanify()	{
		this.setState({
			greeting: 'Konnichiwa' 
		});
	}

	removeGreeting() {
		this.props.removeGreeting(this.props.textName);
	}
}

// const HelloWorld = (props) => {
// 	return (
// 		<div className="HelloWorld">{props.textName}</div>
// 	);
// };


export default HelloWorld;