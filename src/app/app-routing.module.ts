import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home/home.component';
//import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { PuneComponent } from './pune/pune.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  //{path:'home', component:HomeComponent},
  {path:'pune', component:PuneComponent},
  {path:'contact', component:ContactComponent},
  //{path:'**', component: HomeComponent},
   //{path:'**', redirectTo:'home'},
  {path:'mumbai', component:MumbaiComponent},
  {
    path:'home', loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)
  },
  {
    path:'our-services', loadChildren:()=>import('./our-services/our-services.module').then(mod=>mod.OurServicesModule)
  },
  {
    path:'port-folio', loadChildren:()=>import('./port-folio/port-folio.module').then(mod=>mod.PortFolioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
