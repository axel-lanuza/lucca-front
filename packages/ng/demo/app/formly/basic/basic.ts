import { Component } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from 'ng-formly';

@Component({
	selector: 'demo-formly-basic',
	templateUrl: './basic.html',
})
export class BasicComponent {
	form: FormGroup = new FormGroup({});
	userFields = [
		{
			key: 'name',
			type: 'input',
			templateOptions: {
				type: 'text',
				label: 'name - text',
			},
		},
		{
			key: 'email',
			type: 'input',
			templateOptions: {
				type: 'email',
				label: 'email - email',
			},
		},
		{
			key: 'password',
			type: 'input',
			templateOptions: {
				type: 'password',
				label: 'password - password',
			},
		},
		{
			key: 'age',
			type: 'input',
			templateOptions: {
				type: 'number',
				label: 'age - number',
			},
		},
		{
			key: 'birthDate',
			type: 'date',
			templateOptions: {
				label: 'birthDate - date',
			},
		},
		{
			key: 'description',
			type: 'textarea',
			templateOptions: {
				label: 'description - textarea',
				placeholder: 'enter your life journey',
			},
		},
		{
			key: 'gender',
			type: 'autocomplete',
			templateOptions: {
				label: 'gender - autocomplete',
				placeholder: 'choose well',
				options: [
					{ id: 0, name: 'female' },
					{ id: 1, name: 'male' },
					{ id: 2, name: 'other' },
				]
			},
		},
		{
			key: 'orientation',
			type: 'select',
			templateOptions: {
				label: 'sexual orientation - select',
				placeholder: 'choose well',
				options: [
					{ id: 0, name: 'female' },
					{ id: 1, name: 'male' },
					{ id: 2, name: 'other' },
				]
			},
		},
	];

	user = {};

	submit(user) {
		console.log(user);
	}
}


