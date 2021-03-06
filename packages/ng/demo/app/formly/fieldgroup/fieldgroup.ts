import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
	selector: 'demo-formly-fieldgroup',
	templateUrl: './fieldgroup.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldgroupComponent {
	form: FormGroup = new FormGroup({});
	userFields = [
		{
			className: 'form-group',
			fieldGroup: [
				{
					className: 'form-group-line',
					fieldGroup: [
						{
							className: 'form-group-line-md6',
							key: 'firstName',
							type: 'input',
							templateOptions: {
								type: 'text',
								label: 'first name',
								mod: 'mod-framed',
							},
						},
						{
							className: 'form-group-line-md6',
							key: 'lastName',
							type: 'input',
							templateOptions: {
								type: 'text',
								label: 'last name',
								mod: 'mod-framed',
							},
						},
					],
					templateOptions: {},
				},
				{
					className: 'form-group-line',
					fieldGroup: [
						{
							className: 'form-group-line-md2',
							key: 'buildingNumber',
							type: 'input',
							templateOptions: {
								type: 'text',
								label: 'Building Number',
								mod: 'mod-framed',
							},
						},
						{
							className: 'form-group-line-md10',
							key: 'streetName',
							type: 'input',
							templateOptions: {
								type: 'text',
								label: 'Street Name',
								mod: 'mod-framed',
							},
						},
					],
					templateOptions: {},
				},
				{
					fieldGroup: [
						{
							key: 'Comments',
							type: 'textarea',
							templateOptions: {
								label: 'comments',
								mod: 'mod-framed textarea',
							},
						},
					],
					templateOptions: {},
				},
			],
			templateOptions: {
				title: 'section 1',
			},
		},
		{
			className: 'form-group',
			templateOptions: {
				title: 'section 2',
				mod: 'mod-framed',
			},
			fieldGroup: [
				{
					key: 'selection',
					type: 'select',
					templateOptions: {
						label: 'The selection',
						options: [
							{ id: 0, name: 'female' },
							{ id: 1, name: 'male' },
							{ id: 2, name: 'other' },
						],
						mod: 'mod-framed',
					},
				},
				{
					key: 'autocomplete',
					type: 'autocomplete',
					templateOptions: {
						label: 'Autocompletion',
						mod: 'mod-framed mod-autocomplete',
						options: [{ name: 'female' }, { name: 'male' }, { name: 'other' }],
					},
				},
			],
		},
	];

	user = {};

	submit(stuff) {}
}
