import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LuApiSelect } from './api-select.component';
import { LuApiSelectPicker } from './picker';
import { IApiSelectFeeder } from './feeder';
import {
	LuSelectOption,
	LuSelectSearchIntl,
	LuSelect,
	LuSelectPicker,
	LuSelectDirective,
} from '../../select';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Platform } from '@angular/cdk/platform';
import { FormsModule } from '@angular/forms';
import {
	OVERLAY_PROVIDERS,
	ScrollStrategyOptions,
	ScrollDispatcher,
} from '@angular/cdk/overlay';

// tslint:disable-next-line:component-class-suffix
export class MockApiFeeder implements IApiSelectFeeder<any> {
	isPaged(): boolean {
		return false;
	}
	getItems(clue: string): Observable<any[]> {
		return Observable.of(<any[]>[
			{ id: 1, name: 'test 1' },
			{ id: 2, name: 'test 2' },
		]);
	}
	textValue(item: any): string {
		return 'hello mock';
	}
}
@Component({
	template: `<lu-api-select [(ngModel)]="item"
		[selectApiFeeder]="mockFeeder"
		>
		</lu-api-select>
	`,
})
// tslint:disable-next-line:component-class-suffix
export class WrapperApiSelect {
	item = {
		id: 1,
		firstName: 'Lucca',
		lastName: 'Admin',
	};

	mockFeeder = new MockApiFeeder();
}

describe('LuSelectApi', () => {
	const users = [
		{
			id: 1,
			firstName: 'Lucca',
			lastName: 'Admin',
		},
		{
			id: 2,
			firstName: 'Chloé',
			lastName: 'Alibert',
		},
		{
			id: 3,
			firstName: 'Peter',
			lastName: 'Benson',
		},
		{
			id: 4,
			firstName: 'Maurice',
			lastName: 'Bart',
		},
		{
			id: 5,
			firstName: 'Marie-Françoise',
			lastName: 'Archer',
		},
	];
	const apiUsers = {
		data: {
			items: users,
		},
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				Platform,
				OVERLAY_PROVIDERS,
				ScrollStrategyOptions,
				ScrollDispatcher,
				LuSelectSearchIntl,
			],
			imports: [FormsModule],
			declarations: [
				LuSelectOption,
				LuSelect,
				LuSelectPicker,
				LuSelectDirective,
				LuApiSelectPicker,
				LuApiSelect,
				WrapperApiSelect,
			],
		}).compileComponents();
	});

	it('It should reference has the right value', () => {
		// Arrange
		const fixture = TestBed.createComponent(WrapperApiSelect);

		fixture.whenStable().then(() => {
			const selectApi: LuApiSelect<any> = fixture.debugElement.query(
				By.directive(LuApiSelect),
			).componentInstance;
			// Act
			fixture.detectChanges();

			const mockApiArray = [
				{ id: 1, name: 'test 1' },
				{ id: 2, name: 'test 2' },
			].map(item => {
				const luSelectOption = new LuSelectOption(null, null);
				luSelectOption.luOptionValue = item;
				return luSelectOption;
			});
			// Assert
			expect(selectApi.luOptions.toArray()).toBe(mockApiArray);
		});
	});
});
