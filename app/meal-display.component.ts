import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{ meal.name }}</h3>
  `
})
export class MealComponent {
  public meal: Meal;
}
