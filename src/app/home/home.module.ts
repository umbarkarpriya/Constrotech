import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatureWorkComponent } from './feature-work/feature-work.component';

const route: Routes =[
 
  { path: 'our-services', component: OurServicesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path:'feature-work', component:FeatureWorkComponent}
]


@NgModule({
  declarations: [

    AboutUsComponent,
    OurServicesComponent,
    FeatureWorkComponent,

  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HomeModule { }
