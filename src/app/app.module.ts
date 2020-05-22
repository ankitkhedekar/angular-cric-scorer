import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule }  from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'

import { AppComponent } from './app.component';
import { ScorerComponent } from './scorer/scorer.component';
import { ScorerActionSheetComponent } from './scorer-action-sheet/scorer-action-sheet.component';
import { ScorerService } from './scorer/scorer.service';



@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatCardModule, MatButtonModule, MatRadioModule, MatBottomSheetModule ],
  declarations: [ AppComponent, ScorerComponent, ScorerActionSheetComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ ScorerActionSheetComponent ],
  providers: [ScorerService]
})
export class AppModule { }
