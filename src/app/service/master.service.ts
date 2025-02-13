import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRESPONSE, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  apiUrl: string = "https://projectapi.gerasim.in/api/IncidentTracking/";

  login(obj:User) {
    debugger;
    return this.http.post<IAPIRESPONSE>(this.apiUrl +"login",obj);
  }

  getAllUsers() {
    return this.http.get(`${this.apiUrl}GetAllUsers`);
  }

  createNewUser(obj:any) {
    return this.http.post(`${this.apiUrl}Register`,obj);
  }

  updateUser(obj:any) {
    return this.http.post(`${this.apiUrl}UpdateUser`,obj);
  }

  deleteUserById(id:number) {
    return this.http.delete(`${this.apiUrl}DeleteUserByUserId?userId=${id}`);
  }

}
