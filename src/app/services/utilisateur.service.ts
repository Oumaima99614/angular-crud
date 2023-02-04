import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  urlApi= 'http://localhost:42400/utilisateurs';

  constructor( private http:HttpClient) { }


  getAll(){
  this.http.get<MyInterface>(this.urlApi);
 


  }
  delete(id){
    return this.http.delete(`${this.urlApi} /${id}`);
  }
postut(utilisateurs){
  return this.http.post<MyInterface>(this.urlApi,utilisateurs);
}
updateUtilisateur(utilisateurs){
  return this.http.put(`${this.urlApi}/${utilisateurs.id}`,utilisateurs);

}

}
