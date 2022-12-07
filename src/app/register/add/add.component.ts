import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder , private u:RegisterService) { }

  ngOnInit(): void {
  }
  add(f:any){
    this.u.addUser(f).subscribe(
      ()=>{
        console.log('succes')
      }
    )
  }
}
