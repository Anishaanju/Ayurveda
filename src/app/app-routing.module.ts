import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { SkinComponent } from './pages/products/skin/skin.component';
import { HairComponent } from './pages/products/hair/hair.component';
import { BodyComponent } from './pages/products/body/body.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';



const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: '',component: HomeComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'products',component: ProductsComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'navbar',component: NavbarComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'single',component: SingleComponent},
  {path: 'skin',component: SkinComponent},
  {path: 'hair',component: HairComponent},
  {path: 'body',component: BodyComponent},
  {path:'about',component:AboutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
