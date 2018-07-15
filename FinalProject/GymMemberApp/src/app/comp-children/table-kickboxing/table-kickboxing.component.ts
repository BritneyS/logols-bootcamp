import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-table-kickboxing',
  templateUrl: './table-kickboxing.component.html',
  styleUrls: ['./table-kickboxing.component.css']
})
export class TableKickboxingComponent {

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
