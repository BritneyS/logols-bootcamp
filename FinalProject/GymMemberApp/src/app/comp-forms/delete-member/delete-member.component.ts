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

  public getIDClick():void {
    //console.log('test');
    console.log(this.memberStatus);
    this.memberStatusService.get(this.memberStatus.memberID).subscribe(() => {
      console.log("person retrieved");
      console.log(this.memberStatus);
    }, error => console.error(error));
  }


  public deleteClick():void {
    //console.log('test');
    console.log(this.memberStatus);
    this.memberStatusService.delete(this.memberStatus.memberID).subscribe(() => {
      console.log("person deleted");
    }, error => console.error(error));
  }

}
