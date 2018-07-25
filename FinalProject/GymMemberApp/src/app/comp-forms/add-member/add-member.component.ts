import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {

  public memberStatus:MemberStatus;

  public constructor(private memberStatusService: MemberStatusService) {
    this.memberStatus = new MemberStatus();
  }

  public insertClick():void {
    //console.log('test');
    console.log(this.memberStatus);
    this.memberStatusService.insert(this.memberStatus).subscribe(() => {
      console.log("person inserted");
      alert("Member added.");
    }, error => console.error(error));
  }

}
