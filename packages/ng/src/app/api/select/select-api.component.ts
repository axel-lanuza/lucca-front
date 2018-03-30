import {
	Component,
	forwardRef,
	Renderer2,
	ElementRef,
	Input,
} from '@angular/core';
import {
	NgModel,
	NG_VALUE_ACCESSOR,
	NG_VALIDATORS,
} from '@angular/forms';
import {
	LuSelect,
} from '../../select';
import { ISelectApiFeeder } from './feeder';

/**
 * Api select : A select that will load items from an external service
 *
*/
@Component({
	// tslint:disable-next-line:component-selector
	selector: 'lu-api-select',
	templateUrl: './select-api.component.html',
	styleUrls: ['./select-api.component.scss'],
	providers: [
		{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LuSelectApi), multi: true },
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => LuSelectApi), multi: true },
	],
})
// tslint:disable-next-line:component-class-suffix
export class LuSelectApi<T = any>
extends LuSelect<T> {

	/**
	 * Refence the ISelectApiFeeder instance that will be use to fill the select
	 */
	@Input() selectApiFeeder: ISelectApiFeeder<T>;


	constructor(
		protected _elementRef: ElementRef,
		protected _renderer: Renderer2,
	) {
		super(_elementRef, _renderer);
	}

}
