import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  login(obj:User) {
    return this.http.post("https://projectapi.gerasim.in/api/BankLoan/login",obj);
  }

}
