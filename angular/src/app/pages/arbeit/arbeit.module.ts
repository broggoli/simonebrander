import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbeitPageRoutingModule } from './arbeit-routing.module';

import { ArbeitPage } from './arbeit.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { TextViewComponent } from 'src/app/components/text-view/text-view.component';
import { ImageViewComponent } from 'src/app/components/image-view/image-view.component';
import { FigurenbeschriebComponent } from 'src/app/components/figurenbeschrieb/figurenbeschrieb.component';
import { FilmComponent } from 'src/app/components/film/film.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbeitPageRoutingModule,
    HeaderModule
  ],
  declarations: [ArbeitPage, TextViewComponent, ImageViewComponent, FigurenbeschriebComponent, FilmComponent]
})
export class ArbeitPageModule {}
