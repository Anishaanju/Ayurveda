import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceExampleService } from 'src/app/service-example.service';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent {
  single:any
  constructor(private hero:ServiceExampleService,private router:Router) {}
    hair=this.hero.getDataHair();

    gotohere(id: string){
      localStorage.setItem('id',id)
      this.router.navigate(['/single'])
    }
}
