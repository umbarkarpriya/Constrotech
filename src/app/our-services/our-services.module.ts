import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { HouseRenovationComponent } from './house-renovation/house-renovation.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes =[
  {path:'house-renovation', component: HouseRenovationComponent },
  { path: 'service', component: ServiceComponent},

]



@NgModule({
  declarations: [
    ServiceComponent,
    HouseRenovationComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class OurServicesModule { }
