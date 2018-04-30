import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Input from '../presentational/Input';

class FormContainer extends Component {
	constructor() {
		super();

		this.state = {
			title: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	render() {
		const { title } = this.state;

		return (
			<form id="article-form">
				<Input
					label="Form from ReactJS!"
					type="text"
					name="title"
					id="title"
					value={title}
					handleChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default FormContainer;

const wrapper = document.getElementById('form-root');
wrapper ? ReactDom.render(<FormContainer />, wrapper) : false;