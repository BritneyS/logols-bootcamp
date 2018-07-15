import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-table-swim',
  templateUrl: './table-swim.component.html',
  styleUrls: ['./table-swim.component.css']
})
export class TableSwimComponent {

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
