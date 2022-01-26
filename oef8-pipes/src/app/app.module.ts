import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReverseTextPipe } from './reverse-text.pipe';
import { SortListPipePipe } from './sort-list-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseTextPipe,
    SortListPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
