import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avis } from 'src/app/model/Avis';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-addavis',
  templateUrl: './addavis.component.html',
  styleUrls: ['./addavis.component.css']
})
export class AddavisComponent implements OnInit {
  rate : Avis=new Avis();
  currentRate = 0;
  id:any;
  titre:any="";
  constructor(private avisService: AvisService,private router: Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    if(this.id === undefined) {
      this.rate = new Avis();
      this.titre='Add new rate';
    }else {
      this.avisService.getAvisById(this.id).subscribe(res=>{
         this.rate=res;
        this.titre = 'Update reponse'+res.rate;}) 
    }
  }
  save()
{
  console.log(this.rate);
  if(this.id === undefined){
    this.avisService.addAvis(this.rate).subscribe((data)=>this.router.navigateByUrl('/lista'));  
  }else{
    this.avisService.updateAvis(this.id,this.rate).subscribe((data)=>this.router.navigateByUrl('/lista'));  

  }

}
  }


