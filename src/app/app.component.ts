import { Component, OnInit } from '@angular/core';

import { Roster } from './app.class-roster';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:[DataService]
})
export class AppComponent {

  public roster: Roster[];

  constructor(private rosterService:DataService){ }

  ngOnInit(){
    this.getContent();
  }

  getContent(){
    this.rosterService.getRoster().then(content => this.roster = content)
  }
  title = 'app';
}
