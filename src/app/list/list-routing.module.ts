import { MoviesComponent } from "./movies/movies.component";
import { MusicComponent } from "./music/music.component";
import { MapComponent } from "./map/map.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListPage } from "./list.page";

const routes: Routes = [
  {
    path: "",
    component: ListPage,
    children: [
      {
        path: "",
        children: [
          {
            path: "map",
            component: MapComponent
          },
          {
            path: "music",
            component: MusicComponent
          },
          {
            path: "movies",
            component: MoviesComponent
          },
          {
            path: "",
            redirectTo: "/list/map",
            pathMatch: "full"
          }
        ]
      }
    ]
  },
  {
    path: "",
    redirectTo: "/list/map",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPageRoutingModule {}
