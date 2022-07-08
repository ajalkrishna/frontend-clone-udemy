import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-course',
  templateUrl: './each-course.component.html',
  styleUrls: ['./each-course.component.scss']
})
export class EachCourseComponent implements OnInit {

  @Input() courseData:any

  constructor() { }

  ngOnInit(): void {
  }

}
