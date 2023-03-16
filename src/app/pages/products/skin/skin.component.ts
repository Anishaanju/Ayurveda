import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceExampleService } from 'src/app/service-example.service';

@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrls: ['./skin.component.css']
})
export class SkinComponent {
  single:any
  constructor(private hero:ServiceExampleService,private router:Router) {}
    skin=this.hero.getDataSkin();

    gotohere(id: string){
      localStorage.setItem('id',id)
      this.router.navigate(['/single'])
    }

}
