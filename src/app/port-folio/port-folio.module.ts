import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { RouterModule, Routes } from '@angular/router';
const route: Routes =[
 
  { path: 'project1', component: Project1Component},
  {path: 'project2', component: Project2Component},

]


@NgModule({
  declarations: [
    Project1Component,
    Project2Component
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PortFolioModule { }
