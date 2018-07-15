import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.css']
})
export class TableStatusComponent {

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
