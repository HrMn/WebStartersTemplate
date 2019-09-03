import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService 
{
    constructor(private http: HttpClient) { }

    login(uname:string,password:string)
    {

    }
}