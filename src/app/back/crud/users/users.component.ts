import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  idt:any;
  users:any;
  user:any;
  id:any;
nom:any;
prenom:any;
  constructor(private u:CrudService,private userservice:CrudService,private ac:ActivatedRoute,private s:CrudService ) { }

  ngOnInit(): void {
    this.userservice.ListUser().subscribe(
      (d)=>{
        this.users=d;
        console.log(d);
      }
    )
}
  add(f:any){
    this.u.addUser(f).subscribe(
      ()=>{
        console.log('succes')
      }
    )
  }
  delete(users:any):void{
    //this.idt=this.ac.snapshot.params['id'];
    this.userservice.removeUser(this.users.id_membre).subscribe
      (res=>alert("Commentaire deleted successfully"));}
  
//  pdelete(comment:Commentaire):void {
//     this.commentService.deleteComment(comment.id_commentaire).subscribe(res=>alert("Commentaire deleted successfully"));
//   }
  update(f:any){
    this.userservice.updateUser(f,this.ac.snapshot.params['id']).subscribe(
      ()=>{console.log('Updated !');}
    )
  }
  //get user by id

}
