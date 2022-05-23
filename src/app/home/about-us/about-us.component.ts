import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  AboutUs:string="../assets/Images/cons2.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
