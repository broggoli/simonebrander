import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbeitPage } from './arbeit.page';
import { PortraitPage } from '../portrait/portrait.page';
import { FigurenbeschriebComponent } from 'src/app/components/figurenbeschrieb/figurenbeschrieb.component';
import { FilmComponent } from 'src/app/components/film/film.component';

const routes: Routes = [
  {
    path: '',
    component: ArbeitPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbeitPageRoutingModule {}
