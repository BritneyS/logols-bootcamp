import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GymAdminComponent } from './comp-parent/gymAdmin.component';

import { MemberStatusService } from './services/MemberStatusService';
import { TableAllComponent } from './comp-children/table-all/table-all.component';


@NgModule({
  declarations: [
    AppComponent,
    GymAdminComponent,
    TableAllComponent
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
