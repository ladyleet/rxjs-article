import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdButtonModule } from '@angular/material';
import { RxAnimationService } from './rx-animation.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/defer';

import { OuijaService } from './ouija.service';

import { AppComponent } from './app.component';
import { OuijaComponent } from './ouija/ouija.component';

@NgModule({
  declarations: [
    AppComponent,
    OuijaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdButtonModule
  ],
  providers: [OuijaService, RxAnimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
