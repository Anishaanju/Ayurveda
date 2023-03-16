import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceExampleService } from 'src/app/service-example.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  single:any
  constructor(private hero:ServiceExampleService,private router:Router) {}
    body=this.hero.getDataBody();

    gotohere(id: string){
      localStorage.setItem('id',id)
      this.router.navigate(['/single'])
    }

}
