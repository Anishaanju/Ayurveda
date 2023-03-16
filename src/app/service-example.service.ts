import { Injectable } from '@angular/core';
import { skin, hair, body } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class ServiceExampleService {

  constructor() { }
  getDataSkin(){
    return skin
  }
  getDataHair(){
    return hair
  }
  getDataBody(){
    return body
  }
}
