import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss'],
})
export class TextViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelectorAll(`.textToggle1`).forEach( textToggle => {
      textToggle.toggleAttribute("active")
    });
    document.querySelectorAll(`.text1`).forEach( textSegment => {
      textSegment.toggleAttribute("show")
    });
  }

  toggleText(textNr: number) {
    document.querySelectorAll(`.textToggle${textNr}`).forEach( textToggle => {
      textToggle.toggleAttribute("active")
    });
    document.querySelectorAll(`.text${textNr}`).forEach( textSegment => {
      textSegment.toggleAttribute("show")
    });
  }
}
