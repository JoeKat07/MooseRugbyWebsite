import { Injectable } from '@angular/core';

import { Roster } from './app.data-types';
import { ROSTER } from './roster-content';


@Injectable()
export class DataService {
  getRoster(): Promise<Roster[]>{
    return Promise.resolve(ROSTER)
  }
  constructor() { }
}
