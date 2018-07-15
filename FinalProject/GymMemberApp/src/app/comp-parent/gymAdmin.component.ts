import { Component } from '@angular/core';
import { MemberStatus } from '../entities/MemberStatus';


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
