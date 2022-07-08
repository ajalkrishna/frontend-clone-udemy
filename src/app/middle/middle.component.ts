import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  sliderOneData:any[]=[
    {
      title:'RxJs In Practice (with FREE E-Book)',
      author:'Angular University',
      rating:4.2
    },
    {
      title:'Reactive Angular Course (with RxJs)',
      author:'Angular University',
      rating:4.5
    },
    {
      title:'Angular Security Masterclass (with FREE E-Book)',
      author:'Angular University',
      rating:4.8
    },
    {
      title:'Angular Advanced MasterClass & FREE E-Book',
      author:'Angular University',
      rating:4.2
    },
    {
      title:'Angular Router In Depth',
      author:'Angular University',
      rating:4.1
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
