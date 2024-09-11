import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent  {
   
  newAppointmentTittle : string ="";
  newAppointmentDate : Date = new Date; 
  appointments : Appointment[] =[]



}
