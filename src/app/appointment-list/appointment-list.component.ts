import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  ngOnInit(): void {
    let savedAppointment = localStorage.getItem("appointments")9
  console.log("got log")

  }
   
  newAppointmentTittle : string ="";
  newAppointmentDate : Date = new Date; 
  appointments : Appointment[] =[];

  addAppointment()
  {
    // alert( "Your Appointment Name and date :-" + this.newAppointmentTittle + " " + this.newAppointmentDate )
    if(this.newAppointmentTittle.trim().length && this.newAppointmentDate)
    {
      let newAppointment: Appointment ={
        id: Date.now(),
        title: this.newAppointmentTittle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)
      this.newAppointmentTittle = "";
      this.newAppointmentDate = new Date();
      //alert(this.appointments.length)
      localStorage.setItem("appointments" , JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index :number)
  {
    this.appointments.splice(index ,1)
    localStorage.setItem("appointments" , JSON.stringify(this.appointments))  
  }

}
