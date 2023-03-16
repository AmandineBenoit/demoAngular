import { Component } from '@angular/core';
import { Trainer } from './models/Trainer';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {

  trainers: Trainer[] = [
    { id: 1, lastname: 'Beurive', firstname: 'Aude', gender: 'f', onProject: false, onVacation: false, avatar: './assets/img/aude.png', birthdate: new Date(1989, 9, 16) },
    { id: 2, lastname: 'Ly', firstname: 'Khun', gender: 'm', onProject: true, onVacation: false, avatar: './assets/img/khun.png', birthdate: new Date(1982, 4, 6) },
    { id: 3, lastname: 'Chaineux', firstname: 'Gavin', gender: 'm', onProject: false, onVacation: true, avatar: './assets/img/gavin.png', birthdate: new Date(1993, 9, 18) }
  ]
  
weekDay: string =''

trainerOfTheDay : string = ''

  constructor() {

  }

  setTrainerOfTheDay(trainerName : string) : void {
    this.trainerOfTheDay = trainerName
  }
}
