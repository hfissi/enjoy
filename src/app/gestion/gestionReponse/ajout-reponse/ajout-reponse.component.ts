import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reponse } from 'src/app/model/Reponse';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-ajout-reponse',
  templateUrl: './ajout-reponse.component.html',
  styleUrls: ['./ajout-reponse.component.css']
})
export class AjoutReponseComponent implements OnInit {

  public gfg = true;
  reponse : Reponse=new Reponse();
  list: Reponse[]=[];
  id:any;
  titre:any="";
  constructor(private reponseService: ReponseService,private router: Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    if(this.id === undefined) {
      this.reponse = new Reponse();
      this.titre='Add new reponse';
    }else {
      this.reponseService.getReponseById(this.id).subscribe(res=>{
         this.reponse=res;
        this.titre = 'Update reponse'+res.reponse;}) 
    }
  }
  save()
{
  console.log(this.reponse);
  if(this.id === undefined){
    this.reponseService.addReponse(this.reponse).subscribe((data)=>this.router.navigateByUrl('/listr'));  
  }else{
    this.reponseService.updateReponse(this.id,this.reponse).subscribe((data)=>this.router.navigateByUrl('/listr'));  

  }

}

}
