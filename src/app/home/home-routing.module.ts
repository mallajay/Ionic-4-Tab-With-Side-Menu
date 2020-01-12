import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "",
        children: [
          {
            path: "schedule",
            loadChildren: () =>
              import("./schedule/schedule.module").then(
                m => m.SchedulePageModule
              )
          },
          {
            path: "speaker",
            loadChildren: () =>
              import("./speaker/speaker.module").then(m => m.SpeakerPageModule)
          },
          {
            path: "",
            redirectTo: "/home/schedule",
            pathMatch: "full"
          }
        ]
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home/schedule",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
