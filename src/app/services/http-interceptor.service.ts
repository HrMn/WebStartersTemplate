import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { ApplicationFrameService } from './application-frame.service';

@Injectable()
export class InterceptorService implements HttpInterceptor
{
    constructor(
        private router: Router,
        private applicationFrameService:ApplicationFrameService,
		private authService: AuthenticationService)
	{
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
	{
		console.log("interceptor")
		let headers: HttpHeaders = request.headers;

		if (this.applicationFrameService.webServerType == 'AngularCLI')
		{	
            return next.handle(request.clone({
                method: 'GET',
                url:   '/assets/apitest' + request.url + '-' + request.method + '.json',
                headers: headers.set('Content-Type', ['application/json', 'charset=utf-8'])
            }));
			
		}
		return next.handle(request);
	}
}