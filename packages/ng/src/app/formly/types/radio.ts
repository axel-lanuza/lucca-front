import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
	selector: 'lu-formly-field-radio',
	templateUrl: './radio.html',
})
export class LuFormlyFieldRadio extends FieldType {
	get _options() {
		return <any[]>this.to.options || [];
	}
}
