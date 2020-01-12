import { MoviesComponent } from "./movies/movies.component";
import { MusicComponent } from "./music/music.component";
import { MapComponent } from "./map/map.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ListPageRoutingModule } from "./list-routing.module";

import { ListPage } from "./list.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ListPageRoutingModule],
  declarations: [ListPage, MapComponent, MusicComponent, MoviesComponent]
})
export class ListPageModule {}
