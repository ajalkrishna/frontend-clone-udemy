import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss']
})
export class ClipComponent implements OnInit {

  @Input() data:any
  constructor() { }

  ngOnInit(): void {
  }

}
