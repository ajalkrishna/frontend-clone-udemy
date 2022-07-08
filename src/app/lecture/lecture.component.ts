import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clipData:object[]=[
    {
      chapter:'Chapter One',
      domain:'Data Science',
      timeLeft:3
    },
    {
      chapter:'Chapter Two',
      domain:'Angular',
      timeLeft:10
    },
    {
      chapter:'Chapter Three',
      domain:'SQL',
      timeLeft:10
    },
    {
      chapter:'Chapter Four',
      domain:'Database',
      timeLeft:5
    },
    {
      chapter:'Chapter Five',
      domain:'Data Science',
      timeLeft:10
    },
    {
      chapter:'Chapter Six',
      domain:'Data Architecture',
      timeLeft:1
    }
  ]

}
