import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-table-pilates',
  templateUrl: './table-pilates.component.html',
  styleUrls: ['./table-pilates.component.css']
})
export class TablePilatesComponent {

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
