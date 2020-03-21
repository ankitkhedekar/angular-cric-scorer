import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatCardModule }  from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { ScorerComponent } from './scorer/scorer.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatButtonModule, MatRadioModule ],
  declarations: [ AppComponent, ScorerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
