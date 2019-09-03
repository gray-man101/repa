import 'hammerjs';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppMaterialModule} from './app.material.module';
import {AppComponent, DialogContentComponent} from './app.component';
import {RouterModule} from '@angular/router';

import {MatGridListResponsiveModule} from '../lib/mat-grid-list-responsive/mat-grid-list-responsive.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatGridListResponsiveModule,
    RouterModule.forRoot([])
  ],
  declarations: [AppComponent, DialogContentComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
