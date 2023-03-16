import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trainer } from '../../models/Trainer';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent {
  @Input() trainer! : Trainer
  @Output() onSelect : EventEmitter<string> = new EventEmitter<string>()

  selectTrainer() : void {
    this.onSelect.next(this.trainer.firstname)

  }
}
