import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AUTH_CONTAINER_DECLARATIONS } from './authForm';

import { ROOT_DECLARATIOS } from './root/';
import { LIB_PAGING_COMPONENTS_DECLARATIONS } from './lib/';

@NgModule({
  declarations: [
    ...AUTH_CONTAINER_DECLARATIONS,
    ...ROOT_DECLARATIOS,
    ...LIB_PAGING_COMPONENTS_DECLARATIONS,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
