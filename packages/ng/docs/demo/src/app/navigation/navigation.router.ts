import { Routes } from '@angular/router';
import { formlyRoutes } from '../formly/formly.router';
import { emptyRoutes } from '../empty/empty.router';
import { popoverRoutes } from '../popover/popover.router';
import { animationsRoutes } from '../animation/animation.router';
import { apiRoutes } from '../api/api.router';
import { userRoutes } from '../user/user.router';
import { selectRoutes } from '../select/select.router';
export const featuresRoutes = [
	...formlyRoutes,
	...emptyRoutes,
	...popoverRoutes,
	...animationsRoutes,
	...apiRoutes,
	...userRoutes,
	...selectRoutes,
];