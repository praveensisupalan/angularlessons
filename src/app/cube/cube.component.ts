import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  cube=1
  constructor() { }

  ngOnInit(): void {
  }
getCube(num:any){
  let n = num.value
  this.cube=n**3

}
}
