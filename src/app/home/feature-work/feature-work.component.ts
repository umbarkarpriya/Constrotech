import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-work',
  templateUrl: './feature-work.component.html',
  styleUrls: ['./feature-work.component.css']
})
export class FeatureWorkComponent implements OnInit {
   
  f1:string="../../assets/images/slider1.jpg";
  f2:string="../../assets/images/slider2.jpg";
  f3:string="../../assets/images/slider3.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
