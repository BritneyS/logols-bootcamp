import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { AddMemberComponent } from './comp-forms/add-member/add-member.component';
import { DeleteMemberComponent } from './comp-forms/delete-member/delete-member.component';
import { EditMemberComponent } from './comp-forms/edit-member/edit-member.component';

const routes: Routes = [
  { path: 'gymAdmin', component: GymAdminComponent },
  { path: 'all', component: TableAllComponent },
  { path: 'status', component: TableStatusComponent },
  { path: 'swim', component: TableSwimComponent },
  { path: 'yoga', component: TableYogaComponent },
  { path: 'pilates', component: TablePilatesComponent },
  { path: 'kickboxing', component: TableKickboxingComponent },
  { path: 'add', component: AddMemberComponent },
  { path: 'delete', component: DeleteMemberComponent },
  { path: 'edit', component: EditMemberComponent },
  { path: '', component: TableAllComponent }
  /* { path: '', redirectTo: '/all', pathMatch: 'full' } */
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
    TableKickboxingComponent,
    AddMemberComponent,
    DeleteMemberComponent,
    EditMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    MemberStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
