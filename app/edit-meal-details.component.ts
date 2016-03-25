import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-edit-form">
    <h3>Edit Meal:</h3>
    <input [(ngModel)]="meal.name">
    <label for="details">Details:</label>
      <textarea [(ngModel)]="meal.details"></textarea>
    <label for="calories">Calories:</label>
      <input [(ngModel)]="meal.calories">
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
