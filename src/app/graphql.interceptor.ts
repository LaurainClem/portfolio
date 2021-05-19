import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { InstantiateExpr } from '@angular/compiler';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class GraphqlInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(request: HttpRequest<any>, next: HttpHandler) {
		return next.handle(request).pipe(
			map((e: HttpEvent<any>) => {
				if (e instanceof HttpResponse && request.url.includes('graphql')) {
					return e.clone({
						body: e.body?.data ? e.body.data.projects : e.body,
					});
				}
				return e;
			}),
		);
	}
}
