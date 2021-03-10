import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videosection',
  templateUrl: './videosection.component.html',
  styleUrls: ['./videosection.component.css']
})
export class VideosectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
test:boolean = true;

hide(){
  this.test = true;
  console.log(this.test)
}
}
