import { Component, OnInit } from '@angular/core';


import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DataService } from '../Services/data.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private ser: DataService) { }
  myForm:any;
  isSubmitted:boolean=false;
  minlength:number=8;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  });
}
  get f(){
    return this.myForm.controls;
  }

onSubmitForm(){
  console.log(this.myForm);
  console.log(this.myForm.value);
  this.isSubmitted=true;

  this.ser.sendData(this.myForm.value).subscribe(
    (res)=>{
      console.log(res);
    },
    (err)=>console.log(err)
  )
}
 }



