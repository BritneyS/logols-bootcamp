import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ZombieReportComponent } from './zombieReport.component';
import { AddStatusComponent } from './addStatus.component';

const appRoutes: Routes = [
  { path: 'addStatus', component: AddStatusComponent },
  { path: 'zombieReport', component: ZombieReportComponent },
  { path: '', component: ZombieReportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ZombieReportComponent,
    AddStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
