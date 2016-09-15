import React, { Component } from 'react';
import HelloWorld from './HelloWorld'
import AddGreeter from './AddGreeter'

class HelloWorldList extends Component {
	constructor(props) {
		super(props);	
		this.state = {names: ['jim', 'jam', 'jelly']};
		this.addGreeting = this.addGreeting.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
	}

	// methods
	render() {
		return (
			<div className="HelloWorldList">
				<AddGreeter addGreeting={this.addGreeting} />
				{this.renderGreeting()}
			</div>
		);
	}

	renderGreeting() {
		return this.state.names.map( name => (
			<HelloWorld textName={name}	key={name} removeGreeting={this.removeGreeting} />
		));
	}

	addGreeting(name) {
		this.setState({
			names: [...this.state.names, name]
		});
	}

	removeGreeting(removeName) {
		const filteredNames = this.state.names.filter(name => {
			return name !== removeName;
		});
		this.setState({
			names: filteredNames 
		});
	}
}

export default HelloWorldList;
