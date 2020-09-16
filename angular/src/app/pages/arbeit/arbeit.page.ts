import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-arbeit',
  templateUrl: './arbeit.page.html',
  styleUrls: ['./arbeit.page.scss'],
})
export class ArbeitPage implements OnInit {

  currSubPage: string = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currSubPage = this.activatedRoute.snapshot.paramMap.get('page');
    console.log(this.currSubPage);
  }
  checkPage(pageToCheck: string): boolean {
    return this.currSubPage == pageToCheck;
  }

}
