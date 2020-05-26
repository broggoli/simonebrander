import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterEvent, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {

  private selectedPath: string = "";
  constructor(private router: Router) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.currURL().subscribe( url => {if( url ) this.selectedPath =  url} )
  }
  
  checkURL(url) {
    console.log(this.selectedPath, url)
    return this.selectedPath.includes(url) || ( this.selectedPath == "" && url.includes("Tutu-der-Humor-meines-Vaters"));
  }
  currURL(): Observable<string> {
    return this.router.events.pipe( 
      map( (event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          return event.url;
        }
        return ""; 
      })
    )
  }

}
