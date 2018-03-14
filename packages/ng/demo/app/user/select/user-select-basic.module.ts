import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoUserSelectComponent } from './user-select-basic.component';
import { DemoBasicUserSelectComponent } from './basic/basic';
import { DemoBasicUserSelect2Component } from './v2/basic2';
import { LuUserSelectModule } from '../../../../src/app/user';
import { LuSelectModule } from '../../../../src/app/select';
import { SharedModule } from '../../shared/index';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		LuUserSelectModule,
		LuSelectModule,
		SharedModule,
	],
	declarations: [
		DemoUserSelectComponent,
		DemoBasicUserSelectComponent,
		DemoBasicUserSelect2Component,
	],
	exports: [
		DemoUserSelectComponent,
		DemoBasicUserSelectComponent,
		DemoBasicUserSelect2Component,
	],
})
export class DemoUserSelectModule { }
