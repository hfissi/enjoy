import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/model/Commentaire';
import { Reponse } from 'src/app/model/Reponse';

@Component({
  selector: 'app-deals-front',
  templateUrl: './deals-front.component.html',
  styleUrls: ['./deals-front.component.css']
})
export class DealsFrontComponent implements OnInit {
  public gfg = true;
  comment : Commentaire=new Commentaire();
  reponse : Reponse=new Reponse();

  constructor() { }

  ngOnInit(): void {
  }

}
