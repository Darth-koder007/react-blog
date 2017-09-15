import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {
	renderField(field) {

		const { meta: { touched, error } } = field;
		const className = `${touched && error ? 'invalid' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					type="text"
					{...field.input}
				/>
				<div className="error-msg">
					{touched ?  error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		console.log("values", values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title For Post"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit">Save</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	// Validate the inputs from 'values'
	if (!values.title) {
		errors.title = "Enter a title"; 
	}

	if (!values.categories) {
		errors.categories = "Enter some categories"; 
	}

	if (!values.content) {
		errors.content = "Enter some content"; 
	}

	// If errors is empty, its good to go
	// else form invalid assumed by redux-form
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);