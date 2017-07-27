import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import {  HttpModule } from '@angular/http';

import {SpotifyService} from './components/services/spotify.service';

import { AppComponent } from './app.component';
import {NavBarComponent} from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '', component: SearchComponent

    },
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'search', component: SearchComponent
    },
    {
      path: 'artist/:id',
      component: ArtistComponent
    },
    {
      path: 'album/:id',
      component: AlbumComponent
    }
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
