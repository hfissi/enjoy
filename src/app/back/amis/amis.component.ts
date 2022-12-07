import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { amisdata } from './amis.modal';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})
export class AmisComponent implements OnInit {

showadd!:boolean;
showupdate!:boolean;
amismodelobj:amisdata=new amisdata
formValue!:FormGroup
allamisdata:any;
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      adresse: ['',Validators.required],
      email:['',Validators.required],
    })
   this. getdata()
  }

  add(){
    this.showadd=true;
    this.showupdate=false;
  }

  edit(data:any){
    this.showadd=false;
    this.showupdate=true;
    this.amismodelobj.id = data.id;

    this.formValue.controls['nom'].setValue(data.nom)
    this.formValue.controls['prenom'].setValue(data.prenom)
    this.formValue.controls['adresse'].setValue(data.adresse)
    this.formValue.controls['email'].setValue(data.email)
  }

 // update on edit
 update(){
  this.amismodelobj.nom = this.formValue.value.nom;
  this.amismodelobj.prenom = this.formValue.value.prenom;
  this.amismodelobj.adresse = this.formValue.value.adresse;
  this.amismodelobj.email = this.formValue.value.email;

  this.api.updateamis(this.amismodelobj,this.amismodelobj.id).subscribe(res=>{
    this.formValue.reset();
    this.getdata();
    alert("Record updated successfully");

  },
  error=>{
    alert("something wrong!!!");
  }
  
  ) 

 }

  addamis(){
    this.amismodelobj.nom = this.formValue.value.nom;
    this.amismodelobj.prenom = this.formValue.value.prenom;
    this.amismodelobj.adresse = this.formValue.value.adresse;
    this.amismodelobj.email = this.formValue.value.email;

    this.api.postamis(this.amismodelobj).subscribe(res=>{
      console.log(res)
      this.formValue.reset()
      this.getdata()

      alert("Record added successfully");
    },
    error=>{
      alert("something wrong!!!");
    })
  }

    //getdata
    getdata(){
      this.api.getamis()
      .subscribe(res=>{
        this.allamisdata=res;

      })
    } 


  //delete


  deleteamis(data:any){
    if(confirm("Are you sure to delete ?") )
    this.api. deleteamis(data.id)
    .subscribe(res=>{
  alert("Record deleted succsesfully");
  this.getdata();
    })
  }
    
  
  

}
