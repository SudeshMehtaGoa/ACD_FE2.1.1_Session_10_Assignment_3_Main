/* logservice */
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  log(){
    console.log("New student inserted.");
  };

  info(){
    console.log("Data retrived");
  };


}
