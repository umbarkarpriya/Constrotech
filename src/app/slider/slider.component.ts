import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  
  MyImage1:string="../assets/Images/cons2.jpg";
  MyImage2:string="../assets/Images/img22.jpg"
  constructor() { }

  ngOnInit(): void {
  }
  //images = ['../assets/Images/img11.jpg','../assets/Images/img22.jpg','../assets/Images/img11.jpg'];
}
