import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GymAdminComponent } from './gymAdmin.component';

import { MemberStatusService } from './services/MemberStatusService';

@NgModule({
  declarations: [
    AppComponent,
    GymAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MemberStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
