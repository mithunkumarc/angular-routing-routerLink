import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RedComponent } from './red.component';
import { GreenComponent } from './green.component';
import { BlueComponent } from './blue.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, RedComponent, GreenComponent, BlueComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
