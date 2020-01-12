import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakerPage } from './speaker.page';

const routes: Routes = [
  {
    path: '',
    component: SpeakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakerPageRoutingModule {}
