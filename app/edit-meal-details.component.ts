import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  outputs: ['onSubmitMealEdit'],
  template: `
  <div class="meal-edit-form">
    <h3>Edit Meal:</h3>
    <form>
      <input [(ngModel)]="meal.name">
      <label for="details">Details:</label>
      <textarea [(ngModel)]="meal.details"></textarea>
      <label for="calories">Calories:</label>
      <input [(ngModel)]="meal.calories">
      <button (click)="submitEdit()" type="button" id="submitEditButton">Submit Edit</button>
    </form>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public onSubmitMealEdit: EventEmitter<boolean>;
  constructor() {
    this.onSubmitMealEdit = new EventEmitter();
  }
  submitEdit() {
    this.onSubmitMealEdit.emit(true);
  }
}
