import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


   card1:string="../assets/Images/cons2.jpg";
   card2:string="../assets/Images/cons2.jpg";
   card3:string="../assets/Images/cons2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
