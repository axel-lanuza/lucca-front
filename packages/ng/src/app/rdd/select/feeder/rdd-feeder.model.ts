import { Observable } from 'rxjs/Observable';
import {IRddItem} from '../../rdd.model';
import {
	ISelectApiFeederWithPaging,
	ASelectApiFeederWithPaging
} from '../../../api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * Interface that define how to fill a select based on an API
 */
export interface ISelectRDDApiFeeder<T extends IRddItem> extends ISelectApiFeederWithPaging<T> {


	/**
	 * Give the rdd api url
	 */
	getApiUrl(): string;

	/**
	 * Give the return fields
	 */
	getFields(): string[];

	/**
	 * Give the list of additionnals parameters
	 */
	getParams(): string[];

	/**
	 * Give the name of the field use for the search
	 */
	getClueField(): string;
}

/**
 * Abstract class that propose an implementation of Lucca RDD Api for the interface ISelectApiFeeder
 */
@Injectable()
export abstract class ASelectRDDFeeder<T extends IRddItem>
	extends ASelectApiFeederWithPaging<T>
	implements ISelectRDDApiFeeder<T> {

	constructor(
		protected _http: HttpClient
	) {
		super(_http);
	}

	/**
	 * See ISelectApiFeeder
	 */
	getPagedItems(clue: string, pagingStart: number, pagingStep: number): Observable<T[]> {
	const params = [
				`${this.getClueField()}=like,${encodeURIComponent(clue)}`,
				`paging=${pagingStart},${pagingStep}`,
				`fields=${this.getFields().join(',')}`,
			];
		const additionalParams = this.getParams();
		if (additionalParams && additionalParams.length > 0) {
			params.push(...additionalParams);
		}
		const url = `${this.getApiUrl()}?${params.join('&')}`;
		return this._http.get<{ data: { items: T[] } }>(url)
		.map(r => r.data.items);
	}


	/**
	 * See ISelectApiFeeder
	 */
	textValue(item: T): string {
		return item.name;
	}

	/**
	 * Give the paging step of api
	 */
	abstract getPagingStep(): number;

	/**
	 * Give the rdd api url
	 */
	abstract getApiUrl(): string;

	/**
	 * Give the return fields
	 */
	abstract getFields(): string[];

	/**
	 * Give the list of additionnals parameters
	 */
	abstract getParams(): string[];

	/**
	 * Give the name of the field use for the search
	 */
	abstract getClueField(): string;

}
