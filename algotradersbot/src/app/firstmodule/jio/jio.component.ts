import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jio',
  templateUrl: './jio.component.html',
  styleUrls: ['./jio.component.css']
})
export class JioComponent implements OnInit {
  checkingif=true;
  stdclick()
  {
    alert("I am Student");
  }
  tchclick()
  {
    alert("I am Teacher");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
