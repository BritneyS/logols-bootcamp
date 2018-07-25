import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent {
  public memberStatus:MemberStatus;
  public statuses:MemberStatus[] = [];
  public filter:string = '';
  public filteredstatuses:MemberStatus[] = [];

  public constructor(private memberStatusService: MemberStatusService) {
    this.memberStatus = new MemberStatus();
  }

  public getIDClick():void {
    console.log(this.memberStatus);
    this.memberStatusService.getAll().subscribe(result => { 
      for (let status of result) {
        if (status.memberID == this.memberStatus.memberID) {
          console.log("status.memberID: " + status.memberID);
          this.filteredstatuses.push(status);
        }
        else {
          console.log("condition false");
        }
      }
      this.statuses = this.filteredstatuses;
      this.memberStatusService.get(this.memberStatus.memberID).subscribe((memberStatus) => this.memberStatus = memberStatus);
    }, error => {
      console.log(error)
    }) 
  

    if(this.filteredstatuses !== undefined) {
      this.filteredstatuses.pop();
      console.log("record removed");
    }
  }

  public editClick():void {
    console.log(this.memberStatus);
    this.memberStatusService.update(this.memberStatus).subscribe(() => {
      console.log("person edited");
    }, error => console.error(error));
  }

}
