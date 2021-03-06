import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPopoverComponent } from './popover.component';
import { LuUserModule } from '../../../src/app/user';
import { LuPopoverModule } from '../../../src/app/popover/popover.module';
import { SharedModule } from '../shared';
import { DemoPopoverBasicComponent } from './basic/basic';
import { DemoPopoverTriggerComponent } from './trigger/trigger';
import { DemoPopoverScrollComponent } from './scroll/scroll';

@NgModule({
	imports: [CommonModule, LuPopoverModule, SharedModule, LuUserModule],
	declarations: [
		DemoPopoverComponent,
		DemoPopoverBasicComponent,
		DemoPopoverTriggerComponent,
		DemoPopoverScrollComponent,
	],
	exports: [
		DemoPopoverComponent,
		DemoPopoverBasicComponent,
		DemoPopoverTriggerComponent,
		DemoPopoverScrollComponent,
	],
})
export class DemoPopoverModule {}
