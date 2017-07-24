import { Component, OnInit, Input } from '@angular/core';

import { Roster } from '../app.class-roster';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  @Input() roster:Roster

  constructor() { }

  ngOnInit() {
  }

}
