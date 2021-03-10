import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  myArray = ['first' , 'second'];
  myText:string = "";
  MyForm = new FormGroup({});

  ngOnInit(): void {
    
    this.initializeform();
  }

  initializeform(): void{
    this.MyForm = this.fb.group({
      name : 'name here',
      phone : '',
      mail : 'test@test',
      test : this.fb.group({
        first : '',
        second : '',
      }),
     
    })
  }
onsubmit(){
  console.log(this.MyForm.value)
}


}
