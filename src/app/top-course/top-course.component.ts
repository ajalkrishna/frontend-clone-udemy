import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-course',
  templateUrl: './top-course.component.html',
  styleUrls: ['./top-course.component.scss']
})
export class TopCourseComponent implements OnInit {

  @Input() sliderData:any

  constructor() { }

  ngOnInit(): void {
  }

}
