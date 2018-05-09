import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import {
	FieldWrapper,
	FormlyFieldConfig,
	FormlyConfig,
	FieldType,
} from '@ngx-formly/core';

// wrapper component
@Component({
	selector: 'lu-formly-wrapper-radio-checkbox-layout',
	styleUrls: ['flex-layout.scss'],
	templateUrl: './radio-checkbox-layout.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuFormlyWrapperRadioCheckboxLayout extends FieldWrapper {
	@ViewChild('fieldComponent', { read: ViewContainerRef })
	fieldComponent: ViewContainerRef;

	get mod() {
		return this.to.mod || '';
	}

	get isRequired() {
		return !!this.to && !!this.to.required ? 'is-required' : '';
	}

	get isFocused() {
		return !!this.to && this.to._isFocused ? 'is-focused' : '';
	}

	get isError() {
		return this.formControl.invalid && this.formControl.touched
			? 'is-error'
			: '';
	}
}
