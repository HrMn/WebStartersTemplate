import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const TOKEN = 'TOKEN';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User>{
    
    return Observable.create((observable)=>{
      this.http.post<User>('/login', {
        email: email,
        password: password
      }).subscribe(data=> {
        let user:User = data;
        if(user)
        {
          console.log(user)
          localStorage.setItem("currentUser",JSON.stringify(user));
          observable.next(user);
        }
      });
    })
  }

  logout(){

  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {

    //TODO:Check for token expiration here
    let loggedInUser:User = JSON.parse(localStorage.getItem("currentUser")) as User;
    return (loggedInUser!=null && loggedInUser!=undefined);
  }
}
