import { Component } from '@angular/core';
import { MemberStatus } from '../entities/MemberStatus';
import { NavbarComponent } from '../comp-shared/navbar/navbar.component';
import { TableAllComponent } from '../comp-children/table-all/table-all.component';
import { TableStatusComponent } from '../comp-children/table-status/table-status.component';
import { TableSwimComponent } from '../comp-children/table-swim/table-swim.component';
import { TableYogaComponent } from '../comp-children/table-yoga/table-yoga.component';
import { TablePilatesComponent } from '../comp-children/table-pilates/table-pilates.component';
import { TableKickboxingComponent } from '../comp-children/table-kickboxing/table-kickboxing.component';

import { MemberStatusService } from '../services/MemberStatusService';

@Component({
  selector: 'gym-admin',
  templateUrl: './gymAdmin.component.html',
  styleUrls: ['./gymAdmin.component.css']
})
export class GymAdminComponent {
  public title:string = "Gym Admin Panel";

  public statuses:MemberStatus[] = [];

  public constructor (memberStatusService: MemberStatusService) {
    memberStatusService.getAll().subscribe(result => { 
      for (let status of result) {
        this.statuses.push(status);
      }
    }, error => {
      console.log(error)
    });
  }
}
