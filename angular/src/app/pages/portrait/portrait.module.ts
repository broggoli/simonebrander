import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortraitPageRoutingModule } from './portrait-routing.module';

import { PortraitPage } from './portrait.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortraitPageRoutingModule,
    HeaderModule
  ],
  declarations: [PortraitPage]
})
export class PortraitPageModule {}
