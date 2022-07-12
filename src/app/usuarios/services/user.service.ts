import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  baseUrl: string = environment.apiUrl;
  userUrl: string = `${this.baseUrl}/users`;
  result: User[] =[]; 
  totalRegis : number = 0;
  regisPag: number = 0;

   constructor( private http: HttpClient) { }

  listUser(pagina:number=0, size: number= 3){

    const params = new HttpParams()
    .set('page', pagina.toString())
    .set('per_page',size.toString());





    this.http.get<API>(this.userUrl, {params: params}).subscribe(resp =>{
      this.result =resp.data;
      this.totalRegis = resp.total;
      this.regisPag= resp.per_page;
    })
  }

}
