import { Component } from '@angular/core';
import { PersonStatus } from './entities/PersonStatus';
import { RouterModule, Routes } from '@angular/router';

import { PersonStatusService } from './services/PersonStatusService';

@Component({
  selector: 'zombie-report',
  templateUrl: './zombieStatusReport.component.html',
  styleUrls: ['./zombieReport.component.css']
})
export class ZombieReportComponent {
  public title:string = "Zombie Status Report";

  public statuses:PersonStatus[] = [];

  public constructor (personStatusService: PersonStatusService) {
    personStatusService.getAll().subscribe(result => { 
      for (let status of result) {
        this.statuses.push(status);
      }
    }, error => {
      console.log(error)
    });
  }
  /*
  public constructor() {
    this.statuses = [
      {
        //personID: 1,
        firstName: 'Tom',
        lastName: 'Brady',
        personStatusId: 4,
        statusDescription: 'Unknown'
      },

      {
        //personID: 2,
        firstName: 'Lisa',
        lastName: 'Vane',
        personStatusId: 2,
        statusDescription: 'Zombie'
      },

      {
        //personID: 3,
        firstName: 'John',
        lastName: 'Jones',
        personStatusId: 3,
        statusDescription: 'Dead'
      },

      {
        //personID: 5,
        firstName: 'Valerie',
        lastName: 'Thompson',
        personStatusId: 1,
        statusDescription: 'Alive'
      },

      {
        //personID: 6,
        firstName: 'Michael',
        lastName: 'Masters',
        personStatusId: 1,
        statusDescription: 'Alive'
      },

    ]
  } */
}
