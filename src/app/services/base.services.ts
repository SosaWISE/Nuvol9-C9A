/** LIBRARIES */
import { EventEmitter } from '@angular/core';


export class BaseService {
    /** PROPERTIES */
	public insuficienScopeEvent$: EventEmitter<boolean>;

    /** CONSTRUCTOR */
	constructor (sessionExpiredEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()) {

	this.insuficienScopeEvent$ = sessionExpiredEmitter;
	}

}
