import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }


check(val:any)
  {
      let url="https://api.halfpricebazar.com/v1/auth/login/email"
      return this.http.post<any>(url,val);
  }


save(val:any)
{
    let url="https://api.halfpricebazar.com/v1/users"
    return this.http.post<any>(url,val);
}


}