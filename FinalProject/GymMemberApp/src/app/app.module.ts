import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MemberStatusService } from './services/MemberStatusService';

import { GymAdminComponent } from './comp-parent/gymAdmin.component';
import { NavbarComponent } from './comp-shared/navbar/navbar.component';
import { TableAllComponent } from './comp-children/table-all/table-all.component';
//import { AppRoutingModule } from './/app-routing.module';
import { TableStatusComponent } from './comp-children/table-status/table-status.component';
import { TableSwimComponent } from './comp-children/table-swim/table-swim.component';
import { TableYogaComponent } from './comp-children/table-yoga/table-yoga.component';
import { TablePilatesComponent } from './comp-children/table-pilates/table-pilates.component';
import { TableKickboxingComponent } from './comp-children/table-kickboxing/table-kickboxing.component';

const routes: Routes = [
  { path: 'gymAdmin', component: GymAdminComponent },
  { path: 'all', component: TableAllComponent },
  { path: 'status', component: TableStatusComponent },
  { path: 'swim', component: TableSwimComponent },
  { path: 'yoga', component: TableYogaComponent },
  { path: 'pilates', component: TablePilatesComponent },
  { path: 'kickboxing', component: TableKickboxingComponent },
  { path: '', component: GymAdminComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    GymAdminComponent,
    NavbarComponent,
    TableAllComponent,
    TableStatusComponent,
    TableSwimComponent,
    TableYogaComponent,
    TablePilatesComponent,
    TableKickboxingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MemberStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
