import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { LuSelectModule } from '../../select';
import { LuUserSelect } from './user-select.component';
import { LuUserSelect2 } from './user-select2.component';
import { HttpClientModule } from '@angular/common/http';
import { LuUserPickerModule } from './picker/user-select-picker.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		BrowserModule,
		OverlayModule,
		LuSelectModule,
		HttpClientModule,
		LuUserPickerModule,
	],
	declarations: [
		LuUserSelect,
		LuUserSelect2,
	],
	exports: [
		LuUserSelect,
		LuUserSelect2,
	]
})
export class LuUserSelectModule { }

