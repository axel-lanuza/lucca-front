import { Routes, Route } from '@angular/router';
import { DemoUserDisplayComponent } from './display/user-display.component';
import { DemoUserPictureComponent } from './picture/user-picture.component';
import { DemoUserTileComponent } from './tile/user-tile.component';
import { DemoUserSelectComponent } from './select/user-select-basic.component';

export const userRoutes: Routes = [
	{
		path: 'user',
		label: 'User',
		children: [
			{
				path: 'display',
				label: 'Display',
				component: DemoUserDisplayComponent,
			} as Route,
			{
				path: 'picture',
				label: 'Picture',
				component: DemoUserPictureComponent,
			} as Route,
			{
				path: 'tile',
				label: 'Tile',
				component: DemoUserTileComponent,
			} as Route,
			{
				path: 'select',
				label: 'Select',
				component: DemoUserSelectComponent,
			} as Route,
			{ path: '', redirectTo: 'display', pathMatch: 'full' },
		],
	} as Route,
];
