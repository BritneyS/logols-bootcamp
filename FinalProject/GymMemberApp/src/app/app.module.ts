import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MemberStatus } from './entities/MemberStatus';

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
    Injectable,
    HttpClient,
    MemberStatus
  ],
  providers: [
    MemberStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
