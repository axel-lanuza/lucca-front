import { ChangeDetectionStrategy, Component, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
import { IUser } from '../user.model';
import {
	LuUserDisplayPipe,
	DisplayFormat,
	DisplayInitials,
	DisplayFullname,
} from '../display';

/**
 * Displays user'picture or a placeholder with his/her initials and random bg color'
 */
@Component({
	selector: 'lu-user-picture',
	templateUrl: './user-picture.component.html',
	styleUrls: ['./user-picture.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuUserPictureComponent {

	private _displayFormat: DisplayInitials = DisplayInitials.firstlast;
	/**
	 * User Display format.
	 * It is set to 'FL' by default
	 */
	@Input()
	set displayFormat(displayFormat: DisplayInitials) {
		this._displayFormat = displayFormat;
		this._changeDetector.markForCheck();
	}

	get displayFormat(): DisplayInitials {
		return this._displayFormat;
	}

	/**
	 * IUser whose picture you wanna display.
	 */
	private _user: IUser;

	@Input()
	set user(user: IUser) {
		this._user = user;
		this.initials = this.displayPipe.transform(user, this.displayFormat);
		this.hasPicture = !!user.picture && !!user.picture.href;
		if (this.hasPicture) {
			this.style = { 'background-image': `url('${this._user.picture.href}')` };
		} else {
			const hsl = this.getNameHue();
			this.style = { 'background-color': `hsl(${hsl}, 60%, 60%)` };
		}
		this._changeDetector.markForCheck();
	}
	get user() {
		return this._user;
	}

	initials = '';
	hasPicture = false;

	style;

	constructor(
		private displayPipe: LuUserDisplayPipe,
		private _changeDetector: ChangeDetectorRef
	) {}

	private getNameHue() {
		// we sum the chars in user's firstname + lastname
		const charSum = this.displayPipe
			.transform(this._user, DisplayFullname.firstlast)
			.split('')
			.reduce((sum, a) => sum + a.charCodeAt(0), 0);
		// and take a modulo 360 for hue
		const hue = charSum % 360;
		return hue;
	}
}
