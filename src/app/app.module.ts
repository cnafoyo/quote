import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThequoteComponent } from './thequote/thequote.component';
import { QuoteformComponent } from './quoteform/quoteform.component';

@NgModule({
  declarations: [
    AppComponent,
    ThequoteComponent,
    QuoteformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
