import { Component } from '@angular/core';
import { ServiceExampleService } from 'src/app/service-example.service';
import { skin } from 'src/assets/data/data';
import { hair } from 'src/assets/data/data';
import { body } from 'src/assets/data/data';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private hero: ServiceExampleService){}
  ngOnInit():void{
    let id=localStorage.getItem('id')
    let singleDataArray=this.hero.getDataSkin()
    console.log(singleDataArray);
    this.single=singleDataArray.filter(e=>e.title===id)
    console.log(this.single)
  }

}
