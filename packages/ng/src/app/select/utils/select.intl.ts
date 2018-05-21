import { Injectable, SkipSelf, Optional } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * To modify the labels and text displayed, create a new instance of LuSelectIntl and
 * include it in a custom provider
 */
@Injectable()
export class LuSelectIntl {
	/**
	 * Stream that emits whenever the labels here are changed. Use this to notify
	 * components if the labels have changed after initialization.
	 */
	readonly changes: Subject<void> = new Subject<void>();

	/** A label for empty. */
	selectAllLabel: string = 'Select all';
	noLabel: string = 'None';
	allLabel: string = 'All';
	allTypeLabel: string = 'the entities';
	typeLabel: string = 'entities';
}

/** @docs-private */
export function LU_SELECT_INTL_PROVIDER_FACTORY(
	parentIntl: LuSelectIntl,
) {
	return parentIntl || new LuSelectIntl();
}

/** @docs-private */
export const LU_SELECT_INTL_PROVIDER = {
	// If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
	provide: LuSelectIntl,
	deps: [[new Optional(), new SkipSelf(), LuSelectIntl]],
	useFactory: LU_SELECT_INTL_PROVIDER_FACTORY,
};