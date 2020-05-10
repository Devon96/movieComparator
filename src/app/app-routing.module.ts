import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmekComponent} from './filmek/filmek.component';
import {OsszehasonlitComponent} from './osszehasonlit/osszehasonlit.component';

const routes: Routes = [{ path: '', component: FilmekComponent },
                        { path: 'hasonlit', component: OsszehasonlitComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
