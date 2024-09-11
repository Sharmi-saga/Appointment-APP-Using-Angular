import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent  {
   
  appointment : Appointment = {
    id : 1,
    title : " First Appointment ",
    date : new Date('2024-07-30')
  }


}
