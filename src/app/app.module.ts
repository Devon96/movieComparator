import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmekComponent } from './filmek/filmek.component';
import { OsszehasonlitComponent } from './osszehasonlit/osszehasonlit.component';
import {API_URL, FilmekService} from './filmek.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export function getMovieApiUrl(): string {
  return 'https://omdbapi.com';
}

@NgModule({
  declarations: [
    AppComponent,
    FilmekComponent,
    OsszehasonlitComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    FilmekService,

    { provide: API_URL, useFactory: getMovieApiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
