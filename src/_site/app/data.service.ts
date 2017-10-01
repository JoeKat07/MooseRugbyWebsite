import { Injectable } from '@angular/core';

import { Roster } from './app.data-types';
import { ROSTER } from './roster-content';
import { Officer } from './app.data-types2';


@Injectable()
export class DataService {
  getRoster(): Promise<Roster[]>{
    return Promise.resolve(ROSTER)
  }
  constructor() { }
}
