import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth/services/auth.service";



@Injectable()
export class authInterceptor implements HttpInterceptor {

constructor(private authService : AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.isAuthenticated())
    {
      const token = localStorage.getItem('token') ;
      const header = new HttpHeaders().set('authorization',token)
      const newreq = req.clone({
        headers : header
      })
      return next.handle(newreq)
    }
    else
    {
      return next.handle(req)
    }




  }}



  export const InterceptorProvider={
    provide: HTTP_INTERCEPTORS ,
    useClass : authInterceptor ,
    multi: true
  }




