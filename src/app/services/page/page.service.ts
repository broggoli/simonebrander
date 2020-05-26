import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, shareReplay, startWith } from "rxjs/operators";
import { Router, RouterEvent, NavigationEnd } from '@angular/router';


const CACHE_KEY = "locallyStoredPages";
@Injectable({
  providedIn: "root"
})
export class PageService {
  getPages(): any {
    return [
        {
          title: "Home",
          url: "/menu/home"
        },
        {
          title: "Programm",
          url: "/menu/programm"
        }
      ];
  }
  // tslint:disable-next-line: variable-name
  constructor(private router: Router) { 
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
