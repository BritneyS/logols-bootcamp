import { Component } from '@angular/core';
import { MemberStatus } from '../../entities/MemberStatus';

import { MemberStatusService } from '../../services/MemberStatusService';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent {
  public memberStatus:MemberStatus;
  public statuses:MemberStatus[] = [];
  public filter:string = '';
  public filteredstatuses:MemberStatus[] = [];

  public constructor(private memberStatusService: MemberStatusService) {
    this.memberStatus = new MemberStatus();
   /*  memberStatusService.getAll().subscribe(result => { 
      for (let status of result) {
        this.statuses.push(status);
        this.filteredstatuses.push(status);
      }
      this.statuses = this.filteredstatuses;
    }, error => {
      console.log(error)
    }); */
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
    }, error => {
      console.log(error)
    })
    if(this.filteredstatuses !== undefined) {
      this.filteredstatuses.pop();
      console.log("record removed");
    }
  }


  public deleteClick():void {
    //console.log('test');
    console.log(this.memberStatus);
    this.memberStatusService.delete(this.memberStatus.memberID).subscribe(() => {
      console.log("person deleted");
      alert("Member deleted.");
    }, error => console.error(error));
  }

}
