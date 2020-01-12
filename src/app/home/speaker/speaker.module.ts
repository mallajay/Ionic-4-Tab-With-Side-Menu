import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakerPageRoutingModule } from './speaker-routing.module';

import { SpeakerPage } from './speaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakerPageRoutingModule
  ],
  declarations: [SpeakerPage]
})
export class SpeakerPageModule {}
