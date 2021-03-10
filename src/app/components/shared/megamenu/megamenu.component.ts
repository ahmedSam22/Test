import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.css']
})
export class MegamenuComponent implements OnInit {

  constructor(public login : LoginService) { }

  ngOnInit(): void {
    
  }
  display = false
collapse(){
  
}
}
