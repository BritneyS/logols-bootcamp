import { Component } from '@angular/core';
import { PersonStatus } from './entities/PersonStatus';

import { PersonStatusService } from './services/PersonStatusService';

@Component({
  selector: 'add-status',
  templateUrl: './addStatus.component.html',
  styleUrls: ['./addStatus.component.css']
})
export class AddStatusComponent {

  public personStatus:PersonStatus;

  public constructor(private personStatusService: PersonStatusService) {
    this.personStatus = new PersonStatus();
  }

  public insertClick():void {
    console.log('test');
    console.log(this.personStatus);
    this.personStatusService.insert(this.personStatus).subscribe(() => {
      console.log("person inserted");
    }, error => console.error(error));
  }

}
