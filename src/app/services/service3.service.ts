import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service3Service {

  public text: string = 'Service 3'

  constructor() {
    console.log('Service 3 - Constructor: ' + this.text)
  }
}
