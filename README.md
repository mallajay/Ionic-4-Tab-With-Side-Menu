# Ionic-4 Tab-With-Side-Menu With Angular Component and Ionic Page

- Add New project
   - by using ```ionic start new-app```
      - From Startting Template select <b>sidemenu</b>
      -  ```
          Starter template: (Use arrow keys)
             - tabs         | A starting project with a simple tabbed interface
             - sidemenu     | A starting project with a side menu with navigation in the content area
             - blank        | A blank starter project
             - my-first-app | An example application that builds a camera with gallery
             - conference   | A kitchen-sink application that shows off all Ionic has to offer
          ```
    - Delete Home File and List File
    - Regenerate home and list file by running command ```ionic g page home``` & ```ionic g page list```
    - Generate page for tab by running command ```ionic g page home/schedule```  && ```ionic g page home/speaker```
    - Generate page for tab by running command ```ionic g c list/map```  && ```ionic g c list/music``` && ```ionic g c list/movies```
   

## By using page Routing
```
home.page.html
```

```
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule">
        <ion-icon name="calendar"></ion-icon>
        <ion-label>Schedule</ion-label>
        <ion-badge>6</ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="speaker">
        <ion-icon name="contacts"></ion-icon>
        <ion-label>Speakers</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-content>
```

```
home-routing.module
```
```
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
```

## By using Components


```
list-routing.module
```

```
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
```

```
list.page.html
```

```
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>list</ion-title>
  </ion-toolbar>
</ion-header>

 <ion-tab-bar slot="bottom">
      <ion-tab-button tab="map">
        <ion-icon name="map"></ion-icon>
        <ion-label>Map</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="music">
        <ion-label>Music</ion-label>
        <ion-icon name="musical-note"></ion-icon>
      </ion-tab-button>

      <ion-tab-button tab="movies">
        <ion-label>Movies</ion-label>
        <ion-icon name="videocam"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
```

