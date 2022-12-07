import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) {}
    addUser(d:any){
      return this.http.post('http://localhost:3000/users/add',d)
                  }
    ListUser(){ 
      return this.http.get('http://localhost:3000/users')
             }
    updateUser(data:any,id:any){
      return this.http.put('http://localhost:3000/users/update'+id,data)

    } 
    removeUser(id:any){
      return this.http.delete('http://localhost:3000/users/remove/'+id)

    }
    getUserById(id:any){
    return this.http.get('http://localhost:3000/users/'+id)
  }

   
}
