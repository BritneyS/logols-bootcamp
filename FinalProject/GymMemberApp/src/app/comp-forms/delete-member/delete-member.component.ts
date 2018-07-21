import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent {
  //TODO: change for deleting member
  public memberStatus:MemberStatus;

  public constructor(private memberStatusService: MemberStatusService) {
    this.memberStatus = new MemberStatus();
  }

  public insertClick():void {
    //console.log('test');
    console.log(this.memberStatus);
    this.memberStatusService.insert(this.memberStatus).subscribe(() => {
      console.log("person inserted");
    }, error => console.error(error));
  }

}
