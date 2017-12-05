import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var require: any;

@Component({
	selector: 'demo-animations',
	templateUrl: './animations.component.html',
	styles: [],
	encapsulation: ViewEncapsulation.None
})
export class DemoAnimationsComponent implements OnInit {

	constructor() { }

	snippets = {
		basic: {
			code: require('!!prismjs-loader?lang=typescript!./basic/basic.component'),
			markup: require('!!prismjs-loader?lang=markup!./basic/basic.component.html')
		},
		sliding: {
			code: require('!!prismjs-loader?lang=typescript!./sliding/sliding.component'),
			markup: require('!!prismjs-loader?lang=markup!./sliding/sliding.component.html')
		},
		scaling: {
			code: require('!!prismjs-loader?lang=typescript!./scaling/scaling.component'),
			markup: require('!!prismjs-loader?lang=markup!./scaling/scaling.component.html')
		},
	}
	ngOnInit() {
	}

}