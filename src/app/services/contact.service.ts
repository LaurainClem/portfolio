import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ContactService {
	constructor(private readonly http: HttpClient) {}

	postMessage(form: any): Observable<string> {
		const entry = new HttpParams({
			fromObject: { 'form-name': 'contactForm', ...form },
		});

		return this.http.post('/', entry.toString(), {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			responseType: 'text',
		});
	}
}
